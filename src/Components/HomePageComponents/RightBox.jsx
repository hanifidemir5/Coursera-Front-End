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
        <div className="rigthbox-sub-container first">
          <p>
            {"<Icon/>"}
          </p>
        </div>
        <div className="rigthbox-sub-container second">
          <p>
            {"<Link/>"}
          </p>
        </div>
      </div>
      <div className='flex-1 flex justify-between'>
        <div className='rigthbox-sub-container third'>
          <p>
            {"<article>"}
          </p>
        </div>
        <div className='rigthbox-sub-container fourth'>
          <p>
            {"<img>"}
          </p>
        </div>
        <div className='rigthbox-sub-container fifth'>
          <p>
            {"<p>"}
          </p>
        </div>
      </div>
      <div className='flex-1 flex justify-between'>
        <div className='rigthbox-sub-container seventh'>
          <p>
            {"<Add>"}
          </p>
        </div>
        <div className='rigthbox-sub-container sixth'>
          <p>
            {"<Subs>"}
          </p>
        </div>
        <div className='rigthbox-sub-container seventh'>
          <p>
            {"<Add>"}
          </p>
        </div>
      </div>
      <div className='flex-1 flex justify-between'>
        <div className='rigthbox-sub-container eigth'>
          <p>
            {"<a>"}
          </p>
        </div>
        <div className='rigthbox-sub-container ninth'>
          <p>
            {"<a>"}
          </p>
        </div>
        <div className='rigthbox-sub-container tenth'>
          <p>
            {"<a>"}
          </p>
        </div>
        <div className='rigthbox-sub-container eleventh'>
          <p>
            {"<a>"}
          </p>
        </div>
      </div>
    </div>
  )
}
