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
                  {/* displays what i have learned while i was taking React Basics and React Advanced courses. */}
                  {/* Here you will find multiple routes. All of you are welcome to give it a try with the home button above. When you clicked the button you will be 
                  redirected to route page that you can pick whichever route you want to explore.  */}
              </p>
          </div>
      </div>
      <div className='second-section-container'>
          <div className='about-project-container text-white'>
              <LeftBox/>
              <RightBox/> 
          </div>
      </div>
      {/* <div className='second-section-container'>
        <LeftBox/>
        <RightBox/>
      </div> */}
    </>
  )
}
