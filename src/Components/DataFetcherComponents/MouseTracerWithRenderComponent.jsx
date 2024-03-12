import { useEffect, useState } from "react";

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
    <div className="flex flex-col text-2xl h-3/6 w-4/6 justify-between space-y-4 border-[0.25rem] border-black p-4">
        <p>Mouse position:</p>
        <MousePosition 
            render={({mousePosition}) => (
                <div className="flex flex-row justify-between align-middle text-center">
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
        <p className="text-center text-2xl p-4">
            ( {mousePosition.x} , {mousePosition.y} )
        </p>
        )}
      />
  )
};

function MouseTracerWithRenderComponent() {
  return (
    <div className="w-2/6 h-5/6 flex flex-col justify-center items-center">
        <header className="text-3xl mb-8 text-center">Little Lemon Restaurant</header>
        <PanelMouseLogger />
        <PointMouseLogger />
    </div>
  );
}

export default MouseTracerWithRenderComponent;
