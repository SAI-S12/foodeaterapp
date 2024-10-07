import React, { useState } from 'react'
import { assets } from '../../assets/food del assets (1)/frontend_assets/assets';
import { Link } from 'react-router-dom';
  


const Navbar = ({setShowLogin}) => {
   const[menu,setMenu]=useState("home")
   
  return (
    <div className='nav-bar'>
           <Link to="/"><h1>foodeater</h1></Link>  
        <div className="nav-middle">
            <ul>
              <a href="#header"onClick={()=>setMenu("home")} className={menu==="home"?"ac":" "}>home</a>
                <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"ac":" "}>menu</a>
                <a href='#app12'  onClick={()=>setMenu("mobil-app")} className={menu==="mobil-app"?"ac":" "}>mobil app</a>
                <a href='#foot'   onClick={()=>setMenu("contact us")}className={menu==="contact us"?"ac":" "}>contact us</a>
            </ul>
        </div>
        <div className="nav-right">
              <Link to='./Cart'> <img src={assets.basket_icon} alt="" className="basket" /></Link>
            <button className="btn" onClick={()=>setShowLogin(true)}>Sign-up</button>
        </div>
    </div>
  )
}

export default Navbar;