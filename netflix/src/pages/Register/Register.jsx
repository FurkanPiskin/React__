import React, { useState,useRef } from 'react'
import "./Register.scss"

function Register() {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const emailRef=useRef();
    const passwordRef=useRef();

    const handleStart=()=>{
        setEmail(emailRef.current.value);
    }
    const handleFinish=()=>{
        setPassword(passwordRef.current.value);
    }
  return (
    <div className='register'>
    <div className="top">
        <div className="wrapper">
     <img 
     src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" 
     alt="" 
     className='logo'
     />
     <button className="loginButton">Sign in </button>
     </div>
    </div>
   <div className="container">
    <h1>Unlimited videos</h1>
    <h2>Watch anywhere</h2>
    <p>
        Ready to watch?Enter your email to create or restart your membership
    </p>{
        !email &&(
            <div className="input">
            <input type="email" placeholder='Email Adress' ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>Get Started</button>
        </div>
        )  (
            <form className='input'>
            <input type="password" placeholder='password' ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>
                Get Started
            </button>

            </form>

        )}
   
   </div>
  

    </div>
  )
}

export default Register