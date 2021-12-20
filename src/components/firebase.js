import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { collection, getDocs } from "firebase/firestore";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyCfEya8EZc42h7bM9vWhU8Nt6VloynPVfw",
    authDomain: "vanguardia-cloudchain-votes.firebaseapp.com",
    projectId: "vanguardia-cloudchain-votes",
    storageBucket: "vanguardia-cloudchain-votes.appspot.com",
    messagingSenderId: "213267663979",
    appId: "1:213267663979:web:d73150a3cd2c6de583352e",
    measurementId: "G-QF54Z3508L"
});

const db = getFirestore(firebaseApp);




export default db;