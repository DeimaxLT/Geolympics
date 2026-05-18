# 🧭 GEOLYMPICS — Geocaching Varžybų Programa

Visiškai veikianti geocaching varžybų programa, veikianti su GitHub Pages + Firebase.

---

## 📁 Failų struktūra

```
geolympics/
├── index.html          ← Prisijungimo + laukimo ekranas
├── game.html           ← Žaidimo ekranas (koordinatės + QR skeneris)
├── admin.html          ← Admin valdymo skydelis
├── style.css           ← Bendri stiliai
├── firebase-config.js  ← Firebase konfigūracija (JŪS PILDOTE!)
└── README.md           ← Šis failas
```

---

## 🔥 1 ŽINGSNIS: Firebase projekto sukūrimas

### 1.1 Sukurkite Firebase paskyrą
1. Eikite į **https://console.firebase.google.com/**
2. Prisijunkite su Google paskyra
3. Spauskite **"Add project"** (Pridėti projektą)
4. Pavadinkite: `geolympics` → spauskite **Continue**
5. Google Analytics: galite išjungti → spauskite **Create project**
6. Palaukite... spauskite **Continue**

### 1.2 Sukurkite Realtime Database
1. Kairiajame meniu spauskite **"Build"** → **"Realtime Database"**
2. Spauskite **"Create Database"**
3. Pasirinkite regioną: **Europe (belgium) europe-west1** ← svarbu dėl greičio!
4. Spauskite **Next**
5. Pasirinkite **"Start in test mode"** (mes vėliau sukonfigūruosime taisykles)
6. Spauskite **Enable**

### 1.3 Nustatykite saugumo taisykles
1. Realtime Database skyriuje spauskite **"Rules"** (taisyklės)
2. Ištrinkite viską ir įklijuokite:

```json
{
  "rules": {
    "game": {
      ".read": true,
      ".write": true
    },
    "players": {
      ".read": true,
      "$player": {
        ".write": true
      }
    }
  }
}
```

3. Spauskite **"Publish"**

> ⚠️ Šios taisyklės leidžia visiems skaityti ir rašyti.
> Žaidimo metu tai gerai, bet po žaidimo galite išjungti rašymą.

### 1.4 Gaukite Firebase konfigūraciją
1. Kairiajame meniu spauskite ⚙️ **"Project settings"**
2. Slinkite žemyn iki **"Your apps"**
3. Spauskite **"</>"** (Web app) mygtuką
4. Pavadinkite: `geolympics-web` → spauskite **"Register app"**
5. Pamatysite kodą, panašų į:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "geolympics-xxxxx.firebaseapp.com",
  databaseURL: "https://geolympics-xxxxx-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "geolympics-xxxxx",
  storageBucket: "geolympics-xxxxx.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef..."
};
```

6. **Nukopijuokite šias reikšmes!**

---

## ⚙️ 2 ŽINGSNIS: Konfigūracijos failo pildymas

Atidarykite **`firebase-config.js`** ir pakeiskite reikšmes:

```javascript
const firebaseConfig = {
  apiKey:            "ĮKLIJUOKITE_SAVO_API_KEY",
  authDomain:        "JŪSŲ_PROJEKTAS.firebaseapp.com",
  databaseURL:       "https://JŪSŲ_PROJEKTAS-default-rtdb.europe-west1.firebasedatabase.app",
  projectId:         "JŪSŲ_PROJEKTAS",
  storageBucket:     "JŪSŲ_PROJEKTAS.appspot.com",
  messagingSenderId: "JŪSŲ_SENDER_ID",
  appId:             "JŪSŲ_APP_ID"
};
```

Taip pat galite **pakeisti pradines koordinates**:

```javascript
const DEFAULT_WAYPOINTS = [
  { id: 1,  lat: 55.7094, lng: 21.1321, hint: "Prie fontano" },
  { id: 2,  lat: 55.7108, lng: 21.1356, hint: "Prie tilto"   },
  // ... (10 stotelių)
];
```

---

## 🔑 3 ŽINGSNIS: Admin slaptažodžio keitimas

Atidarykite **`admin.html`** ir raskite šią eilutę:

```javascript
const ADMIN_PASSWORD = 'geolympics2025';
```

**Pakeiskite į savo slaptažodį!** Pvz.:
```javascript
const ADMIN_PASSWORD = 'SuperSlaptasZodis2025!';
```

---

## 🐙 4 ŽINGSNIS: GitHub Pages publikavimas

### 4.1 Sukurkite GitHub repozitoriją
1. Eikite į **https://github.com/new**
2. Repository name: `geolympics`
3. Pasirinkite **Public** (GitHub Pages veikia tik su Public arba Pro planu)
4. Spauskite **"Create repository"**

### 4.2 Įkelkite failus
**Variantas A: Per naršyklę (paprasčiausias)**
1. Savo GitHub repozitorijoje spauskite **"uploading an existing file"**
2. Vilkite visus failus: `index.html`, `game.html`, `admin.html`, `style.css`, `firebase-config.js`
3. Spauskite **"Commit changes"**

**Variantas B: Per terminalą (jei turite Git)**
```bash
git init
git add .
git commit -m "Pirmasis Geolympics paleidimas"
git remote add origin https://github.com/JŪSŲ_VARTOTOJAS/geolympics.git
git push -u origin main
```

### 4.3 Įjunkite GitHub Pages
1. GitHub repozitorijoje spauskite **"Settings"** (viršuje dešinėje)
2. Kairiajame meniu spauskite **"Pages"**
3. Source: **"Deploy from a branch"**
4. Branch: **"main"**, Folder: **"/ (root)"**
5. Spauskite **"Save"**
6. Palaukite 1-2 minutes...
7. Pasirodys nuoroda: `https://JŪSŲ_VARTOTOJAS.github.io/geolympics/`

