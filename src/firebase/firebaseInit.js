import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAWVG-gl3nPNH15OXMEEFqcbcoaSvi4QRs",
  authDomain: "sergiocorreia-7fcac.firebaseapp.com",
  projectId: "sergiocorreia-7fcac",
  storageBucket: "sergiocorreia-7fcac.appspot.com",
  messagingSenderId: "419005600544",
  appId: "1:419005600544:web:8a378b72934331f1793d45",
  measurementId: "G-76BSW7T01P",
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp.firestore();
