function ConditionalRendering() {
     const val = prompt('Anything but a 0')

     return (
         <div>
             <h1>Please don't type in a zero {typeof(val)}</h1>
             {val &&
                 <h2>Yay, no 0 was typed in!</h2>
             }
         </div>
     )
}

export default ConditionalRendering;