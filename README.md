# 🌟 Benim 16 Günlük Gelişim Programı | Web & Mobil Takip Portalı

> **"Bugün küçük adımlar, yarın büyük başarılar getirir! 💡"**  
> *29 Ağustos – 13 Eylül 2026 • Planla • Çalış • Üret • Hareket Et • Geliş*

Bu proje; 16 günlük bütüncül öğrenci gelişim planının görsel analizi yapılarak hazırlanmış, **Kullanıcı & Yönetici Şifreli Giriş Kapısı**, **Sınıf Raporlama ve Kontrol Paneli**, oyunlaştırılmış modern **Web Uygulaması (`index.html`)** ve **Mobil Uygulaması (`mobile_app.html`)** içeren kapsamlı bir dijital takip ve yönetim sistemidir.

---

## 🔐 Giriş Bilgileri & Örnek Hesaplar

Sistem hem öğrenciler hem de yönetici/öğretmenler için tek bir güvenli giriş kapısı üzerinden çalışır:

| Hesap Türü | Kullanıcı Adı | Şifre | Yetkiler & Özellikler |
| :--- | :--- | :--- | :--- |
| **🛡️ Yönetici / Öğretmen** | `admin` | `admin123` | Tüm sınıfın mevcudunu, başarı oranlarını, ders dökümlerini, öğrencilerin yansıma notlarını inceler ve toplu yedek alır. |
| **🚀 Örnek Öğrenci 1** | `Ahmet` | `1234` | Örnek 1. gün görevleri, ders çalışması ve yansıma notu ile hazır profil. |
| **🌟 Örnek Öğrenci 2** | `Zeynep` | `1234` | Örnek spor ve soru çözümü kayıtları ile hazır profil. |
| **➕ Yeni Öğrenci Kaydı** | *Serbest İsim* | *En az 4 hane* | Giriş ekranındaki "Yeni Öğrenci Kaydı" sekmesinden anında hesap oluşturulabilir. |

---

## 📸 Ekran & Mimari Önizleme

Orijinal gelişim planı 4 temel boyut, 3 aşama ve günlük 5 vakit ritmi üzerine kurulmuştur:

```
+-----------------------------------------------------------------------------------------------+
|                        BENİM 16 GÜNLÜK GELİŞİM PROGRAMIM (29 Ağu - 13 Eyl)                    |
+-----------------------------------------------------------------------------------------------+
|  🔐 GÜVENLİ GİRİŞ PORTALI: Kullanıcı Adı & Şifre ile Öğrenci / Yönetici Doğrulaması           |
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

### 🔐 1. Güvenli Giriş & Kimlik Doğrulama Kapısı (YENİ!)
- **Tek Noktadan Giriş:** Hem öğrenciler hem de öğretmen/yönetici aynı şık giriş penceresinden giriş yapar.
- **Şifre Korumalı:** Öğrenci kendi belirlediği şifre ile giriş yaparak çalışma verilerini korur.
- **Giriş Rehberi & Tıkla-Doldur:** Giriş ekranında kurallar ve tek tıkla örnek hesapları (`admin`, `Ahmet`, `Zeynep`) doldurma kolaylığı.

### 📊 2. Yönetici & Öğretmen Kontrol Paneli
- **Sınıf Genel Başarı Raporu:** Toplam öğrenci mevcudu, sınıf tamamlama oranı (%), yapılan görevler ve tamamlanan K/S dersleri tek ekranda.
- **Öğrenci Performans Listesi:** Seviye, XP, görev/ders ilerlemeleri, seri (streak) ve ortalama yıldız puanları.
- **Günlük Yansıma Notları Akışı:** Öğrencilerin *"Yarın neyi daha iyi yapabilirim? Bugün neler öğrendim?"* kutusuna yazdıkları notların öğretmen tarafından tarih sırasıyla incelenebilmesi.
- **Toplu Sınıf Yedeği (JSON):** Tüm sınıfın verilerini tek tıkla yedekleme ve geri yükleme.

### 💻 3. Web Uygulaması (`index.html`)
- **Dinamik 16 Gün Çizelgesi:** 29 Ağustos'tan 13 Eylül'e kadar gün seçimi ve aşama göstergeleri.
- **5 Vakit Görev Takibi:** Tek tıkla `⚪ Yapmadım` ➔ `🟢 Yaptım (+10 XP)` ➔ `🟡 Kısmen (+5 XP)` durum döngüsü.
- **16 Günlük 48 Ders Matrisi:** Konu (K) ve Soru (S) derslerinin doğrudan tablo üzerinden yönetimi.
- **Oyunlaştırma (Gamification):** XP puanları, seviye sistemi (*Çırak ➔ Şampiyon*), başarı rozetleri ve konfeti kutlamaları.
- **Gelişim Analitiği (Chart.js):** 4 gelişim alanının polar/radar grafiği ve 16 günlük tamamlama grafiği.

### 📱 4. Mobil Uygulama (`mobile_app.html`)
- **Native Mobil Deneyim:** Instagram Story tarzı gün çizelgesi, alt navigasyon menüsü (*Bottom Navigation*), ses efektleri (*Web Audio API*).
- **Mobil Yönetici Raporu:** Üst menüden veya ayarlardan tek tıkla açılan sınıf kontrol raporu.
- **Kişisel Gelişim Asistanı:** Günlük gelişim raporunu tek tıkla kopyalama desteği.

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
