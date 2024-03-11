import { useState } from "react";
import {RadioGroup,RadioOption} from "./RadioButtons"


function RadioGroupComponent() {
  const [selected, setSelected] = useState("");
  return (
    <div className="bg-violet-800 text-white space-x-4 space-y-4 flex flex-col justify-between p-4 m-4 rounded-3xl text-center">
      <h2>How did you hear about Little Lemon?</h2>
      <RadioGroup onChange={setSelected} selected={selected}>
        <RadioOption value="social_media">Social Media</RadioOption>
        <RadioOption value="friends">Friends</RadioOption>
        <RadioOption value="advertising">Advertising</RadioOption>
        <RadioOption value="other">Other</RadioOption>
      </RadioGroup>
      <button disabled={!selected}>Submit</button>
    </div>
  );
}

export default RadioGroupComponent;
