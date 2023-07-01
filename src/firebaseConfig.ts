
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDgbqF55s_2eyLSPDNhGMVPsQLx7qHw-eY",
  authDomain: "market-1f3f0.firebaseapp.com",
  projectId: "market-1f3f0",
  storageBucket: "market-1f3f0.appspot.com",
  messagingSenderId: "429172679982",
  appId: "1:429172679982:web:9d188cee9827de442c06bf",
  measurementId: "G-JMJRS51JS7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };