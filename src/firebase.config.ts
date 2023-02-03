// firebase.config.ts

import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9UQhmeOU0gWvPEF2KHMVD8CACxYk8SHY",
  authDomain: "membership-80362.firebaseapp.com",
  projectId: "membership-80362",
  storageBucket: "membership-80362.appspot.com",
  messagingSenderId: "1092273264588",
  appId: "1:1092273264588:web:8fb73eb8d1f4a8bbd7af69",
  measurementId: "G-W5LPRYRZ0S",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
