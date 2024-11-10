// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXOmzPH6qAP8_vxtEzd5FtM5Dz0hXRXtM",
  authDomain: "auth-integration-and-rou-88569.firebaseapp.com",
  projectId: "auth-integration-and-rou-88569",
  storageBucket: "auth-integration-and-rou-88569.firebasestorage.app",
  messagingSenderId: "277812136939",
  appId: "1:277812136939:web:b39fe79f0b2e129dbf27ae",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
