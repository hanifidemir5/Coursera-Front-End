import "./imagecss.css"

function Workday (){
    return (
        <div>
            <h1>Its workday</h1>
        </div>
    )
}


function Weekend (){
    return (
        <div>
            <h1>Its weekend</h1>
        </div>
    )
}


function Image() {
    const day = new Date().getDay();
     
    let name; 
    if (Math.random() > 0.5) { 
        name = "Mike" 
    } else { 
        name = "Susan" 
        console.log(name)
    } 
    return (
        <div className="main-image-container">
                <h1 className="image-header">
                    Hello {name}
                    {day >= 1 && day <= 5 ? <Workday/>: <Weekend/>}
                </h1>
                <img src={"GigaDonk.png"} className="image" alt="picture of subscription" />
                <p style={{textAlign:"center",fontStyle:"italic"}}>
                    (GigaDonk for context)
                </p>
        </div>
    )
}

export default Image;