// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuHGfpsVX0eJIjpcglYJpoC-rjSOJq5cg",
  authDomain: "prince-meeting-app.firebaseapp.com",
  projectId: "prince-meeting-app",
  storageBucket: "prince-meeting-app.firebasestorage.app",
  messagingSenderId: "397491174815",
  appId: "1:397491174815:web:1616903bbc10e8e7dfd1aa",
  measurementId: "G-ST0DL3M062"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
