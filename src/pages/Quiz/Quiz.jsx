import React, { useEffect, useState } from 'react'
import "./Quiz.css"
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase/firebaseConfig'
import { useNavigate } from 'react-router-dom'
import { CircularProgress } from '@mui/material'
import Question from '../../components/Question/Question'

const Quiz = ({score, setScore}) => {
    const [questions, setQuestions] = useState([])
    const [currQues, setCurrQues] = useState(0)
    

    const userCollectionRef = collection(db, "quiz")
    const navigate = useNavigate()
    let quiz = JSON.parse(localStorage.getItem("quizDetails"))

    useEffect(() => {
        const getQuestions = async () => {
            const data = await getDocs(userCollectionRef)
            setQuestions(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        getQuestions() 
        //console.log(questions)
    }, [questions, currQues])
    //console.log(questions)

  return (
    <div className='quiz'>
        <span className='subtitle'>Welcome to {quiz.name}</span>
        {
            questions ? (
                <>
                    <div className='quizInfo'>
                        <span>Timer :</span>
                        <span>Score: {score}</span>
                    </div>
                    <Question
                        currQues={currQues}
                        setCurrQues={setCurrQues}
                        score={score}
                        setScore={setScore}
                        questions={questions}
                        setQuestions={setQuestions}
                    />
                    
                </>
            ) : (
                <CircularProgress
                    style={{margin: 100}} color= "inherit" size={150} thickness={1}
                />
            )
        }
    </div>
  )
}

export default Quiz