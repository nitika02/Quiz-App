import React, { useEffect } from 'react'
import "./Result.css"
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Result = ({score}) => {
    const navigate = useNavigate()
    const quiz = JSON.parse(localStorage.getItem("quizDetails"))

    useEffect(() => {
        if(!quiz.name) {
            navigate("/")
        }
    }, [quiz.name, navigate])

    const gotTohome = () => {
        localStorage.clear()
        navigate("/")
    }

  return (
    <div className='result'>
        <span className='title'>Final Score : {score}/{quiz.marks}</span>
        <Button variant='contained' color="primary" size="large" style={{alignSelf: "center", marginTop: 20}} onClick={gotTohome}>GO TO HOMEPAGE</Button>
    </div>
  )
}

export default Result