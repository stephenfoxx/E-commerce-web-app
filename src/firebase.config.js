// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyCy0DdXUZ2BL7veFJjfjb2gxc9GlhiH_HI",
  authDomain: "jumiaclone-701fd.firebaseapp.com",
  projectId: "jumiaclone-701fd",
  storageBucket: "jumiaclone-701fd.appspot.com",
  messagingSenderId: "284834844915",
  appId: "1:284834844915:web:36d812298c066ddc39e786",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const db  =getFirestore(app)
