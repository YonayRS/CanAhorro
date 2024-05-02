import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDmtpqle_O59lZPPIzzYoX-AVzNQmhtjIY",
  authDomain: "canahorro-d4714.firebaseapp.com",
  projectId: "canahorro-d4714",
  storageBucket: "canahorro-d4714.appspot.com",
  messagingSenderId: "1049799139521",
  appId: "1:1049799139521:web:7798dde66628244ccb3440",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app); // Obtener una referencia a la base de datos

export default db;