> 🎉 Jūsų programa yra internete!

---

## 🖨️ 5 ŽINGSNIS: QR kodų generavimas

Kiekvienai stotelei reikia QR kodo su atitinkama reikšme:

| Stotis | QR kodo turinys     |
|--------|---------------------|
| 1      | `GEOLYMPICS_WP_1`   |
| 2      | `GEOLYMPICS_WP_2`   |
| 3      | `GEOLYMPICS_WP_3`   |
| 4      | `GEOLYMPICS_WP_4`   |
| 5      | `GEOLYMPICS_WP_5`   |
| 6      | `GEOLYMPICS_WP_6`   |
| 7      | `GEOLYMPICS_WP_7`   |
| 8      | `GEOLYMPICS_WP_8`   |
| 9      | `GEOLYMPICS_WP_9`   |
| 10     | `GEOLYMPICS_WP_10`  |

### Kaip sugeneruoti QR kodus (nemokama):
1. Eikite į **https://www.qr-code-generator.com/** arba **https://qrcode.tec-it.com/**
2. Pasirinkite **"Text"** / **"Free text"** tipą
3. Įveskite pvz. `GEOLYMPICS_WP_1`
4. Atsisiųskite PNG
5. Pakartokite visoms 10 stotelių

### Admin skydelyje:
Admin puslapyje (`admin.html`) rasite visų 10 stotelių QR reikšmes su **📋 Kopijuoti** mygtuku — kopijuokite ir klijuokite į QR generatorių!

### Spausdinimas:
- Spausdinkite ant A5 popieriaus
- Laminavimas apsaugos nuo lietaus 🌧️
- Rekomenduojama dydis: min. 5×5 cm

---

## 🎮 6 ŽINGSNIS: Žaidimo eiga

### Prieš žaidimą:
1. Eikite į `admin.html` → prisijunkite slaptažodžiu
2. Įveskite stotelių koordinates → spauskite **"Išsaugoti"**
3. Paslėpkite QR kodus stotelėse

### Žaidimo pradžia:
1. Žaidėjai atidaro `index.html` ir įveda slapyvardį
2. Visi mato laukimo ekraną
3. Admin spauskia **▶ PRADĖTI ŽAIDIMĄ**
4. Visi žaidėjai **automatiškai** persijungia į žaidimo ekraną!

### Žaidimo metu:
- Žaidėjai mato pirmosios stotelės koordinates
- Eina į vietą, nuskenuoja QR kodą
- Automatiškai gauna kitos stotelės koordinates
- Lyderių lentelė atnaujinama realiu laiku

### Žaidimo pabaiga:
- Žaidėjai finišuoja → jiems rodomas 🏆 ekranas su laiku
- Admin mato visų žaidėjų rezultatus
- Admin gali spausti **⏹ BAIGTI ŽAIDIMĄ** bet kada

---

## ❓ Dažniausiai pasitaikančios problemos

### "Kamera nepasiekiama"
- Patikrinkite, kad naršyklė turi leidimą naudoti kamerą
- Programa turi veikti per HTTPS (GitHub Pages tai užtikrina ✅)
- Bandykite Chrome naršyklę

### Firebase klaida konsolėje
- Patikrinkite `firebase-config.js` — ar teisingai nukopijuotos reikšmės?
- Patikrinkite Firebase Rules — ar leista skaityti/rašyti?

### QR kodas neskenuojamas
- Patikrinkite, kad QR kodo turinys tiksliai atitinka pvz. `GEOLYMPICS_WP_3`
- QR kodas turi būti gerai apšviestas
- Kamera turi būti 15-30 cm atstumu

### Žaidėjai negali prisijungti
- Ar Firebase konfigūracija teisinga?
- Ar Firebase Rules leidžia rašyti į `players`?

---

## 📱 Rekomenduojamos naršyklės
- ✅ Chrome (Android / iOS)
- ✅ Safari (iOS)
- ✅ Firefox (Android)
- ⚠️ Samsung Internet — gali veikti su kai kuriais apribojimais

---

## 🔒 Po žaidimo — saugumo nustatymai

Baigus žaidimą, rekomenduojama apriboti Firebase Rules:
```json
{
  "rules": {
    ".read": false,
    ".write": false
  }
}
```

---

*Geolympics · Geocaching varžybų platforma · 2025*
