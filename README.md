# 🌟 Benim 16 Günlük Gelişim Programı | Web & Mobil Takip Portalı

> **"Bugün küçük adımlar, yarın büyük başarılar getirir! 💡"**  
> *29 Ağustos – 13 Eylül 2026 • Planla • Çalış • Üret • Hareket Et • Geliş*

Bu proje; 16 günlük bütüncül öğrenci gelişim planının görsel analizi yapılarak hazırlanmış, **Kullanıcı Girişi & Çoklu Profil Destekli**, oyunlaştırılmış modern **Web Uygulaması (`index.html`)**, **Mobil Uygulaması (`mobile_app.html`)** ve **Google AI Studio** koçluk entegrasyonunu içeren kapsamlı bir dijital takip sistemidir.

---

## 📸 Ekran & Mimari Önizleme

Orijinal gelişim planı 4 temel boyut, 3 aşama ve günlük 5 vakit ritmi üzerine kurulmuştur:

```
+-----------------------------------------------------------------------------------------------+
|                        BENİM 16 GÜNLÜK GELİŞİM PROGRAMIM (29 Ağu - 13 Eyl)                    |
+-----------------------------------------------------------------------------------------------+
|  👤 Çoklu Kullanıcı & Profil: Ahmet (🚀), Zeynep (🌟), Mehmet (🦁) - Kişiye Özel Veri Kaydı   |
+-----------------------------------------------------------------------------------------------+
|  A. Bilişsel & Akademik 🧠  |  B. Üretim & Keşif 🎨  |  C. Fiziksel 🏃  |  D. Yaşam Becerisi 🌱 |
+-----------------------------------------------------------------------------------------------+
|  1. Aşama: Alışma 🌱 (29 Ağu - 2 Eyl)  | 2. Aşama: Gelişme 🚀 (3-8 Eyl) | 3. Aşama: Tamamlama 🎯 |
+-----------------------------------------------------------------------------------------------+
|  5 Vakit: 1. Güne Başla 🌅 ➔ 2. Öğren 💡 ➔ 3. Üret 🔍 ➔ 4. Hareket Et 🚲 ➔ 5. Sakinleş & Oku 🌙|
+-----------------------------------------------------------------------------------------------+
|  Ders Matrisi: Günde 3 Ders (Konu 'K' & Soru 'S') x 16 Gün = 48 Ders Takip Slotu               |
+-----------------------------------------------------------------------------------------------+
|  Öz-Değerlendirme: ⭐⭐⭐⭐⭐ 5 Yıldız Puanlama & "Yarın neyi daha iyi yapabilirim?" Not Defteri|
+-----------------------------------------------------------------------------------------------+
```

---

## ✨ Temel Özellikler

### 👤 1. Çoklu Kullanıcı & Profil Yönetimi (YENİ!)
- **İsimle Giriş Yapma:** Aynı cihaz veya tarayıcıda birden fazla öğrenci/kullanıcı (kardeşler, sınıf arkadaşları) kendi adıyla giriş yapabilir.
- **Kişiye Özel Avatar:** 15 farklı eğlenceli avatar emojisi (🚀, 🌟, 🦁, 🐯, 🦅, 📚, 🎨, 🏃, 💡, ⚡ vb.).
- **İzole Veri Saklama:** Her öğrencinin görevleri, ders matrisi, XP puanı, rozetleri ve notları `localStorage` üzerinde sadece o kullanıcı adına özel saklanır.
- **Tek Tıkla Profil Değiştirme:** Listeden istediğiniz profile tek tıkla geçiş yapabilirsiniz.

