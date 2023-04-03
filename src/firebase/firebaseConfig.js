import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCDeQXfLRIG0yx0j7WydD1bNRQEKA8dTJg",
  authDomain: "quiz-application-a0f9a.firebaseapp.com",
  projectId: "quiz-application-a0f9a",
  storageBucket: "quiz-application-a0f9a.appspot.com",
  messagingSenderId: "535108719194",
  appId: "1:535108719194:web:933ba01c73b5c4f382fe63",
  measurementId: "G-8Q6YFH76WY"
}

  const app = initializeApp(firebaseConfig)

  export const db = getFirestore(app)