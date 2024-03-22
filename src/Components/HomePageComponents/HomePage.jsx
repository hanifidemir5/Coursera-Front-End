import React from 'react'
import "./homepagecss.css"
import RightBox from './RightBox'
import LeftBox from './LeftBox'
export default function HomePage() {
  return (
    <>
      <div className='photo-container h-screen'>
          <div className='image-text-container'>
              <p className='image-text'>
                  Welcome travellers. You have come the home page. 
              </p>
          </div>
      </div>
      <div className='second-section-container'>
          <div className='about-project-container text-white'>
              <LeftBox/>
              <RightBox/> 
          </div>
      </div>
    </>
  )
}
