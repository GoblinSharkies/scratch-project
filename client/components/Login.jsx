import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Login = ({ username, setUsername }) => {

   
    function updateUsernamefunc (event) {
        setUsername(event.target.value)
        console.log(username)
    }


    return (

    <div id='login' className='App'>
        <div className='title'></div>
          {/* <label>User Name</label>   */}
          <input onChange={updateUsernamefunc} type='text' placeholder='username' required/>
          <input type='password' placeholder='password' required/>
          <Link to="/form" className='button'>Login</Link>
      </div> 

    )

}

export default Login;