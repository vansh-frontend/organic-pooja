// src/components/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAn22g0weuE3OcbGoKr9zLiji2-if4xOao",
  authDomain: "organicbypooja-2803.firebaseapp.com",
  projectId: "organicbypooja-2803",
  storageBucket: "organicbypooja-2803.appspot.com",
  messagingSenderId: "700836761199",
  appId: "1:700836761199:web:9c2143b37bf800441a079a",
  measurementId: "G-Z834VDBXBX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };