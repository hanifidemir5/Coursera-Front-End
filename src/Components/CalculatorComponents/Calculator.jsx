import {useState,useRef} from "react"; 
import "../../styles/calculator.module.css"

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
    if(Number(inputRef.current.value == 0)){
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
    inputRef.current.value = 0
    inputRef.current.focus()
}; 

function resetResult(e) { 
    e.preventDefault();
    setResult(0) 
    inputRef.current.focus()
}; 

return ( 
    <div className="calculator flex flex-col justify-center text-center items-center"> 
    <div> 
        <h1 className="text-[2rem]">Simplest Working Calculator</h1> 
    </div> 
    <form className="space-x-2"> 
        <p ref={resultRef} className="text-[2rem]"> 
        {result} 
        </p> 
        <input className="items-center"
        pattern="[0-9]" 
        ref={inputRef} 
        type="number" 
        placeholder="Type a number" 
        /> 
        <button onClick={plus}>add</button> 
        <button onClick={minus}>minus</button> 
        <button onClick={times}>times</button> 
        <button onClick={divide}>divide</button> 
        <button onClick={resetInput}>resetInput</button> 
        <button onClick={resetResult}>resetResult</button> 
        </form> 
    </div> 
    ); 
  } 
  
  export default Calculator;