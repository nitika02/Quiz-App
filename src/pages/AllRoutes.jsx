import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import StartPage from './Start/StartPage'
import AddQuestion from './AddQuestions/AddQuestion'
import Quiz from './Quiz/Quiz'
import Result from './Result/Result'

const AllRoutes = () => {
  return (
    <div>
        <Header />
        <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/add" element={<AddQuestion />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/result" element={<Result />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default AllRoutes