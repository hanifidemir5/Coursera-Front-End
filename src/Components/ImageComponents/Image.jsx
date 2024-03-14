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
    console.log(day)
    return (
        <div className="flex flex-col">
            <h1 className="text-center text-3xl pb-6">
                Hello {name}
                {day >= 1 && day <= 5 ? <Workday/>: <Weekend/>}
            </h1>
            <img src={"Subscription.png"} className="w-screen h-[450px]" alt="picture of subscription" />
        </div>
    )
}

export default Image;