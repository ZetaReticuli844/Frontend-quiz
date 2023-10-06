
import { Route,Link,Routes,BrowserRouter } from 'react-router-dom'
import {TakeQuiz,CreateQuiz, Dashboard, Login, QuizList, Register, ResultQuiz,Welcome,Home} from './pages'

import { AuthProvider } from './context'
import { Navbar } from './components'
const App = () => {

  return(
   <div className="min-h-screen bg-gray-100">
  
    <BrowserRouter>
    <AuthProvider>
    <Navbar className="fixed top-0 w-full"/>
<Routes>
<Route path="/" element={<Welcome/>}/>

<Route path="/home" element={<Home/>}/>
  <Route path="/resgister" element={<Register/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/dashboard:userId" element={<Dashboard/>}/>
  <Route path="/create" element={<CreateQuiz/>}/>
  <Route path="/quiz-list" element={<QuizList/>}/>
  <Route path="/quiz/:quizId" element={<TakeQuiz/>}/>
  <Route path="/result/:quizId" element={<ResultQuiz/>}/>
  
</Routes>
</AuthProvider>
</BrowserRouter>


</div>
  )
}
export default App
