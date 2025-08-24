import { useState } from 'react';
import './LoginPopUp.css'
import { assets } from '../../assets/assets';

function LoginPopUp({setShowLogin}){
    
    const [curState,setCurState]=useState("Sign Up")
    
    return(
        <>
        <div className="login-popup">
           <form action="" className='login-popup-container'>
            <div className="login-popup-title">
                <h2>{curState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {curState==='Login'?<></>:<input type="text" placeholder='Your name' required/>}
                <input type="email" placeholder='Your email' required />
                <input type="password" placeholder='Password' required />
            </div>
            <button>{curState==="Sign Up"?"Create account":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By Continuing, I agree to the terms of use and privacy</p>
            </div>
            {curState==="Login"? <p>Create a new account?<span onClick={()=>setCurState("Sign Up")}>Click here</span></p>
            :
            <p>Already have a account?<span onClick={()=>setCurState("Login")}>Login here</span></p>}
           
            
           </form>
        </div>
        </>
    )
}
export default LoginPopUp;