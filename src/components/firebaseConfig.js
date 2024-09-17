// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
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

// Initialize Firebase Authentication
export const auth = getAuth(app);
