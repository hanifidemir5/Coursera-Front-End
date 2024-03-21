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
        <div className="rigthbox-sub-container first"></div>
        <div className="rigthbox-sub-container second"></div>
      </div>
      <div className='flex-1 flex justify-between'>
        <div className='rigthbox-sub-container third'></div>
        <div className='rigthbox-sub-container fourth'></div>
        <div className='rigthbox-sub-container fifth'></div>
      </div>
      <div className='flex-1 flex justify-between'>
        <div className='rigthbox-sub-container sixth'></div>
        <div className='rigthbox-sub-container seventh'></div>
      </div>
      <div className='flex-1 flex justify-between'>
        <div className='rigthbox-sub-container eigth'></div>
        <div className='rigthbox-sub-container ninth'></div>
        <div className='rigthbox-sub-container tenth'></div>
        <div className='rigthbox-sub-container eleventh'></div>
      </div>
    </div>
  )
}
