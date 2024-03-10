import { useState, useEffect, useRef } from "react";
import useConsoleLog from "./useConsoleLog";

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
    <>
      <div className="w-1/2 flex flex-col items-center "> 
        <h1>Count: {count}</h1> 
        <button onClick={increment} className="mt-8 ">Plus 1</button> 
      </div> 
      <div className="px-4 w-1/2 flex flex-col items-center text-center ">
        <h1 className="text-2xl">
          Today is: {day}<br />
          {
            prevDay && (
              <span className="text-2xl">Previous work day was: {prevDay}</span>
            )
          }
        </h1>
        <button onClick={getNextDay} className={ `${!prevDay ? "mt-8" : "mt-0"}`}>
          Get next day
        </button>
      </div>
    </>
  ); 
} 
 
export default CustomHooks; 
