import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
const Login = () => {
 
  let {loginUser} = useContext(AuthContext);
  return (
   
    <form onSubmit={loginUser}>
          <Link to="/Home">Home</Link>
      <input type="text"  name='username' placeholder="Username" />
        <input type="password" name='password' placeholder="Password" />
        <button type="submit">Login</button>
    </form>
  )
}

export default Login
