// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDEQPl-2i8YgPAgf3P-Y-1iGdByqd4cUKo",
  authDomain: "pokemon-628b2.firebaseapp.com",
  projectId: "pokemon-628b2",
  storageBucket: "pokemon-628b2.appspot.com",
  messagingSenderId: "556044721120",
  appId: "1:556044721120:web:ac47b1c5b46f6121b86985",
  measurementId: "G-EQYR2VXFJC",
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase;
