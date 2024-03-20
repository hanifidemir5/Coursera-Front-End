import { useEffect, useState } from "react";
import "../MouseTrackerComponents/mousetrackercss.css"

const MousePosition = ({ render }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMousePositionChange = (e) => {
      // Use e.clientX and e.clientY to access the mouse position on the screen
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMousePositionChange);

    return () => {
      window.removeEventListener("mousemove", handleMousePositionChange);
    };
  }, []);

  // What should be returned here?
  return render({mousePosition});
};

// This component should not receive any props
const PanelMouseLogger = () => {
  // The below if statement can be removed after the render props pattern is implemented
  return (
    <div className="mousetracker-first-child-container">
        <p>Mouse position:</p>
        <MousePosition 
            render={({mousePosition}) => (
                <div className="mouse-position-container">
                    <span className="p-2 m-2">x: {mousePosition.x}</span>
                    <span className="p-2 m-2">y: {mousePosition.y}</span>
                </div>
            )}
        />
    </div>
  );
};

// This component should not receive any props
const PointMouseLogger = () => {
  // The below if statement can be removed after the render props pattern is implemented
  return (
      <MousePosition render={({mousePosition}) => (
        <p className="mini-mouse-position-container">
            ( {mousePosition.x} , {mousePosition.y} )
        </p>
        )}
      />
  )
};

function MouseTracerWithRenderComponent() {
  return (
    <div className="mousetracker-main-container">
        <header className="mouse-tracker-header">Mouse Tracker With Render</header>
        <PanelMouseLogger />
        <PointMouseLogger />
    </div>
  );
}

export default MouseTracerWithRenderComponent;
