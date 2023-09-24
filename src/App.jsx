import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Link,Routes } from 'react-router-dom'
import Welcome from './components/Welcome'


const App = () => {

  return(
<Routes>
  <Route path="/" element={Welcome}/>
  <Route path="/resgister" element={Register}/>
  <Route path="/login" element={Login}/>
  <Route path="/dashboard:userId" element={Dashboard}/>
  <Route path="/create" element={CreateQuiz}/>
  <Route path="/quiz-list" element={QuizList}/>
  <Route path="/quiz/:quizId" element={Quiz}/>
  <Route path="/result/:quizId" element={ResultQuiz}/>




</Routes>
  )
}
export default App
