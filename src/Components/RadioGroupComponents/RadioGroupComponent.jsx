import { useState } from "react";
import {RadioGroup,RadioOption} from "../ReactChildrenAPI's/RadioButtons"
import "./radiogroupcss.css"

function RadioGroupComponent() {
  const [selected, setSelected] = useState("");
  return (
    <div className="radio-group-main-container">
      <div className="radio-group-sub-container">
        <h2 className="mb-6">How did you hear about Little Lemon?</h2>
        <RadioGroup onChange={setSelected} selected={selected}>
          <RadioOption value="social_media">Social Media</RadioOption>
          <RadioOption value="friends">Friends</RadioOption>
          <RadioOption value="advertising">Advertising</RadioOption>
          <RadioOption value="other">Other</RadioOption>
        </RadioGroup>
        <div className="radio-button-container">
          <button disabled={!selected}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default RadioGroupComponent;
