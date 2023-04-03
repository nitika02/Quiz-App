import React, { useEffect, useState } from 'react'
import "./Question.css"
import { Button, CircularProgress } from '@mui/material'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import { useNavigate } from 'react-router-dom'

const Question = ({score, setScore, currQues, setCurrQues, questions, setQuestions}) => {
  const [selected, setSelected] = useState()
  const [error, setError] = useState(false)
  const navigate = useNavigate()
  
  //console.log(questions)
  const handleSelect = (i) => {
   if(selected === i && selected === questions[currQues].correct) {
    return "select"
   } else if(selected === i && selected !== questions[currQues].correct) {
    return "wrong"
   } else if(i === questions[currQues].correct) {
    return "select"
   }
  }

  const handleCheck = (i) => {
    setSelected(i)
    if(i === questions[currQues].correct) setScore(score + 1)
    setError(false)
  }

  const handleNext = () => {
    if(currQues >= questions.length-1) {
        navigate("/result")
    } else if(selected) {
        setCurrQues(currQues + 1);
        setSelected()
    } else {
        setError("Please select an option first")
    }
  }

  const handleQuit = () => {
    setCurrQues(0);
    setQuestions();
  };
  
    return (
    <div className='question'>
        <h1>Question {currQues + 1}</h1>
        <div className='singleQuestion'>
            {
                questions.length !== 0 && (
                    <>
                        <h2>{questions[currQues].ques}</h2>
                        <div className='options'>
                            {error && <ErrorMessage>{error}</ErrorMessage>}
                            {
                                questions[currQues].options.map((i) => {
                                    return (
                                        <button
                                        onClick={() => handleCheck(i)}
                                        key={i}
                                        disabled={selected}
                                        className={`singleOption ${selected && handleSelect(i)}`}
                                        >{i}</button>
                                    )
                                })
                            }
                        </div>
                        <div className='controls'>
                            <Button variant="contained" color="secondary" size="large" style={{width: 185}} href="/" onClick={handleQuit}>
                                Quit
                            </Button>
                            <Button variant="contained" color="primary" size="large" style={{width: 185}} onClick={handleNext}>
                                Next Question
                            </Button>
                        </div>
                    </>
                )
            }
        </div>
    </div>
  )
}

export default Question