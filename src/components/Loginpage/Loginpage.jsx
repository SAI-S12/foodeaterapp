import React, { useState } from 'react'
import "./Loginpage.css"
import { assets } from '../../assets/food del assets (1)/frontend_assets/assets'

const Loginpage = ({ setShowLogin }) => {
    const [Cstate, setcState] = useState("Sign-In")
    return (
        <div className='back'>
            <form action=" " className="login-pop">
                <div className="log">
                    <h2>{Cstate}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="pop-inp">
                    {Cstate==="Sign-up"?<></>:<input type="text" placeholder='your name' />}<br/>
                    <input type="text" placeholder='your email' /><br />
                    <input type="text" placeholder="password" /><br />
                </div>
                <button>{Cstate === "sign-in" ? "create acccount" : "Login"}</button>
                <div className="con">
                    <input type="checkbox" name="" id="" />
                    <p>by continuig , i agree to the terms of use & privacy policy</p>
                </div>
                {Cstate === "Sign-up" ? <p className='a1'>create an account ? <span className='a2' onClick={()=>setcState("Sign-In")}>Register here</span></p> : <p className='b1'>already have an account ? <span onClick={()=>setcState("Sign-up")} className='b2'>login here</span></p>}
            </form>
        </div>
    )
}

export default Loginpage
