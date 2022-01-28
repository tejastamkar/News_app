// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

// import { getDatabase } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZLwy4Ti2BI4w-epLejFSxMOtst0Qjj84",
    authDomain: "de-weadar.firebaseapp.com",
    databaseURL: "https://de-weadar-default-rtdb.firebaseio.com",
    projectId: "de-weadar",
    storageBucket: "de-weadar.appspot.com",
    messagingSenderId: "199689466325",
    appId: "1:199689466325:web:03ef112990f686e4c64d5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export var db = getFirestore(app);



