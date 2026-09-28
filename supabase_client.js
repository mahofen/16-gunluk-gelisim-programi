/**
 * ============================================================================
 * SUPABASE BULUT SENKRONİZASYON MOTORU
 * Arif Said İlkbahar - 7. Sınıf Haftalık Gelişim & Takip Portalı
 * ============================================================================
 * Bu dosya hem masaüstü (index.html) hem mobil (mobile_app.html) için
 * Supabase PostgreSQL veritabanı bağlantısını, gerçek zamanlı (realtime)
 * veri senkronizasyonunu ve yerel yedeklemeyi yönetir.
 */

const SUPABASE_STORAGE_URL_KEY = "arif_said_supabase_url";
const SUPABASE_STORAGE_KEY_KEY = "arif_said_supabase_anon_key";

// Varsayılan boş veya ön tanımlı proje anahtarları
const DEFAULT_SUPABASE_CONFIG = {
  url: localStorage.getItem(SUPABASE_STORAGE_URL_KEY) || "",
  anonKey: localStorage.getItem(SUPABASE_STORAGE_KEY_KEY) || ""
};

let _supabaseClientInstance = null;
let _supabaseDebounceTimer = null;
let _isRealtimeSubscribed = false;

/**
 * Mevcut kayıtlı Supabase yapılandırmasını döndürür.
 */
function getSupabaseConfig() {
  return {
    url: (localStorage.getItem(SUPABASE_STORAGE_URL_KEY) || DEFAULT_SUPABASE_CONFIG.url || "").trim(),
    anonKey: (localStorage.getItem(SUPABASE_STORAGE_KEY_KEY) || DEFAULT_SUPABASE_CONFIG.anonKey || "").trim()
  };
}

/**
 * Supabase yapılandırmasını kaydeder ve istemciyi yeniden başlatır.
 */
function saveSupabaseConfig(url, anonKey) {
  localStorage.setItem(SUPABASE_STORAGE_URL_KEY, (url || "").trim());
  localStorage.setItem(SUPABASE_STORAGE_KEY_KEY, (anonKey || "").trim());
  _supabaseClientInstance = null;
  _isRealtimeSubscribed = false;
  return getSupabaseClient();
}

/**
 * Supabase JS istemcisini oluşturur veya önbellekten getirir.
 */
function getSupabaseClient() {
  if (_supabaseClientInstance) return _supabaseClientInstance;
  const cfg = getSupabaseConfig();
  if (cfg.url && cfg.anonKey && window.supabase) {
    try {
      _supabaseClientInstance = window.supabase.createClient(cfg.url, cfg.anonKey, {
        auth: { persistSession: false }
      });
      return _supabaseClientInstance;
    } catch (e) {
      console.warn("[Supabase] Başlatma hatası:", e);
      return null;
    }
  }
  return null;
}

/**
 * Supabase bağlantısının geçerli olup olmadığını test eder.
 */
async function testSupabaseConnection() {
  const client = getSupabaseClient();
  if (!client) {
    return { success: false, message: "Supabase URL veya Anon Key eksik ya da kütüphane yüklenemedi." };
  }
  try {
    const { data, error } = await client
      .from('student_records')
      .select('student_name, updated_at')
      .limit(1);

    if (error) {
      // Tablo yoksa özel açıklama
      if (error.code === '42P01') {
        return { 
          success: false, 
          message: "Bağlantı sağlandı ancak 'student_records' tablosu bulunamadı. Lütfen SQL kurulum scriptini çalıştırın.", 
          code: 'TABLE_NOT_FOUND' 
        };
      }
      return { success: false, message: `Supabase Hatası (${error.code || ''}): ${error.message}` };
    }
    return { success: true, message: "Supabase bağlantısı başarılı! Tablo ve yetkiler çalışıyor." };
  } catch (err) {
    return { success: false, message: "Ağ veya bağlantı hatası: " + (err.message || err) };
  }
}

/**
 * Buluttan öğrenci verisini çeker.
 */
async function fetchStudentFromSupabase(studentName) {
  const client = getSupabaseClient();
  if (!client) return { success: false, error: "Supabase bağlı değil" };

  try {
    const { data, error } = await client
      .from('student_records')
      .select('student_name, state_data, updated_at')
      .eq('student_name', studentName)
      .maybeSingle();

    if (error) throw error;
    if (!data) return { success: true, notFound: true, data: null };

    return { 
      success: true, 
      data: data.state_data, 
      updatedAt: data.updated_at 
    };
  } catch (err) {
    console.error("[Supabase Fetch Error]:", err);
    return { success: false, error: err.message };
  }
}

/**
 * Öğrenci verisini Supabase PostgreSQL tablosuna kaydeder (Upsert).
 */
