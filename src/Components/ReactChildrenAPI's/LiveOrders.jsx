import OrderRow from "./OrderRow";

export default function LiveOrders() {
    return (
        <OrderRow spacing={32}>
            <div className="w-full h-full flex flex-wrap gap-4">
                <p>Shawarma</p>
                <p>4</p>
                <p>45$</p>
                <p>14:21</p>
                <p>Joseph  Joester</p>
            </div>
        </OrderRow>
    )
}