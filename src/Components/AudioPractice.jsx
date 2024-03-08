import React, { useState } from "react";

const bird1 = new Audio(
  "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3"
);

const bird2 = new Audio(
  "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3"
);

function AudioPractice() {

  function toggle1() {
    console.log(bird1.paused)
    if (bird1.paused && bird2.played) {
      bird2.pause();
      bird1.play();
    } else {
      bird1.pause();
    }
  };

  function toggle2() {
    console.log(bird1.paused)
    if (bird2.paused && bird1.played) {
      bird1.pause();
      bird2.play();
    } else {
      bird2.pause();
    }
  };

  return (
    <div>
      <button className="p-2 m-4 bg-black text-white rounded-md" onClick={toggle1}>First audio of Caspian Tern Bird</button>
      <button className="p-2 m-4 bg-black text-white rounded-md" onClick={toggle2}>Second audio of Caspian Tern Bird</button>
    </div>
  );
}

export default AudioPractice;
