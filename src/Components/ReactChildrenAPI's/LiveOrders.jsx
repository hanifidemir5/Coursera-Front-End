import OrderRow from "./OrderRow";
import "./childrencss.css"

export default function LiveOrders() {
    return (
        <OrderRow spacing={32}>
            <div className="live-orders-container">
                <p>Shawarma</p>
                <p>4</p>
                <p>45$</p>
                <p>14:21</p>
                <p>Joseph  Joester</p>
            </div>
        </OrderRow>
    )
}