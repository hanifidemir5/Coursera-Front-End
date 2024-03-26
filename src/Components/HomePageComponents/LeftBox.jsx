import React from 'react'
import "./leftboxcss.css"
import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef,useEffect } from 'react';



export default function LeftBox() {
  const leftRef = useRef(null);
  const isInSigth = useInView(leftRef,{once:true});
  const leftBoxControls = useAnimation();

  useEffect(() =>  {
    if(isInSigth){
      leftBoxControls.start("visible");
    }
  },[isInSigth])

  return (
    <motion.div 
      ref={leftRef}
      className='leftbox-main-container'
      variants={{
        hidden:{opacity:0, x:-75},
        visible:{opacity:1, x:0},
      }}
      initial="hidden"
      animate={leftBoxControls}
      transition={{duration:0.75, delay:0.25}}
      >
      <p className='leftbox-pharagraph'>
            This project displays what i have learned while i was taking React Basics and React Advanced courses.    
            Here you will find multiple routes, components and different ways to create react components.
            <br />
            <br />
            All of you are welcome to give it a try with the home button above. 
            When you clicked the button you will be redirected to route page that you can pick whichever route you want to explore. 
      </p>
    </motion.div>
  )
}
