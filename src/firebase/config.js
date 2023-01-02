// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TOD-O: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAZl1agKlMOf80cl6I4rD0SFry7nBlLWQo",
    authDomain: "journal-app-ad26a.firebaseapp.com",
    projectId: "journal-app-ad26a",
    storageBucket: "journal-app-ad26a.appspot.com",
    messagingSenderId: "865110574449",
    appId: "1:865110574449:web:65d8c10b1ac2c603f9e2d0"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp)

export const FirebaseDB = getFirestore(FirebaseApp)
