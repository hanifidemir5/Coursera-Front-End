import React from "react";
import ReactPlayer from "react-player/youtube";

const Video = () => {
  return (
    <div>
      <MyVideo />
    </div>
  );
};

const MyVideo = () => {
    const vidUrl = "https://www.youtube.com/watch?v=TNhKAJwlj04&list=RDTNhKAJwlj04&start_radio=1&rv=TNhKAJwlj04&t=3"
  return (
    <ReactPlayer
        url={vidUrl} 
        volume={0.01}
        playing={true}
        />
  );
};

export default Video;
