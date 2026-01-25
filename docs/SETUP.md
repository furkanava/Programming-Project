# Firebase Setup - Hızlı Başlangıç

## ✅ Tamamlanan Özellikler

1. ✅ **Authentication (Kimlik Doğrulama)**
   - Email/Password ile kayıt olma
   - Email/Password ile giriş yapma
   - Oturum kapatma (Logout)
   - Auth durumuna göre sayfa yönlendirmeleri

2. ✅ **Event Yönetimi**
   - Event oluşturma (Create Event)
   - Event görüntüleme (All Events, Event Detail)
   - Event silme (Manage butonu)
   - RSVP sistemi

3. ✅ **Yorumlar Sistemi**
   - Event'lere yorum yapma
   - Yorumları görüntüleme
   - Kendi yorumlarını silme

4. ✅ **Manage Butonları**
   - Event detaylarını görüntüleme
   - Event silme

## 🚀 Kurulum Adımları

### 1. Firebase Projesi Oluştur

1. [Firebase Console](https://console.firebase.google.com/)'a git
2. "Add project" tıkla
3. Proje adını gir (örn: "rzeszow-event-planner")
4. Google Analytics'i atla (opsiyonel)
5. "Create project" tıkla

### 2. Authentication'ı Aktif Et

1. Sol menüden **Authentication** > **Get started**
2. **Sign-in method** sekmesine git
3. **Email/Password** provider'ı etkinleştir
4. **Save** tıkla

### 3. Firestore Database Oluştur

1. Sol menüden **Firestore Database** > **Create database**
2. **Production mode** seç
3. Lokasyon seç (örn: `europe-west1`)
4. **Enable** tıkla

### 4. Firestore Rules'ı Ayarla

1. **Firestore Database** > **Rules** sekmesine git
2. `firestore.rules` dosyasındaki içeriği kopyala
3. Firebase Console'daki rules editörüne yapıştır
4. **Publish** tıkla

### 5. Storage'ı Aktif Et

1. Sol menüden **Storage** > **Get started**
2. **Production mode** seç
3. Lokasyon seç
4. **Rules** sekmesine git
5. `storage.rules` dosyasındaki içeriği kopyala-yapıştır
6. **Publish** tıkla

### 6. Firebase Config'i Al

1. Sol üstteki ⚙️ (Settings) > **Project settings**
2. Aşağı kaydır, **Your apps** bölümüne gel
3. **Web** ikonuna (`</>`) tıkla
4. App nickname: "Rzeszow Event Planner Web"
5. **Register app** tıkla
6. `firebaseConfig` objesini kopyala

### 7. Config Dosyasını Güncelle

1. `firebase-config.js` dosyasını aç
2. `YOUR_API_KEY`, `YOUR_PROJECT_ID` vb. değerleri Firebase'den aldığın değerlerle değiştir:

```javascript
const firebaseConfig = {
    apiKey: "AIzaSy...", // Firebase'den aldığın değer
    authDomain: "your-project-id.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project-id.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abc123"
};
```

### 8. Test Et

1. Terminal'de proje klasörüne git
2. `python3 -m http.server 8000` çalıştır
3. Tarayıcıda `http://localhost:8000` aç
4. `register.html` sayfasına git ve bir hesap oluştur
5. `signin.html` ile giriş yap
6. `create-event.html` ile bir event oluştur
7. Firebase Console'da **Firestore Database** > **Data** sekmesinde event'ini gör

## 📁 Dosya Yapısı

```
├── firebase-config.js      # Firebase yapılandırması
├── firestore.rules         # Firestore güvenlik kuralları
├── storage.rules           # Storage güvenlik kuralları
├── auth.js                 # Authentication fonksiyonları
├── events.js               # Event yönetimi fonksiyonları
├── comments.js             # Yorum yönetimi fonksiyonları
├── README-FIREBASE.md      # Detaylı Firebase dokümantasyonu
└── SETUP.md                # Bu dosya
```

## 🔧 Kullanım

### Authentication

- **Kayıt Ol**: `register.html` sayfasından yeni hesap oluştur
- **Giriş Yap**: `signin.html` sayfasından giriş yap
- **Çıkış Yap**: Dashboard'daki "Logout" butonuna tıkla

### Event Oluşturma

1. Giriş yap
2. Dashboard'dan "Create Event" butonuna tıkla
3. Formu doldur
4. "Create Event" butonuna tıkla
5. Event başarıyla oluşturuldu!

### Event Yönetimi

- **Görüntüle**: `all-events.html` sayfasında tüm public eventler
- **Detay**: Event kartındaki "View Details" butonuna tıkla
- **Sil**: Dashboard'daki "Manage" butonuna tıkla > "Delete Event" seç

### Yorumlar

1. Event detay sayfasına git
2. Yorum kutusuna yaz
3. Gönder butonuna tıkla
4. Yorumlar anında görünür!

### RSVP

1. Event detay sayfasına git
2. "I'm Going" butonuna tıkla
3. RSVP başarıyla kaydedildi!

## ⚠️ Önemli Notlar

1. **Firebase Config**: `firebase-config.js` dosyasındaki değerleri mutlaka güncelle!
2. **Rules**: Firestore ve Storage rules'ları mutlaka publish et!
3. **Indexes**: Eğer "Missing index" hatası alırsan, Firebase Console'daki linkten index oluştur
4. **CORS**: Local development için CORS sorunu olmaz, production'da ayarlamak gerekebilir

## 🐛 Sorun Giderme

### "Permission denied" hatası
- Firestore rules'ları kontrol et
- Kullanıcının authenticated olduğundan emin ol

### "Missing index" hatası
- Firebase Console'daki hata mesajındaki linke tıkla
- Index'i oluştur ve bekle (birkaç dakika sürebilir)

### Event'ler görünmüyor
- `all-events.html` sayfasında console'u kontrol et
- Firebase Console'da Firestore'da event'lerin olduğundan emin ol
- Event'lerin `isPublic: true` olduğundan emin ol

### Yorumlar görünmüyor
- Event ID'nin doğru olduğundan emin ol
- Firestore'da `events/{eventId}/comments` collection'ını kontrol et

## 📞 Yardım

Sorun yaşarsan:
1. Browser console'u kontrol et (F12)
2. Firebase Console'da hataları kontrol et
3. `README-FIREBASE.md` dosyasını oku



