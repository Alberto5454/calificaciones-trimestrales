// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6j5ZXhKdE7bnCW2IuQFUMIvHBCahERrw",
  authDomain: "calificaciones-5f6f2.firebaseapp.com",
  projectId: "calificaciones-5f6f2",
  storageBucket: "calificaciones-5f6f2.appspot.com",
  messagingSenderId: "549462898749",
  appId: "1:549462898749:web:c71150aa005ec22119d254",
  measurementId: "G-5R8R856DTK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);