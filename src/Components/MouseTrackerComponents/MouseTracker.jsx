import { useEffect, useState } from "react";

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
        <div className="flex flex-col  text-2xl space-x-2 space-y-4 border-[0.25rem] border-black p-4">
            <p>Mouse position:</p>
            <div className="flex flex-row justify-between align-middle text-center">
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
        <p className="text-center text-2xl p-4">
            ( {mousePosition.x} , {mousePosition.y} )
        </p>
    );
};

const PanelMouseTracker = withMousePosition(PanelMouseLogger)
const PointMouseTracker = withMousePosition(PointMouseLogger)

export default function MouseTracker(){
    return(
        <div className="w-2/6">
            <header className="text-3xl mb-8 text-center">Little Lemon Restaurant</header>
            <PanelMouseTracker/> 
            <PointMouseTracker/> 
        </div>
    );
};