async function saveStudentToSupabase(studentName, stateData) {
  const client = getSupabaseClient();
  if (!client) return { success: false, error: "Supabase bağlı değil" };

  try {
    updateSupabaseStatusBadge("syncing");
    const { data, error } = await client
      .from('student_records')
      .upsert({
        student_name: studentName,
        state_data: stateData,
        updated_at: new Date().toISOString()
      }, { onConflict: 'student_name' });

    if (error) throw error;
    updateSupabaseStatusBadge("synced");
    return { success: true };
  } catch (err) {
    console.error("[Supabase Save Error]:", err);
    updateSupabaseStatusBadge("error");
    return { success: false, error: err.message };
  }
}

/**
 * Değişiklik olduğunda sunucuya yüklemeyi gecikmeli (debounce) tetikler.
 */
function queueSupabaseSave(studentName, stateData) {
  const client = getSupabaseClient();
  if (!client) {
    updateSupabaseStatusBadge("unconfigured");
    return;
  }
  updateSupabaseStatusBadge("pending");
  if (_supabaseDebounceTimer) clearTimeout(_supabaseDebounceTimer);
  _supabaseDebounceTimer = setTimeout(() => {
    saveStudentToSupabase(studentName, stateData);
  }, 1000);
}

/**
 * Gerçek zamanlı değişiklikleri dinler (Supabase Realtime).
 */
function setupSupabaseRealtime(studentName, onRemoteUpdateCallback) {
  const client = getSupabaseClient();
  if (!client || _isRealtimeSubscribed) return;

  try {
    const channel = client
      .channel(`student-records-channel-${studentName}`)
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'student_records', filter: `student_name=eq.${studentName}` },
        (payload) => {
          if (payload && payload.new && payload.new.state_data && onRemoteUpdateCallback) {
            console.log("[Supabase Realtime] Buluttan güncel veri geldi.");
            onRemoteUpdateCallback(payload.new.state_data, payload.new.updated_at);
          }
        }
      )
      .subscribe((status) => {
        if (status === 'SUBSCRIBED') {
          _isRealtimeSubscribed = true;
          updateSupabaseStatusBadge("connected");
        }
      });
  } catch (e) {
    console.warn("[Supabase Realtime Setup Warning]:", e);
  }
}

/**
 * UI üzerindeki Supabase durum rozetini günceller.
 */
function updateSupabaseStatusBadge(status, customMsg) {
  const dots = document.querySelectorAll(".supabase-status-dot");
  const texts = document.querySelectorAll(".supabase-status-text");

  let dotColor = "bg-amber-400";
  let statusText = "Bulut: Bağlı Değil";

  if (status === "connected" || status === "synced") {
    dotColor = "bg-emerald-500 animate-pulse";
    statusText = "Bulut: Canlı (Supabase)";
  } else if (status === "syncing" || status === "pending") {
    dotColor = "bg-blue-500 animate-spin";
    statusText = "Buluta Kaydediliyor...";
  } else if (status === "error") {
    dotColor = "bg-rose-500";
    statusText = "Bulut: Hata!";
  } else if (status === "unconfigured") {
    dotColor = "bg-slate-300";
    statusText = "Bulut: Ayarlanmadı";
  }

  dots.forEach(d => {
    d.className = `w-2.5 h-2.5 rounded-full inline-block ${dotColor} supabase-status-dot`;
  });
  texts.forEach(t => {
    t.textContent = customMsg || statusText;
  });
}

/**
 * Supabase SQL Kurulum Komutları
 */
const SUPABASE_SETUP_SQL = `-- ============================================================
-- 1. Öğrenci Gelişim ve Takip Tablosu Oluşturma
-- ============================================================
CREATE TABLE IF NOT EXISTS public.student_records (
    student_name TEXT PRIMARY KEY,
    state_data JSONB NOT NULL DEFAULT '{}'::jsonb,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================
-- 2. Güvenlik (Row Level Security - RLS) Etkinleştirme
-- ============================================================
ALTER TABLE public.student_records ENABLE ROW LEVEL SECURITY;

-- ============================================================
-- 3. Web ve Mobil Uygulama için Okuma ve Yazma İzni
-- ============================================================
DROP POLICY IF EXISTS "Public Anon Full Access" ON public.student_records;
CREATE POLICY "Public Anon Full Access" 
ON public.student_records 
FOR ALL 
TO anon, authenticated
USING (true) 
WITH CHECK (true);

-- ============================================================
-- 4. Gerçek Zamanlı Senkronizasyon (Realtime) Açma
-- ============================================================
ALTER PUBLICATION supabase_realtime ADD TABLE public.student_records;
`;
