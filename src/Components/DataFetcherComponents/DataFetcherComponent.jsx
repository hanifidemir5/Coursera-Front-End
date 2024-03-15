import { useEffect, useState } from "react"
import "../../assets/css/datafetchercss.css"
const DataFetcher =  ({render,url}) => {
    const [data,setData] = useState([])

    useEffect(() => {
        if(url.includes("desserts")){
            setData([
                {
                    title:"Baklava",
                    image:"baklava.jpg",
                    price: "$0.99"
                },
                {
                    title:"Ice cream",
                    image:"ice-cream.jpg",
                    price: "$1.99"
                },
                {
                    title:"Blueberry Pie",
                    image:"blueberry-pie.jpg",
                    price: "$2.99"
                },
                {
                    title:"brownie",
                    image:"brownie.png",
                    price: "$3.99"
                },
            ]);
        } else if(url.includes("drinks")) {
            setData(["coffe","tea","milkshake"]);
        }
    },[]);
    console.log(data)
    return render(data)
}

const DessertsCount = () => {
    return (
        <DataFetcher 
            url="http://localhost:5173/desserts" 
            render={(data) => 
            <div className="data-fetcher-main-container">
                {data.map((item) => {
                    return (
                        <div className="dessert-container" style={{backgroundImage:`url(${item.image})`}}>
                            <h3 className="dessert-header">{item.title}</h3>
                            <span className="price">{item.price}</span>
                        </div>
                    )})}
            </div>} 
        />
    );
};

const DrinksCount = () => {
    return (
        <DataFetcher 
            url="http://localhost:5173/drinks"
            render={(data) => 
            <div className="flex gap-4 self-center justify-center items-center h-3/6">
                {data.map((item) => {
                    return <h3>{item}</h3>
                })}
            </div>} 
        />
    )
}

export default function DataFetcherComponent() {
    return (
        <div className="w-full h-full">
            <header className="text-center text-3xl">Little Lemon Restaurant</header>
            <DessertsCount/>
            <DrinksCount/>
        </div>
    );
};