import React, { useState } from 'react'
import "./StartPage.css"
import {Button, TextField} from "@mui/material"
import { useNavigate } from 'react-router-dom'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'

const StartPage = ({quizDetails, setQuizDetails}) => {
    const [error, setError] = useState(false)

    const navigate = useNavigate()
    const handleChange = (e) => {
        setQuizDetails({
            ...quizDetails,
            [e.target.name] : e.target.value
        })
    }
    const handleAddQuestion = () => {
        //console.log(quizDetails)
        if(!quizDetails.name || !quizDetails.desc || !quizDetails.time || !quizDetails.marks) {
            setError(true)
            return
        } else {
            navigate("/add")
            setQuizDetails({
            name: "",
            desc: "",
            time: "",
            marks: ""
        })
        localStorage.setItem("quizDetails", JSON.stringify(quizDetails))
        }
        
    }
  return (
    <div className='content'>
        <div className='settings'>
            <span style={{fontSize: 30}}>Quiz Settings</span>
            <div className='settings__select'>
                {error && <ErrorMessage>Please Fill all the fields</ErrorMessage>}
                <TextField label="Enter Quiz Name" variant="outlined" name="name" value={quizDetails.name} onChange={(e) => handleChange(e)} />
                <TextField label="Enter Quiz Description" variant="outlined" name="desc" value={quizDetails.desc} onChange={(e) => handleChange(e)} />
                <TextField label="Enter total marks" variant="outlined" name="marks" value={quizDetails.marks} onChange={(e) => handleChange(e)} />
                <TextField label="Enter Time Limit in mins" variant="outlined" name="time" value={quizDetails.time} onChange={(e) => handleChange(e)} />
                <Button variant="contained" color="primary" onClick={handleAddQuestion}>Create Quiz</Button>
            </div>
        </div>
        <img src="../assets/quiz.svg" className='banner' alt="" />
    </div>
  )
}

export default StartPage