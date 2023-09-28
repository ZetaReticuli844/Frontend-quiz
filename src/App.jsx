
import { Route,Link,Routes,BrowserRouter } from 'react-router-dom'
import {Quiz,CreateQuiz, Dashboard, Login, QuizList, Register, ResultQuiz,Welcome,Home} from './pages'
import PrivateRoute from './utils/PrivateRoute'
import { AuthProvider } from './context'
const App = () => {

  return(
    <BrowserRouter>
<Routes>
<Route path="/" element={<Welcome/>}/>
<AuthProvider>
<Route path="/home" element={<Home/>}/>
  <Route path="/resgister" element={<Register/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/dashboard:userId" element={<Dashboard/>}/>
  <Route path="/create" element={<CreateQuiz/>}/>
  <Route path="/quiz-list" element={<QuizList/>}/>
  <Route path="/quiz/:quizId" element={<Quiz/>}/>
  <Route path="/result/:quizId" element={<ResultQuiz/>}/>
  </AuthProvider>
</Routes>
</BrowserRouter>
  )
}
export default App
