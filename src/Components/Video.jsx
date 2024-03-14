import React from "react";
import ReactPlayer from "react-player/youtube";

const Video = () => {
  return (
      <MyVideo />
  );
};

const MyVideo = () => {
    const vidUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  return (
    <ReactPlayer
        url={vidUrl} 
        volume={0.01}
        playing={true}
        />
  );
};

export default Video;
