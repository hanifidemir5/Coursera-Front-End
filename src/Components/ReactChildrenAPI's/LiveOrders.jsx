import OrderRow from "./OrderRow";

export default function LiveOrders() {
    return (
        <div>
            <OrderRow spacing={32}>
                <p>Shawarma</p>
                <p>4</p>
                <p>45$</p>
                <p>14:21</p>
                <p>Joseph  Joester</p>
            </OrderRow>
        </div>
    )
}