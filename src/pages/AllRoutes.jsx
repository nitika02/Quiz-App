import React, {useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../components/Header/Header'
import StartPage from './Start/StartPage'
import AddQuestion from './AddQuestions/AddQuestion'
import Quiz from './Quiz/Quiz'
import Result from './Result/Result'
import ShowAllQues from './ShowAllQues/ShowAllQues'


const AllRoutes = () => {
    const [quizDetails, setQuizDetails] = useState({
        name: "",
        desc: "",
        time: 0,
        marks: ""
    })
    const [score, setScore] = useState(0)
  return (
    <div>
        <Header />
        <Routes>
            <Route path="/" element={<StartPage quizDetails={quizDetails} setQuizDetails={setQuizDetails} />} />
            <Route path="/add" element={<AddQuestion quizDetails={quizDetails} />} />
            <Route path="/quiz" element={<Quiz score={score} setScore={setScore} />} />
            <Route path="/result" element={<Result score={score} />} />
            <Route path="/ques" element={<ShowAllQues />} />
        </Routes>
    </div>
  )
}

export default AllRoutes