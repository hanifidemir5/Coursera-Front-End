import { useState } from "react";

function ConditionalRendering() {
    const [value,setValue] = useState(null);
    const [clikced, setClikced] = useState(false)
    const [buttonText, updateButtonText] = useState("Begin")

    const onBegin = () =>{
        const val = prompt('Print something and hit ok or quit with esc or cliking cancel button.')
        updateButtonText("Continue")
        setValue(val)
        setClikced(true)
    }

    return (
        <div className="flex flex-col items-center">
            <h1 style={{fontSize:"3rem"}}>Conditional Rendering Page</h1>
            {
                !clikced && (
                    <>
                        <p className="pb-2">When you click "Begin" a pop-up will be displayed. </p>
                        <p className="pb-2">You can either type an input or quit with "Esc" key or with clicking cancel button.</p>
                        <p className="pb-2">The output changes based on the interactivity with the pop-up.</p>
                    </>
                )
            }
            {clikced && (
                value 
                ?   (
                        <div className="flex flex-col items-center">
                            <img src="happycat.png" alt="happycat" style={{height:"15rem"}} />
                            <h1 style={{fontSize:"2rem",padding:"1rem"}}>Yeeey something meaningfull.</h1>
                        </div>
                    )
                :   (
                        <div>
                            <img src="sadcatcover.jpg" alt="sadcat" style={{height:"15rem"}} />
                            <h1 style={{fontSize:"2rem",padding:"1rem"}}>Empty input just as my soul...</h1>
                        </div>
                    )
            )}
            <button onClick={onBegin}>
                {buttonText}
            </button>
        </div>
    )
}

export default ConditionalRendering;