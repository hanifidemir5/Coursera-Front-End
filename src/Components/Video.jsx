import React from "react";
import ReactPlayer from "react-player/youtube";

const Video = () => {
  return (
      <MyVideo />
  );
};

const MyVideo = () => {
    const vidUrl = "https://www.youtube.com/watch?v=uNd5kvrGHjk"
  return (
    <ReactPlayer
        url={vidUrl} 
        volume={0.01}
        playing={true}
        />
  );
};

export default Video;
