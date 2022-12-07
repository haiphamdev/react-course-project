import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCcnPqdKy2fn1z5PMR6ywopOUYLRC9qu5M",
  authDomain: "monkey-blogging-d223b.firebaseapp.com",
  projectId: "monkey-blogging-d223b",
  storageBucket: "monkey-blogging-d223b.appspot.com",
  messagingSenderId: "444556219914",
  appId: "1:444556219914:web:bc24d1efde5c6bf33ab1f3",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
