
import { Route,Link,Routes,BrowserRouter } from 'react-router-dom'
import {Login, Register,Welcome,Home, CreateQuiz} from './pages'

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
<Route path="/register" element={<Register/>}/>
<Route path="/home" element={<Home/>}/>

  <Route path="/login" element={<Login/>}/>
  <Route path="/create-quiz" element={<CreateQuiz/>}/>
</Routes>
</AuthProvider>
</BrowserRouter>


</div>
  )
}
export default App
