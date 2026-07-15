// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-analytics.js";
import { getFunctions } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-functions.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVGQo2wrMNqmN9WNYF3A_9GLLTuHxjQ5s",
  authDomain: "e-piber.firebaseapp.com",
  projectId: "e-piber",
  storageBucket: "e-piber.firebasestorage.app",
  messagingSenderId: "931335143958",
  appId: "1:931335143958:web:80929de5e94e25a0376b37",
  measurementId: "G-VQWZ1BN2TQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const functions = getFunctions(app);

// Export what other files may need
export { app, analytics, functions };