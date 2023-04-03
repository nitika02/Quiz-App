import React, { useEffect, useState } from 'react'
import "./ShowAllQues.css"
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore'
import { db } from '../../firebase/firebaseConfig'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const ShowAllQues = () => {
    const [questions, setQuestions] = useState([])
    const userCollectionRef = collection(db, "quiz")
    const navigate = useNavigate()
    let quiz = JSON.parse(localStorage.getItem("quizDetails"))

    useEffect(() => {
        const getQuestions = async () => {
            const data = await getDocs(userCollectionRef)
            setQuestions(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        getQuestions()
        
    }, [questions])

    const gotToQuiz = () => {
        navigate("/quiz")
    }

    const quitQuiz = () => {
        localStorage.clear()
        navigate("/")
    }

    const deleteQues = async(id) => {
        const quesDoc = doc(db, "quiz", id)
        await deleteDoc(quesDoc)
    }
    const addQuestions = () => {
        navigate("/add")
    }


  return (
    <div className='container'>
        <div className='quiz-details'>
            <h3>Total Time: {quiz.time}</h3>
            <h1>{quiz.name}</h1>
            <h3>Total Marks: {quiz.marks}</h3>
        </div>
        <h1>{quiz.desc}</h1>
        {questions.map((ques, id) => {
            return (
                <div className='ques-box' key={id}>
                    <h1>Q {id+1}. {ques.ques}</h1>
                    <div className='ques-options'>
                        <span>a. {ques.options[0]}</span>
                        <span>b. {ques.options[1]}</span>
                        <span>c. {ques.options[2]}</span>
                        <span>d. {ques.options[3]}</span>
                    </div>
                    <Button style={{marginTop: 40, fontSize: 10}} variant='contained' size="large" onClick={() => deleteQues(ques.id)}>Delete</Button>
                </div>
            )
        })}
        <Button style={{marginTop: 40, fontSize: 20}} variant='contained' size="large" onClick={gotToQuiz}>Start Quiz</Button>
        <Button style={{marginTop: 40, fontSize: 20, marginLeft: 40}} variant='contained' size="large" onClick={quitQuiz}>Quit Quiz</Button>
        <Button style={{marginTop: 40, fontSize: 25, marginLeft: 40}} variant='contained' size="large" onClick={addQuestions}>Add More Questions</Button>
    </div>
  )
}

export default ShowAllQues