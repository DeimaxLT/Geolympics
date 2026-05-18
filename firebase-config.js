// ============================================================
//  GEOLYMPICS — Firebase konfigūracija
//  Pakeiskite šias reikšmes savo Firebase projekto nustatymais!
//  (Replace these with YOUR Firebase project values)
// ============================================================

const firebaseConfig = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL:       "https://YOUR_PROJECT_ID-default-rtdb.europe-west1.firebasedatabase.app",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// ============================================================
//  DEFAULT WAYPOINTS — Keiskite koordinates čia arba per Admin
//  (Change coordinates here OR via the Admin panel)
// ============================================================
const DEFAULT_WAYPOINTS = [
  { id: 1,  lat: 55.7094, lng: 21.1321, hint: "Pirmoji stotis" },
  { id: 2,  lat: 55.7108, lng: 21.1356, hint: "Antroji stotis"  },
  { id: 3,  lat: 55.7123, lng: 21.1389, hint: "Trečioji stotis" },
  { id: 4,  lat: 55.7139, lng: 21.1412, hint: "Ketvirtoji stotis"},
  { id: 5,  lat: 55.7152, lng: 21.1445, hint: "Penktoji stotis" },
  { id: 6,  lat: 55.7165, lng: 21.1478, hint: "Šeštoji stotis"  },
  { id: 7,  lat: 55.7178, lng: 21.1501, hint: "Septintoji stotis"},
  { id: 8,  lat: 55.7191, lng: 21.1534, hint: "Aštuntoji stotis"},
  { id: 9,  lat: 55.7204, lng: 21.1567, hint: "Devintoji stotis"},
  { id: 10, lat: 55.7217, lng: 21.1601, hint: "Finišas!"        }
];
