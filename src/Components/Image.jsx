
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
        <>
            <h1>
                nebere len {name}
                {day >= 1 && day <= 5 ? <Workday/>: <Weekend/>}
            </h1>
            <img src={"Subscription.png"} style={{height:400}} alt="picture of subscription" />
        </>
    )
}

export default Image;