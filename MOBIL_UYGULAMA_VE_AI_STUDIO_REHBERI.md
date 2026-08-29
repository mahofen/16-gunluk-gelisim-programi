# 📱 16 Günlük Gelişim Programı — Mobil Uygulama Tasarımı ve Google AI Studio Entegrasyon Rehberi

Bu kılavuz, **"BENİM 16 GÜNLÜK GELİŞİM PROGRAMIM"** görsel planı ve `PLAN_GORSEL_ANALIZI_VE_TASARIM.md` mimarisi temel alınarak hazırlanan **Mobil Uygulama Tasarım Sistemi (`mobile_app.html`)** ile **Google AI Studio** doğrudan bağlantı ve yapay zeka koçluk modellerini içerir.

---

## 🔗 1. Google AI Studio Doğrudan Bağlantı Linkleri

Aşağıdaki bağlantıları kullanarak Google AI Studio ortamında doğrudan yeni bir sohbet veya yapılandırılmış prompt başlatabilirsiniz:

* 🚀 **Google AI Studio Ana Portalı:**  
  [https://aistudio.google.com/](https://aistudio.google.com/)
* 💬 **Google AI Studio Doğrudan Yeni Sohbet Başlat:**  
  [https://aistudio.google.com/prompts/new_chat](https://aistudio.google.com/prompts/new_chat)
* ⚡ **Google AI Studio API Key Alım Sayfası:**  
  [https://aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)

---

## 🧠 2. Google AI Studio İçin Hazır Sistem Promptu (System Instruction)

Google AI Studio'da **"System Instructions"** alanına yapıştırabileceğiniz, pedagojik ve eğlenceli gelişim koçu promptu:

```markdown
# ROL VE KİMLİK
Sen "16 Günlük Bütünsel Gelişim Programı" (29 Ağustos – 13 Eylül 2026) için geliştirilmiş pedagojik, pozitif pekiştireçli, motive edici bir Yapay Zeka Gelişim Koçusun (AI Coach).

# PROGRAMIN YAPISI VE ALANLARI
Öğrencinin gününü 4 temel gelişim boyutu ve 5 vakit ritmi üzerinden değerlendirirsin:
1. A. Akademik ve Bilişsel (Mavi): Konu çalışma, soru çözme, Osmanlıca, kitap/dergi okuma, not tutma.
2. B. Üretim ve Yaratıcılık (Yeşil): Resim, Lego, atölye, proje üretimi, yeni deneyler.
3. C. Fiziksel Gelişim (Turuncu): Sabah sporu, bisiklet, yüzme, bahçe oyunu, hareket.
4. D. Sorumluluk ve Yaşam Becerileri (Mor): Kahvaltıya yardım, çiçek bakımı, oda düzeni, plan takibi.

# 3 AŞAMALI YOLCULUK HEDEFLERİ
- 1. Aşama (29 Ağu - 2 Eyl) 🌱: Alışma, ritim kazanma, basit görevler.
- 2. Aşama (3 - 8 Eyl) 🚀: Gelişme, akademik artış, Osmanlıca & proje derinleşmesi.
- 3. Aşama (9 - 13 Eyl) 🎯🏆: Tamamlama, somut bir ürün ortaya koyma, final değerlendirmesi.

# DERS KURALI
Günde en az 3 ders (en az 1 Konu 'K' ve 1 Soru 'S' çözümü).

# GÖREVLERİN VE CEVAP FORMATIN
1. Öğrenci gününü paylaştığında:
   - 🌟 1 Samimi Övgü (Çabasını takdir et)
   - 💡 1 Küçük Gelişim İpucu ("Yarın neyi daha iyi yapabilirim?" sorusuna rehberlik et)
   - 📜 Günün Osmanlıca Kelimesi (Kelime, Arap harfli yazılışı ve eğlenceli anlamı)
   - 🎨 1 Yaratıcı Üretim/Proje Önerisi (Evde kolayca yapılabilecek)
2. Dil tonun: Neşeli, emojili, cesaretlendirici ve büyüme zihniyetini (growth mindset) destekleyici olmalıdır.
```

---

## 📲 3. Mobil Uygulama Mimarisi (`mobile_app.html`)

Geliştirilen mobil uygulama ([`mobile_app.html`](file:///c:/Users/mahmu/Desktop/fen%20deneme/mobile_app.html)) modern iOS ve Android tasarım dinamiklerine (Human Interface Guidelines & Material 3) uygun olarak tasarlanmıştır.

```
+-------------------------------------------------------------+
| [Status Bar]  09:41                        📶 🔋           |
| Gelişim Cepte 🚀             [ 120 XP ⚡ ] [ 3 Gün Seri 🔥 ]|
| 1. Aşama: Alışma (29 Ağu - 2 Eyl) 🌱                         |
+-------------------------------------------------------------+
| (29 CMT)  (30 PZR)  [31 PZT]*  (1 SAL)  (2 ÇAR)  (3 PER) ...|  <- Story Bar
+-------------------------------------------------------------+
|                                                             |
|  [TAB ALANI]                                                |
|  1. 🏠 BUGÜN:                                               |
|     - 1. Güne Başla 🌅 (Sabah sporu, kahvaltı, oda...)      |
|     - 2. Öğren 💡 (Konu çalış, soru çöz, Osmanlıca...)      |
|     - 3. Üret / Keşfet 🔍 (Resim, Lego, proje...)           |
|     - 4. Hareket Et 🚲 (Bisiklet, havuz, oyun...)           |
|     - 5. Sakinleş & Oku 🌙 (Kitap, günlük, öz-yansıma...)   |
|     - ⭐ Gün Sonu 5 Yıldız & "Yarın neyi daha iyi...?"      |
|                                                             |
|  2. 📚 DERSLER:                                             |
|     - Bugünün 3 Dersi (K/S Seçimi ve Tamamlandı Onayı)      |
|     - 16 Günlük 48 Ders Matrisi                             |
|                                                             |
|  3. 🤖 AI GELİŞİM KOÇU (Google AI Studio Entegrasyonu):     |
|     - "Google AI Studio'da Aç ↗" Linki                      |
|     - "Promptu Kopyala" Butonu                              |
|     - Hızlı Analiz / Osmanlıca Kelime / Proje Fikri         |
|     - Canlı Gemini REST API Bağlantı Desteği                |
|                                                             |
|  4. 🏆 ROZETLER & GELİŞİM:                                  |
|     - 4 Boyutlu Radar/Polar Grafik                          |
|     - Başarı Rozetleri Koleksiyonu                          |
|                                                             |
|  5. ⚙️ AYARLAR:                                             |
|     - JSON Yedekleme / Geri Yükleme / Sıfırlama             |
+-------------------------------------------------------------+
| [ 🏠 Bugün ] [ 📚 Dersler ]  ( 🤖 AI )  [ 🏆 Rozet ] [ ⚙️ ] |  <- Bottom Nav
+-------------------------------------------------------------+
```

---

## 🛠️ 4. Mobil UI/UX Bileşenleri ve Özellikleri

1. **Yatay Story-Style Gün Çizelgesi:**
   - Instagram/WhatsApp Story benzeri kaydırılabilir 16 gün çemberleri.
   - Tamamlanan günlerde otomatik yeşil durum noktası.
2. **Tek Dokunuşlu Durum Döngüsü (Haptic Feedback):**
   - Görevlere dokunulduğunda Web Audio API ile tatmin edici tıklama/başarı sesleri.
   - `Boş ⚪` ➔ `Yaptım 🟢` ➔ `Kısmen 🟡` ➔ `Boş ⚪` hızlı geçişi.
3. **Alt Navigasyon Çubuğu (Bottom Navigation Bar):**
   - Başparmak erişimine uygun (*Thumb-friendly*) 5 sekme.
   - Ortada özel parlayan gradientli **Google AI Studio / AI Koç Butonu**.
4. **Google AI Studio ile Canlı Etkileşim:**
   - Öğrencinin o günkü verilerini tek tıkla kopyalayıp Google AI Studio'ya aktaran mekanizma.
   - İsteğe bağlı olarak kullanıcı kendi Gemini API anahtarını girerek uygulama içinden doğrudan sohbet edebilir.

---

## 🚀 5. Çalıştırma ve Test Etme

1. **Masaüstünde Mobil Önizleme:**
   - Tarayıcınızda [`mobile_app.html`](file:///c:/Users/mahmu/Desktop/fen%20deneme/mobile_app.html) dosyasını açtığınızda telefon gövdesi içinde çalışır.
2. **Akıllı Telefon / Tablette Tam Ekran Açma:**
   - Dosyayı telefonunuzun tarayıcısında açtığınızda otomatik olarak tüm ekrana yayılır ve gerçek bir yerel uygulama hissi verir.
3. **Google AI Studio'yu Başlatma:**
   - AI sekmesindeki **"Google AI Studio'da Aç ↗"** butonuna basarak doğrudan stüdyoya gidebilir ve kopyalanan prompt ile koçluk alabilirsiniz.
