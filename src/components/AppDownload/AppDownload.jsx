import React from 'react'
import "./AppDownload.css"
import { assets } from '../../assets/food del assets (1)/frontend_assets/assets'


const AppDownload = () => {
  return (
    <div className='appdownload' id="app12">
        <p>for better experience  download <br/> <h1>fence<span>house</span> </h1></p>
      <div className="apps">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  )
}

export default AppDownload
