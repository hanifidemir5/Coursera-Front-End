import { useState } from "react";
import ReactPlayer from "react-player";
import "./conditionalcss.css"

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

    const nyanCat = "https://www.youtube.com/watch?v=jIQ6UV2onyI"
    const sadCat = "https://www.youtube.com/shorts/Kawm6M82Rv0"
    return (
        <div className="conditional-main-container">
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
                        <div className="video-container">
                            <ReactPlayer
                                url={nyanCat} 
                                volume={0.3}
                                playing={true}
                                style={{height:"15rem"}}
                            />
                            <h1 style={{fontSize:"2rem",padding:"1rem"}}>Yeeey something meaningfull.</h1>
                        </div>
                    )
                :   (
                        <div className="video-container">
                            <ReactPlayer
                                url={sadCat} 
                                volume={0.3}
                                playing={true}
                                style={{height:"15rem"}}
                            />                            
                            <h1 style={{fontSize:"2rem",padding:"1rem"}}>Empty input just as my soul...</h1>
                        </div>
                    )
            )}
            <button style={{marginTop:"-10px"}} onClick={onBegin}>
                {buttonText}
            </button>
        </div>
    )
}

export default ConditionalRendering;