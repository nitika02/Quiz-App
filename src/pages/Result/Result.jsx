import React, { useEffect } from 'react'
import "./Result.css"
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { collection, deleteDoc, getDocs } from 'firebase/firestore'
import { db } from '../../firebase/firebaseConfig'

const Result = ({score, setScore}) => {
    const navigate = useNavigate()
    const quiz = JSON.parse(localStorage.getItem("quizDetails"))

    useEffect(() => {
        if(!quiz.name) {
            navigate("/")
        }
    }, [quiz.name, navigate])

    const deleteAllDocuments = async () => {
        const collectionRef = collection(db, "quiz");
        const snapshot = await getDocs(collectionRef);
        snapshot.forEach((doc) => {
          deleteDoc(doc.ref);
        });
        
    }

    const gotTohome = () => {
        localStorage.clear()
        navigate("/")
        deleteAllDocuments()
        setScore(0)
    }

  return (
    <div className='result'>
        <span className='title'>Final Score : {score}/{quiz.marks}</span>
        <Button variant='contained' color="primary" size="large" style={{alignSelf: "center", marginTop: 20}} onClick={gotTohome}>GO TO HOMEPAGE</Button>
    </div>
  )
}

export default Result