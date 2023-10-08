import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import api from '../api'
const Quiz = () => {
let {quizId} = useParams();
let [quiz,setQuiz] = React.useState(null);

 

  return (
    <div>
      <h1>Quiz</h1>
    </div>
  )


}






const TakeQuiz = () => {

  return (
    <div>
     <Quiz/>
    </div>
  )
}

export default TakeQuiz
