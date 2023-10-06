import React from 'react'
import {Navigate} from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
const Home = () => {
    let {user} = useContext(AuthContext);
    return (
        <div>
            <h1>Home Page</h1>
            {
                user?(
                    <h2>Welcome</h2>
                ):(
                    <Navigate to="/Login"/>
                )
            }
        </div>
    )
}

export default Home
