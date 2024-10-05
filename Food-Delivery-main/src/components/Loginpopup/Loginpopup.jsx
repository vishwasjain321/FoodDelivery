import React, { useState } from 'react'
import './Loginpopup.css'
import { assets } from '../../assets/assets'
const Loginpopup = ({setShowLogin}) => {

  const [currentState,setCurrentState] = useState("Login")

  return (
    <div className='login-popup'>
        <form className="login-pop-container">
            <div className="login-popup-title">
                <h2>{currentState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currentState==="Login"?<></>:<input type="text" placeholder='Your Name'  required/>}
                
                <input type="email" placeholder='Your e-mail'  required/>
                <input type="password" placeholder='Password'  required/>
            </div>
            <button>{currentState==="Sign Up"?"Create Account":"Login"}</button>
            <div className="login-pop-condition">
                <input type="checkbox" required/>
                <p>By Continuing,I Agree to the terms of use & Privacy Policy.</p>
            </div>
            {currentState==="Login"
            ? <p>Create a new Account? <span onClick={()=>setCurrentState("Sign Up")}> Click here</span></p>
            :   <p>Already have Account?<span onClick={()=>setCurrentState("Login")}> Login here</span></p> 
        }
           
         
        </form>
    </div>
  )
}

export default Loginpopup
