import firebase from "firebase";
import "firebase/storage";
// import { getFirestore } from "firebase/firestore";

// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
// import { initializeApp } from "firebase/app";
// import { collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCO37nPMBUK6juJ9dmxXzIlrS2Ng0uY-IM",
  authDomain: "faceb-4f7fb.firebaseapp.com",
  projectId: "faceb-4f7fb",
  storageBucket: "faceb-4f7fb.appspot.com",
  messagingSenderId: "948897916391",
  appId: "1:948897916391:web:766c37e6b5dba8b4680942",
  measurementId: "G-QETDY84LF1",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

// const app = initializeApp(firebaseConfig);

const db = app.firestore();
const storage = firebase.storage();

export { storage, db };