### 💻 2. Web Uygulaması (`index.html`)
- **Dinamik 16 Gün Çizelgesi:** 29 Ağustos'tan 13 Eylül'e kadar gün seçimi ve aşama göstergeleri.
- **5 Vakit Görev Takibi:** Tek tıkla `⚪ Yapmadım` ➔ `🟢 Yaptım (+10 XP)` ➔ `🟡 Kısmen (+5 XP)` durum döngüsü.
- **16 Günlük 48 Ders Matrisi:** Konu (K) ve Soru (S) derslerinin doğrudan tablo üzerinden yönetimi.
- **Oyunlaştırma (Gamification):** XP puanları, seviye sistemi (*Çırak ➔ Şampiyon*), başarı rozetleri ve konfeti kutlamaları.
- **Gelişim Analitiği (Chart.js):** 4 gelişim alanının polar/radar grafiği ve 16 günlük tamamlama grafiği.
- **Kalıcı Hafıza & Yedekleme:** Kullanıcı bazlı otomatik kayıt, JSON formatında içe/dışa aktarma ve yazdırma (print/PDF) modu.

### 📱 3. Mobil Uygulama (`mobile_app.html`)
- **Native Mobil Deneyim:** Instagram Story tarzı gün çizelgesi, alt navigasyon menüsü (*Bottom Navigation*), ses efektleri (*Web Audio API*).
- **Google AI Studio Entegrasyonu:** Tek tıkla stüdyoyu açma, hazır sistem promptu ve canlı Gemini 2.0 / 1.5 REST API bağlantı desteği.
- **Mobil Profil Değiştirici:** Üst bardan veya ayarlar sekmesinden tek dokunuşla kullanıcı değiştirme.

---

## 🤖 Google AI Studio Entegrasyonu

Proje, Google AI Studio ile entegre çalışacak şekilde tasarlanmıştır:
- 🚀 **[Google AI Studio Ana Portal](https://aistudio.google.com/)**
- 💬 **[Yeni AI Sohbet Başlat](https://aistudio.google.com/prompts/new_chat)**
- 🔑 **[API Key Al](https://aistudio.google.com/app/apikey)**

Detaylı prompt şablonları ve API kullanımı için [**`MOBIL_UYGULAMA_VE_AI_STUDIO_REHBERI.md`**](MOBIL_UYGULAMA_VE_AI_STUDIO_REHBERI.md) dosyasını inceleyebilirsiniz.

---

## 🚀 Canlı Bağlantılar ve Çalıştırma

* 🌐 **Canlı Web Uygulaması:** [https://mahofen.github.io/16-gunluk-gelisim-programi/](https://mahofen.github.io/16-gunluk-gelisim-programi/)
* 📱 **Canlı Mobil Uygulama:** [https://mahofen.github.io/16-gunluk-gelisim-programi/mobile_app.html](https://mahofen.github.io/16-gunluk-gelisim-programi/mobile_app.html)

Yerel ortamda çalıştırmak için:
1. Depoyu klonlayın:
   ```bash
   git clone https://github.com/mahofen/16-gunluk-gelisim-programi.git
   cd 16-gunluk-gelisim-programi
   ```
2. `index.html` veya `mobile_app.html` dosyasını tarayıcınızda açın.

---

## 📁 Proje Dosya Yapısı

```text
├── index.html                             # Çoklu Kullanıcı Destekli Web Portalı
├── mobile_app.html                        # Mobil Odaklı Web Uygulaması (PWA Uyumlu)
├── plan.png                               # Orijinal 16 Günlük Gelişim Planı Görseli
├── PLAN_GORSEL_ANALIZI_VE_TASARIM.md      # Detaylı Pedagojik ve Görsel Analiz Raporu
├── MOBIL_UYGULAMA_VE_AI_STUDIO_REHBERI.md # Mobil Tasarım & Google AI Studio Rehberi
├── Osmanlıca_Niçin_Öğrenmeliyiz...md      # Osmanlıca Eğitim Semineri Notları
├── infografik.html                        # Seminer İnfografik Web Sayfası
├── infografik.md                          # İnfografik Metin Dokümantasyonu
└── README.md                              # Proje Tanıtım ve Kılavuz Belgesi
```

---

## 📄 Lisans
Bu proje açık kaynaklı olup MIT lisansı altında paylaşılmıştır.
