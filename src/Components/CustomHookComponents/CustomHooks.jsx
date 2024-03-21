import { useState, useEffect, useRef } from "react";
import useConsoleLog from "./useConsoleLog";
import "./customhookcss.css"


function usePrevious(val) {
  const ref = useRef()
  useEffect(() => {ref.current = val},[val]);
  return ref.current;
}

function CustomHooks() { 
  const [count, setCount] = useState(0); 
  const [day, setDay] = useState("Monday");
  const prevDay = usePrevious(day);
  useConsoleLog(count);

  function increment() { 
    setCount(prevCount => prevCount + 1) 
  } 

  const getNextDay = () => {
    if (day === "Monday") {
      setDay("Tuesday")
    } else if (day === "Tuesday") {
      setDay("Wednesday")
    } else if (day === "Wednesday") {
      setDay("Thursday")
    } else if (day === "Thursday") {
      setDay("Friday")
    } else if (day === "Friday") {
      setDay("Monday")
    }
  }

 
  return ( 
    <div className="custom-hook-main-container">
        <h1 className="custom-hook-header">Count: {count}</h1> 
        <button onClick={increment} className="my-8 ">Plus 1</button> 
        <h1 className="custom-hook-header">
          Today is: {day}<br />
          {
            prevDay && (
              <span>Previous work day was: {prevDay}</span>
            )
          }
        </h1>
        <button onClick={getNextDay} className={ `${!prevDay ? "mt-12" : "mt-4"}`}>
          Get next day
        </button>
    </div>
  ); 
} 
 
export default CustomHooks; 
