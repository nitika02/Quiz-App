import React, {useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../components/Header/Header'
import StartPage from './Start/StartPage'
import AddQuestion from './AddQuestions/AddQuestion'
import Quiz from './Quiz/Quiz'
import Result from './Result/Result'


const AllRoutes = () => {
    const [quizDetails, setQuizDetails] = useState({
        name: "",
        desc: "",
        time: "",
        marks: ""
    })
  return (
    <div>
        <Header />
        <Routes>
            <Route path="/" element={<StartPage quizDetails={quizDetails} setQuizDetails={setQuizDetails} />} />
            <Route path="/add" element={<AddQuestion quizDetails={quizDetails} />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/result" element={<Result />} />
            
        </Routes>
    </div>
  )
}

export default AllRoutes