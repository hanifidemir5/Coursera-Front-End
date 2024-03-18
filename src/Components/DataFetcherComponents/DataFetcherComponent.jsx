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
                    title:"Brownie",
                    image:"brownie.png",
                    price: "$3.99"
                },
            ]);
        } else if(url.includes("drinks")) {
            setData([
                {
                    title:"Coffee",
                    image:"coffee.jpg",
                    price: "$0.99"
                },
                {
                    title:"Çay",
                    image:"çay.jpg",
                    price: "$1.99"
                },
                {
                    title:"Milkshake",
                    image:"milkshake.png",
                    price: "$2.99"
                },
                {
                    title:"Coca Cola",
                    image:"coca-cola.jpg",
                    price: "$3.99"
                },
            ]);
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
            <div className="data-fetcher-category-container">
                {data.map((item) => {
                    return (
                        <div className="dessert-container" style={{backgroundImage:`url(${item.image})`}}>
                            <h3 className="dessert-header">{item.title}</h3>
                            <p className="price">{item.price}</p>
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
            <div className="data-fetcher-category-container">
                {data.map((item) => {
                     return (
                        <div className="dessert-container" style={{backgroundImage:`url(${item.image})`}}>
                            <h3 className="dessert-header">{item.title}</h3>
                            <p className="price">{item.price}</p>
                        </div>
                    )})}
            </div>} 
        />
    )
}

export default function DataFetcherComponent() {
    return (
        <div className="data-fetcher-main-container">
            <header className="restaurant-header">Little Lemon Restaurant</header>
            <header className="category-header">Desserts</header>
            <DessertsCount/>
            <header className="category-header">Drinks</header>
            <DrinksCount/>
        </div>
    );
};