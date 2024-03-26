import React, { useState } from 'react'
import "./rightboxcss.css"
import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef,useEffect } from 'react';

const ElementBox = (props) => {
  const [isHoverActive,setIsHoverActive] = useState(false);
  
  const handleHover = () => {
    setIsHoverActive(true)
  }

  const handleHoverOut = () => {
    setIsHoverActive(false)
  }

  const boxStyle = {
    color:props.color,
    backgroundColor:props.backgroundColor,
    width: isHoverActive ? props.hoverWidth : props.width,
  };

  return(
    <div style={boxStyle} className={`rigthbox-sub-container`} onMouseOver={handleHover} onMouseLeave={handleHoverOut}>
      <p>
        {props.text}
      </p>
    </div>
  )
}

export default function RightBox() {
  const rigthRef = useRef(null);
  const isInSigth = useInView(rigthRef,{once:true});
  const leftBoxControls = useAnimation();

  useEffect(() =>  {
    if(isInSigth){
      leftBoxControls.start("visible");
    }
  },[isInSigth])
 
  return (
    <motion.div 
      className='rigthbox-main-container'
      ref={rigthRef}
      variants={{
        hidden:{opacity:0},
        visible:{opacity:1},
      }}
      initial="hidden"
      animate={leftBoxControls}
      transition={{duration:0.75, delay:0.250}}
      >
      <motion.div 
        className='flex-1 flex justify-between'
        ref={rigthRef}
        variants={{
          hidden:{opacity:0, x:-75},
          visible:{opacity:1, x:0},
        }}
        initial="hidden"
        animate={leftBoxControls}
        transition={{duration:0.75, delay:0.25}}
        >
        <ElementBox hoverWidth="70%" color="#41a492" backgroundColor="black" width="50%"  text="<Icon/>" order="first"/>
        <ElementBox hoverWidth="160%" color="#41a492" backgroundColor="indigo" width="80%" text="<Link/>" order="second"/>
      </motion.div>

      <motion.div 
        className='flex-1 flex justify-between'
        ref={rigthRef}
        variants={{
          hidden:{opacity:0, x:75},
          visible:{opacity:1, x:0},
        }}
        initial="hidden"
        animate={leftBoxControls}
        transition={{duration:0.75, delay:0.25}}
        >
        <ElementBox hoverWidth="80%" color="black" backgroundColor="lemonchiffon" width="50%" text="<img/>" order="third"/>
        <ElementBox hoverWidth="80%" color="black" backgroundColor="lightskyblue" width="50%" text="<article/>" order="fourth"/>
        <ElementBox hoverWidth="70%" color="black" backgroundColor="goldenrod" width="30%" text="<p/>" order="fifth"/>
      </motion.div>

      <motion.div 
        className='flex-1 flex justify-between'
        ref={rigthRef}
        variants={{
          hidden:{opacity:0, x:-75},
          visible:{opacity:1, x:0},
        }}
        initial="hidden"
        animate={leftBoxControls}
        transition={{duration:0.75, delay:0.25}}
        >
        <ElementBox hoverWidth="70%" color="#41a492" backgroundColor="#3c3131" width="40%" order="seventh" text="<Add/>"/>
        <ElementBox hoverWidth="80%" color="#41a492" backgroundColor="chartreuse" width="60%" order="sixth" text="<Subs/>"/>
        <ElementBox hoverWidth="70%" color="#41a492" backgroundColor="#3c3131" width="40%" order="seventh" text="<Add/>"/>
      </motion.div>

      <motion.div 
        className='flex-1 flex justify-between'
        ref={rigthRef}
        variants={{
          hidden:{opacity:0, x:75},
          visible:{opacity:1, x:0},
        }}
        initial="hidden"
        animate={leftBoxControls}
        transition={{duration:0.75, delay:0.25}}
        >
        <ElementBox hoverWidth="50%" color="black" backgroundColor="pink" width="25%" order="eigth" text="<a/>"/>
        <ElementBox hoverWidth="50%" color="black" backgroundColor="darkslategray" width="25%" order="ninth" text="<a/>"/>
        <ElementBox hoverWidth="50%" color="black" backgroundColor="purple" width="25%" order="tenth" text="<a/>"/>
        <ElementBox hoverWidth="50%" color="black" backgroundColor="lightgreen" width="25%" order="eleventh" text="<a/>"/>
      </motion.div>

    </motion.div>
  )
}
