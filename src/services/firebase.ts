// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpe1_8aoOepthImYOrcdwh7YN9DS8OWj8",
  authDomain: "solution-a842d.firebaseapp.com",
  projectId: "solution-a842d",
  storageBucket: "solution-a842d.appspot.com",
  messagingSenderId: "260736396028",
  appId: "1:260736396028:web:6152d3ac270580af72c579",
  measurementId: "G-PQMT34YN1S"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export { auth, provider};