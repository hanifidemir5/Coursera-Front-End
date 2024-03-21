import React, { useState } from 'react'
import "./rightboxcss.css"


export default function RightBox() {
  const [left,setLeft] = useState(false)
  
  const changeLeft = () => {
    setLeft(!left)
  }
 
  return (
    <div className='rigthbox-main-container'>
      <div className='flex-1 flex justify-between'>
        <div className={ left ? `rigthbox-sub-container` : `rigthbox-sub-container open`}></div>
        <div className={ left ? `rigthbox-sub-container-second-side` : `rigthbox-sub-container-second-side open`}></div>
      </div>
      <div className='flex-1 flex justify-between'>
        <div style={{backgroundColor:"lemonchiffon",width:"35%"}} className='rigthbox-sub-container'></div>
        <div style={{backgroundColor:"lightskyblue",width:"50%"}} className='rigthbox-sub-container-second-side'></div>
        <div style={{backgroundColor:"goldenrod",width:"50%"}} className='rigthbox-sub-container-second-side'></div>
      </div>
      <div className='flex-1 flex justify-between'>
        <div style={{backgroundColor:"chartreuse",width:"50%"}} className='rigthbox-sub-container'></div>
        <div style={{backgroundColor:"red",width:"40%"}} className='rigthbox-sub-container-second-side'></div>
      </div>
      <div className='flex-1 flex justify-between'>
        <div style={{backgroundColor:"pink",width:"80%"}} className='rigthbox-sub-container'></div>
        <div style={{backgroundColor:"darkslategray",width:"70%"}} className='rigthbox-sub-container-second-side'></div>
        <div style={{backgroundColor:"purple",width:"70%"}} className='rigthbox-sub-container-second-side'></div>
        <div style={{backgroundColor:"lightgreen",width:"70%"}} className='rigthbox-sub-container-second-side'></div>
      </div>
    </div>
  )
}
