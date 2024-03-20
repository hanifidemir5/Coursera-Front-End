import { useEffect, useState } from "react";
import "./mousetrackercss.css"

const withMousePosition = (WrappedComponent) => {
    return ( props) =>{
        const [mousePosition, setMousePosition] = useState({
            x:0,
            y:0,
        })
        useEffect(() => {
            const handleMousePositionChange = (e) =>{
                setMousePosition({
                    x: e.clientX,
                    y: e.clientY,
                });
            };

            window.addEventListener("mousemove",handleMousePositionChange);
            
            return () =>{
                window.removeEventListener("mousemove",handleMousePositionChange)
            };

        },[]);
        return <WrappedComponent {...props} mousePosition={mousePosition}/>
    };
};

const PanelMouseLogger = ({mousePosition}) =>{
    if(!mousePosition){
        return null;
    }
    return(
        <div className="mousetracker-first-child-container">
            <p>Mouse position:</p>
            <div className="mouse-position-container">
                <span className="p-2 m-2">x: {mousePosition.x}</span>
                <span className="p-2 m-2">y: {mousePosition.y}</span>
            </div>
        </div>
    );
};

const PointMouseLogger = ({mousePosition}) =>{
    if(!mousePosition){
        return null
    }
    return(
        <p className="mini-mouse-position-container">
            ( {mousePosition.x} , {mousePosition.y} )
        </p>
    );
};

const PanelMouseTracker = withMousePosition(PanelMouseLogger)
const PointMouseTracker = withMousePosition(PointMouseLogger)

export default function MouseTracker(){
    return(
        <div className="mousetracker-main-container">
            <header className="mouse-tracker-header">Mouse Tracker</header>
            <PanelMouseTracker/> 
            <PointMouseTracker/> 
        </div>
    );
};