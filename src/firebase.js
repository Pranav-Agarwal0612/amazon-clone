// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClrTfXS9MoNWGEQFBiwigr0ohgtiBHp8M",
  authDomain: "clone-7588d.firebaseapp.com",
  projectId: "clone-7588d",
  storageBucket: "clone-7588d.appspot.com",
  messagingSenderId: "100935201914",
  appId: "1:100935201914:web:76b4ec3b7da543888cb7c3",
  measurementId: "G-BS2ZDNLS3X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);