import {useState,useRef, useEffect} from "react"; 
import "./calculatorcss.css"

function Calculator() { 
const inputRef = useRef(null); 
const resultRef = useRef(null); 
const [result, setResult] = useState(0); 

function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
    inputRef.current.focus()

}; 

function minus(e) { 
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value)); 
    inputRef.current.focus()
};

function times(e) { 
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value)); 
    inputRef.current.focus()
}; 

function divide(e) { 

    console.log(inputRef.current.value)

    if(inputRef.current.value === ""){
        alert("Divisor can not be null please enter a value.")
        inputRef.current.value = null
        focus(inputRef)
    }
    else if(Number(inputRef.current.value == 0)){
        alert("Divisor can not be zero please enter another nubmer.")
        inputRef.current.value = null
        focus(inputRef)
    }
    else{
        setResult((result) => result / Number(inputRef.current.value)); 
    }
    e.preventDefault();
    inputRef.current.focus()
};

function resetInput(e) { 
    e.preventDefault();
    inputRef.current.value = null
    inputRef.current.focus()
}; 

function resetResult(e) { 
    e.preventDefault();
    setResult(0) 
    inputRef.current.focus()
}; 

return ( 
    <div className="calculator"> 
        <div> 
            <h1>Simplest Working Calculator</h1> 
        </div> 
        <form className="calculator-form"> 
            <p ref={resultRef}> 
            {result} 
            </p> 
            <input
            pattern="[0-9]" 
            ref={inputRef} 
            type="number" 
            placeholder="Type a number"
            /> 
            <div>
            <button className="calculator-button" onClick={plus}>add</button> 
            <button className="calculator-button" onClick={minus}>minus</button> 
            <button className="calculator-button" onClick={times}>times</button> 
            <button className="calculator-button" onClick={divide}>divide</button> 
            <button className="calculator-button" onClick={resetInput}>resetInput</button> 
            <button className="calculator-button" onClick={resetResult}>resetResult</button> 
            </div>
        </form> 
    </div> 
    ); 
  } 
  
  export default Calculator;