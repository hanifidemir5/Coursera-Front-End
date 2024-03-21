import React from "react";

const OrderRow =  ({children, spacing}) => {
    const childStyle = {
        marginLeft : `${spacing}px`,
    };

    return(
        <div className="children-text">
            {React.Children.map(children, (child,index) => {
                return React.cloneElement(child, {
                    style: {
                        ...child.props.style,
                        ...(index > 0 ? childStyle :{}),
                    }
                })
            })};
        </div>
    )
}

export default OrderRow;