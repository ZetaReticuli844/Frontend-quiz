import React,{useContext,} from 'react'
import {Link} from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Navbar = () => {
    let {user} = useContext(AuthContext);
    let {logoutUser} = useContext(AuthContext);
    
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<div className="container-fluid">
  <h1>Quiz</h1>
  </div>
  </nav>

  )
}

export default Navbar
