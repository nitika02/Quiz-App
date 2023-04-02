import React, { useState } from 'react'
import "./AddQuestion.css"
import { Button, TextField } from '@mui/material'

const AddQuestion = () => {
    const [questions, setQuestions] = useState({
        ques: "",
        option1: "",
        option2: "",
        option3 : "",
        option4: "",
        correct : ""
    })
    const [questionArr, setQuestionArr] = useState([])

    const handleChange = (e) => {
        setQuestions({
            ...questions,
            [e.target.name] : e.target.value
        })
    }
    
    const handleAddQuestion = (event) => {
        event.preventDefault()
        setQuestionArr([...questionArr, questions])
        setQuestions({
            ques: "",
            option1: "",
            option2: "",
            option3 : "",
            option4: "",
            correct : ""
        })
        //console.log(questionArr)
    }
  return (
    <div>
        <h2 style={{fontSize: 30, textAlign: "center"}}>Please Add Questions</h2>
        <div className='settings'>
            <TextField style={{marginBottom: 20, width: "80%"}} label="Enter Question" variant="outlined" name="ques" value={questions.ques} onChange={(e) => handleChange(e)} />
            <TextField style={{marginBottom: 20, width: "80%"}} label="Enter Option 1" variant="outlined" name="option1" value={questions.option1} onChange={(e) => handleChange(e)} />
            <TextField style={{marginBottom: 20, width: "80%"}} label="Enter Option 2" variant="outlined" name="option2" value={questions.option2} onChange={(e) => handleChange(e)} />
            <TextField style={{marginBottom: 20, width: "80%"}} label="Enter Option 3" variant="outlined" name="option3" value={questions.option3} onChange={(e) => handleChange(e)} />
            <TextField style={{marginBottom: 20, width: "80%"}} label="Enter Option 4" variant="outlined" name="option4" value={questions.option4} onChange={(e) => handleChange(e)} />
            <TextField style={{marginBottom: 20, width: "80%"}} label="Enter Correct Answer" variant="outlined" name="correct" value={questions.correct} onChange={(e) => handleChange(e)} />
            <div>
                <Button variant="contained" size="large" onClick={handleAddQuestion}>Add Question</Button>
            </div>
            
        </div>
    </div>
  )
}

export default AddQuestion