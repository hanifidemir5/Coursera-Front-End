import { useEffect, useState } from "react"

const DataFetcher =  ({render,url}) => {
    const [data,setData] = useState([])

    useEffect(() => {
        if(url.includes("desserts")){
            setData(["cake","ice cream","pie","brownie"]);
        } else if(url.includes("drinks")) {
            setData(["coffe","tea","milkshake"]);
        }
    },[]);

    return render(data)
}

const DessertsCount = () => {
    return (
        <DataFetcher 
            url="http://localhost:5173/desserts" 
            render={(data)  => <p>{data.length}</p> }
        />
    );
};

const DrinksCount = () => {
    return (
        <DataFetcher 
            url="http://localhost:5173/drinks"
            render={(data) => <h3>{data.length}</h3>} 
        />
    )
}

export default function DataFetcherComponent() {
    return (
        <div>
            <header>Little Lemon Restaurant</header>
            <DessertsCount/>
            <DrinksCount/>
        </div>
    );
};