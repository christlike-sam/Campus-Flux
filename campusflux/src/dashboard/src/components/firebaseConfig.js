import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, enableIndexedDbPersistence } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase configuration object
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
const db = getFirestore(app);
const auth = getAuth(app);

// Enable offline persistence
enableIndexedDbPersistence(db)
    .catch((err) => {
        if (err.code === 'failed-precondition') {
            console.error("Persistence failed: multiple tabs open.");
        } else if (err.code === 'unimplemented') {
            console.error("Persistence is not available.");
        }
    });

// Function to get user document
const getUserDocument = async (uid) => {
    try {
        const userDocRef = doc(db, 'users', uid);
        const docSnapshot = await getDoc(userDocRef);

        if (docSnapshot.exists()) {
            return docSnapshot.data();
        } else {
            console.log('No such document!');
            return null;
        }
    } catch (error) {
        console.error('Error fetching user document:', error.message);
        throw error;
    }
};

export { app, db, auth, getUserDocument };
