
import { Route,Link,Routes,BrowserRouter } from 'react-router-dom'
import {Quiz,CreateQuiz, Dashboard, Login, QuizList, Register, ResultQuiz,Welcome,} from './pages'

const App = () => {

  return(
    <BrowserRouter>
<Routes>
  <Route path="/" element={<Welcome/>}/>
  <Route path="/resgister" element={<Register/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/dashboard:userId" element={<Dashboard/>}/>
  <Route path="/create" element={<CreateQuiz/>}/>
  <Route path="/quiz-list" element={<QuizList/>}/>
  <Route path="/quiz/:quizId" element={<Quiz/>}/>
  <Route path="/result/:quizId" element={<ResultQuiz/>}/>
</Routes>
</BrowserRouter>
  )
}
export default App
