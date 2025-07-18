// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeNi9UoQVgqJyniJ3GiAL9A5XleqdRnns",
  authDomain: "test-f1217.firebaseapp.com",
  databaseURL: "https://test-f1217-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "test-f1217",
  storageBucket: "test-f1217.firebasestorage.app",
  messagingSenderId: "1070769270585",
  appId: "1:1070769270585:web:679d72cba1b839665f42e8",
  measurementId: "G-5769M9LQ9B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)
const analytics = getAnalytics(app);