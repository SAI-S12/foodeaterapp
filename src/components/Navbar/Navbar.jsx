import React, { useState } from 'react'
import { assets } from '../../assets/food del assets (1)/frontend_assets/assets';
import { Link } from 'react-router-dom';
import { MdMenu, MdMenuBook } from 'react-icons/md';
import { BiCross, BiMenu } from 'react-icons/bi';
import { TbMedicalCross } from 'react-icons/tb';
import { CgCross } from 'react-icons/cg';
import { RxCross1 } from "react-icons/rx";
  


const Navbar = ({setShowLogin}) => {
   const[menu,setMenu]=useState("home")
   const[vis,setVis]=useState(false)
  return (
    <div className='nav-bar'>
           <Link to="/"><h1>fence<span>house</span></h1></Link>  
        <div className={vis?"nav-middle1":"nav-middle"}  onClick={()=>(setVis(false))}>
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
           <div className="menu-1"> {vis?<RxCross1 className='menu' onClick={()=>(setVis(false))}/>:<MdMenu className='menu' onClick={()=>(setVis(true))}/>}</div>
        </div>
    </div>
  )
}

export default Navbar;