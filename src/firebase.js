import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyDK_lQ1j5U5gDPvZ1vnnIiu_QT7ERT73I4",
    authDomain: "fiapreact.firebaseapp.com",
    projectId: "fiapreact",
    storageBucket: "fiapreact.appspot.com",
    messagingSenderId: "674234207875",
    appId: "1:674234207875:web:4b008a029c8c59d6ecd5b6"
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default app;