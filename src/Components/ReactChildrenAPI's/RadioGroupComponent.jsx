import { useState } from "react";
import {RadioGroup,RadioOption} from "./RadioButtons"


function RadioGroupComponent() {
  const [selected, setSelected] = useState("");
  return (
    <div className="flex items-center">
      <div className="p-4 m-4 h-76 rounded-3xl text-xl bg-violet-800 text-white">
        <h2 className="mb-6">How did you hear about Little Lemon?</h2>
        <RadioGroup onChange={setSelected} selected={selected}>
          <RadioOption value="social_media">Social Media</RadioOption>
          <RadioOption value="friends">Friends</RadioOption>
          <RadioOption value="advertising">Advertising</RadioOption>
          <RadioOption value="other">Other</RadioOption>
        </RadioGroup>
        <div className="flex justify-end">
          <button className="self-end" disabled={!selected}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default RadioGroupComponent;
