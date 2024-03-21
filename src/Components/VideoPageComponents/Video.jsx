import React from "react";
import ReactPlayer from "react-player/youtube";
import "./videopagecss.css"

const Video = () => {
  return (
      <MyVideo />
  );
};

const MyVideo = () => {
    const vidUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  return (
    <div className="video-container">
      <ReactPlayer
              url={vidUrl} 
              volume={0.5}
              playing={true}
              />
    </div>
  );
};

export default Video;
