import React from 'react'
import "./homepagecss.css"
import RightBox from './RightBox'
import LeftBox from './LeftBox'
import { motion, useInView, useAnimation } from 'framer-motion';


export default function HomePage() {
  return (
    <>
      <div className='photo-container h-screen'>
          <div className='image-text-container'>
            <motion.div
              variants={{
                hidden:{opacity:0, y:75},
                visible:{opacity:1, y:0},
              }}
              initial="hidden"
              animate="visible"
              transition={{duration:0.5, delay:0.25}}
              >
              <p className='image-text'>
                  Welcome travellers. You have come the home page. 
              </p>
            </motion.div>
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
