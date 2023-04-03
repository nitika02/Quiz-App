import React, { useState, useEffect } from 'react'
import "./AddQuestion.css"
import { Button, TextField } from '@mui/material'
import { db } from '../../firebase/firebaseConfig'
import {collection, addDoc} from "firebase/firestore"
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import { useNavigate } from 'react-router-dom'

const AddQuestion = ({quizDetails}) => {
    const [questions, setQuestions] = useState({
        ques: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        correct : ""
    })
    const [questionArr, setQuestionArr] = useState([])
    //const [users, setUsers] = useState([])
    const [error, setError] = useState(false)
    const navigate = useNavigate()
    const userCollectionRef = collection(db, "quiz")

    const handleChange = (e) => {
        setQuestions({
            ...questions,
            [e.target.name] : e.target.value
        })
    }
    // useEffect(() => {
    //     const getUsers = async () => {
    //         const data = await getDocs(userCollectionRef)
    //         setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    //     }
    //     getUsers()
    // }, [])

    const createQuestion = async () => {
        await addDoc(userCollectionRef, {
            ques: questions.ques,
            options : [questions.option1, questions.option2, questions.option3, questions.option4],
            correct: questions.correct
        })
    }
    const gotToQuiz = () => {
        navigate("/quiz")
    }
    const handleAddQuestion = (event) => {
        event.preventDefault()
        if(!questions.ques || !questions.option1 || !questions.option2 || !questions.option3 || !questions.correct) {
            setError(true)
            return
        } else {
            setQuestionArr([...questionArr, questions])
            setQuestions({
                ques: "",
                option1: "",
                option2: "",
                option3 : "",
                option4: "",
                correct : ""
            })
            createQuestion()
            setError(false)
        }
        
        //console.log(questionArr)
    }

    const showQuestions = () => {
        navigate("/ques")
    }

  return (
    <div>
        <h2 style={{fontSize: 30, textAlign: "center"}}>Please Add Questions</h2>
        <div className='settings'>
            {error && <ErrorMessage>Please add all the fields</ErrorMessage>}
            <TextField style={{marginBottom: 20, width: "80%"}} label="Enter Question" variant="outlined" name="ques" value={questions.ques} onChange={(e) => handleChange(e)} />
            <TextField style={{marginBottom: 20, width: "80%"}} label="Enter Option 1" variant="outlined" name="option1" value={questions.option1} onChange={(e) => handleChange(e)} />
            <TextField style={{marginBottom: 20, width: "80%"}} label="Enter Option 2" variant="outlined" name="option2" value={questions.option2} onChange={(e) => handleChange(e)} />
            <TextField style={{marginBottom: 20, width: "80%"}} label="Enter Option 3" variant="outlined" name="option3" value={questions.option3} onChange={(e) => handleChange(e)} />
            <TextField style={{marginBottom: 20, width: "80%"}} label="Enter Option 4" variant="outlined" name="option4" value={questions.option4} onChange={(e) => handleChange(e)} />
            <TextField style={{marginBottom: 20, width: "80%"}} label="Enter Correct Answer" variant="outlined" name="correct" value={questions.correct} onChange={(e) => handleChange(e)} />
            <div>
                <Button style={{marginRight: 30}} variant="contained" size="large" onClick={handleAddQuestion}>Add Question</Button>
                <Button variant="contained" size="large" onClick={showQuestions}>Show All Questions</Button>
                <Button style={{marginLeft : 30}} variant='contained' size="large" onClick={gotToQuiz}>Start Quiz</Button>
            </div>
        </div>
    </div>
  )
}

export default AddQuestion