# 🚀 Supabase Bulut Veritabanı Kurulum ve Senkronizasyon Rehberi

Bu rehber, **Arif Said İlkbahar - 7. Sınıf Haftalık Gelişim Portalı** verilerini **Supabase (Bulut PostgreSQL)** üzerine bağlayarak tüm cihazlarınızda (telefon, tablet, bilgisayar) verileri kayıpsız ve gerçek zamanlı senkronize etmeniz için hazırlanmıştır.

---

## 📌 1. Adım: Supabase Projesi Oluşturma (2 Dakika)

1. [https://supabase.com](https://supabase.com) adresine gidin ve ücretsiz bir hesap açın (veya GitHub hesabınızla giriş yapın).
2. **"New Project"** (Yeni Proje) butonuna tıklayın.
3. Projenize bir ad verin (Örn: `arif-said-gelisim`).
4. Güçlü bir veritabanı şifresi belirleyin ve bölge olarak **Frankfurt (eu-central-1)** seçin.
5. **"Create new project"** butonuna basarak projenin kurulmasını bekleyin (yaklaşık 1-2 dakika sürer).

---

## 📌 2. Adım: SQL Tablosunu Oluşturma (1 Dakika)

1. Supabase Dashboard'da sol menüdeki **"SQL Editor"** (<i class="fa-solid fa-terminal"></i>) simgesine tıklayın.
2. **"New query"** butonuna tıklayın.
3. Aşağıdaki SQL kodunu olduğu gibi yapıştırın ve sağ alttaki **"Run"** butonuna basın:

```sql
-- ============================================================
-- 1. Öğrenci Gelişim ve Takip Tablosu
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
```

> **Başarılı Mesajı:** Alt kısımda *"Success. No rows returned"* yazısını gördüğünüzde tablonuz ve yetkileriniz hazır demektir!

---

## 📌 3. Adım: API Anahtarları (Aktif Proje Bilgileri Tanımlandı)

Aşağıdaki aktif Supabase bilgileri doğrudan projenize (`supabase_client.js`) ön tanımlı olarak işlenmiştir:

- **Project ID:** `gkkgtihqfihkeooiqoja`
- **Project URL:** `https://gkkgtihqfihkeooiqoja.supabase.co`
- **Anon Public Key:** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

Uygulamanız açıldığı anda bu bilgileri otomatik tanır ve doğrudan canlı bulut veritabanına bağlanır. Dilerseniz üst menüdeki **"Supabase Bulut"** (<i class="fa-solid fa-cloud"></i>) butonundan bağlantı durumunu kontrol edebilirsiniz.

---

## 🌟 Neler Sağlandı?

- 🟢 **Gerçek Zamanlı (Realtime) Çift Yönlü Eşitleme:** Telefonda bir konuyu veya soru sayısını değiştirdiğinizde bilgisayar ekranı anında yenilenir!
- 🛡️ **Kayıpsız Yedekleme:** Tarayıcı geçmişi veya önbellek silinse dahi tüm verileriniz Supabase PostgreSQL bulutunda güvendedir.
- ⚡ **Çevrimdışı (Offline-First) Destek:** İnternet kesilse bile uygulama `localStorage` üzerinde çalışmaya devam eder, internet geldiğinde otomatik buluta senkronize olur.
- 📋 **Manuel Yedekleme & Geri Yükleme:** İstediğiniz an tek tıkla buluta yükleyebilir veya buluttan indirebilirsiniz.
