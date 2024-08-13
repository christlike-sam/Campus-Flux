// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore

const firebaseConfig = {
    apiKey: "AIzaSyDyrgbH5ZYYtaEzqppfogDNNdAjEeILNEY",
    authDomain: "campus-flux.firebaseapp.com",
    projectId: "campus-flux",
    storageBucket: "campus-flux.appspot.com",
    messagingSenderId: "526531543180",
    appId: "1:526531543180:web:f9a7fa6a034c129aa5fba9",
    measurementId: "G-JZY9QCGDPG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log('Firebase App Initialized:', app);

const analytics = getAnalytics(app);
console.log('Firebase Analytics:', analytics);

const storage = getStorage(app);
console.log('Firebase Storage:', storage);

const auth = getAuth(app);
console.log('Firebase Auth:', auth);

const db = getFirestore(app);
console.log('Firebase Firestore:', db);

export { app, analytics, storage, auth, db };
