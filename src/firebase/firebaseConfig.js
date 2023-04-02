import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBEEHfltCH7E2ypIfd0ybbj5re6IL_b5m8",
    authDomain: "quiz-app-cf9c5.firebaseapp.com",
    projectId: "quiz-app-cf9c5",
    storageBucket: "quiz-app-cf9c5.appspot.com",
    messagingSenderId: "33047182197",
    appId: "1:33047182197:web:38e0151b9b58d18be4313c",
    measurementId: "G-M9CRK4E3BN"
  };

  const app = initializeApp(firebaseConfig)

  export const db = getFirestore(app)