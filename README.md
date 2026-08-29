# 🌟 Benim 16 Günlük Gelişim Programı | Web & Mobil Takip Portalı

> **"Bugün küçük adımlar, yarın büyük başarılar getirir! 💡"**  
> *29 Ağustos – 13 Eylül 2026 • Planla • Çalış • Üret • Hareket Et • Geliş*

Bu proje; 16 günlük bütüncül öğrenci gelişim planının görsel analizi yapılarak hazırlanmış, **Kullanıcı Girişi**, **Yönetici / Öğretmen Kontrol Paneli**, oyunlaştırılmış modern **Web Uygulaması (`index.html`)** ve **Mobil Uygulaması (`mobile_app.html`)** içeren kapsamlı bir dijital takip ve raporlama sistemidir.

---

## 📸 Ekran & Mimari Önizleme

Orijinal gelişim planı 4 temel boyut, 3 aşama ve günlük 5 vakit ritmi üzerine kurulmuştur:

```
+-----------------------------------------------------------------------------------------------+
|                        BENİM 16 GÜNLÜK GELİŞİM PROGRAMIM (29 Ağu - 13 Eyl)                    |
+-----------------------------------------------------------------------------------------------+
|  📊 YÖNETİCİ & ÖĞRETMEN PANELİ: Sınıf Başarı Raporu, Öğrenci Karneleri, Günlük Not Akışı      |
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

### 📊 1. Yönetici & Öğretmen Kontrol Paneli (YENİ!)
- **Sınıf Genel Başarı Raporu:** Toplam kayıtlı öğrenci mevcudu, sınıf tamamlama oranı (%), yapılan toplam görevler ve tamamlanan K/S dersleri tek ekranda.
- **Öğrenci Performans Listesi:** Her öğrencinin seviyesi, XP puanı, görev ve ders tamamlama yüzdeleri, aktif gün serisi (streak) ve ortalama yıldız puanı.
- **Günlük Yansıma Notları Akışı:** Öğrencilerin *"Yarın neyi daha iyi yapabilirim? Bugün neler öğrendim?"* kutusuna yazdıkları notların öğretmen ve veli tarafından tarih sırasıyla incelenebilmesi.
- **Toplu Sınıf Yedeği (JSON):** Tüm sınıfın verilerini tek tıkla bilgisayara indirme veya geri yükleme.
- **Rapor Yazdırma:** Sınıf karnesini tek tıkla yazdırma veya PDF olarak kaydetme.

### 👤 2. Çoklu Kullanıcı & Profil Yönetimi
- **İsimle Giriş Yapma:** Aynı cihazda birden fazla öğrenci (kardeşler, sınıf arkadaşları) kendi adıyla giriş yapabilir.
- **Kişiye Özel Avatar:** 15 farklı eğlenceli avatar emojisi (🚀, 🌟, 🦁, 🐯, 🦅, 📚, 🎨, 🏃, 💡, ⚡ vb.).
- **İzole Veri Saklama:** Her öğrencinin görevleri, ders matrisi, XP puanı, rozetleri ve notları `localStorage` üzerinde sadece o kullanıcı adına özel saklanır.

### 💻 3. Web Uygulaması (`index.html`)
- **Dinamik 16 Gün Çizelgesi:** 29 Ağustos'tan 13 Eylül'e kadar gün seçimi ve aşama göstergeleri.
- **5 Vakit Görev Takibi:** Tek tıkla `⚪ Yapmadım` ➔ `🟢 Yaptım (+10 XP)` ➔ `🟡 Kısmen (+5 XP)` durum döngüsü.
- **16 Günlük 48 Ders Matrisi:** Konu (K) ve Soru (S) derslerinin doğrudan tablo üzerinden yönetimi.
- **Oyunlaştırma (Gamification):** XP puanları, seviye sistemi (*Çırak ➔ Şampiyon*), başarı rozetleri ve konfeti kutlamaları.
- **Gelişim Analitiği (Chart.js):** 4 gelişim alanının polar/radar grafiği ve 16 günlük tamamlama grafiği.

### 📱 4. Mobil Uygulama (`mobile_app.html`)
- **Native Mobil Deneyim:** Instagram Story tarzı gün çizelgesi, alt navigasyon menüsü (*Bottom Navigation*), ses efektleri (*Web Audio API*).
- **Mobil Yönetici Raporu:** Üst menüden veya ayarlardan tek tıkla açılan sınıf kontrol raporu.
- **Kişisel Gelişim Asistanı:** Günlük gelişim raporunu tek tıkla kopyalama ve yapay zeka analiz desteği.

---

## 🚀 Canlı Bağlantılar ve Çalıştırma

* 🌐 **Canlı Web Uygulaması:** [https://mahofen.github.io/16-gunluk-gelisim-programi/](https://mahofen.github.io/16-gunluk-gelisim-programi/)
* 📱 **Canlı Mobil Uygulama:** [https://mahofen.github.io/16-gunluk-gelisim-programi/mobile_app.html](https://mahofen.github.io/16-gunluk-gelisim-programi/mobile_app.html)
* 📦 **GitHub Deposu:** [https://github.com/mahofen/16-gunluk-gelisim-programi](https://github.com/mahofen/16-gunluk-gelisim-programi)

Yerel ortamda çalıştırmak için:
1. Depoyu klonlayın:
   ```bash
   git clone https://github.com/mahofen/16-gunluk-gelisim-programi.git
   cd 16-gunluk-gelisim-programi
   ```
2. `index.html` veya `mobile_app.html` dosyasını tarayıcınızda açın.

---

## 📄 Lisans
Bu proje açık kaynaklı olup MIT lisansı altında paylaşılmıştır.
