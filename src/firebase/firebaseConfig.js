import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC7b8dy4uNyu7DwJgpmxKzEk-6D904tmkg",
  authDomain: "quiz-app-7a405.firebaseapp.com",
  projectId: "quiz-app-7a405",
  storageBucket: "quiz-app-7a405.appspot.com",
  messagingSenderId: "702297685482",
  appId: "1:702297685482:web:d738fde4fd061311a18693",
  measurementId: "G-GVZGQV3SVV"
};

  const app = initializeApp(firebaseConfig)

  export const db = getFirestore(app)