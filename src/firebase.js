import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBe2hfWvigtDJWD3I_lhMs2xkRWYSSb9rQ",
    authDomain: "react-crud-e68ac.firebaseapp.com",
    projectId: "react-crud-e68ac",
    storageBucket: "react-crud-e68ac.appspot.com",
    messagingSenderId: "20424122588",
    appId: "1:20424122588:web:b5e532884157c0d2f21419",
    measurementId: "G-LMRMY79RQL"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
