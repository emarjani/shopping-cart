import React, {useState, useEffect} from "react";

function ShoppingCart(props) {

    const {cart, getItem, handleUpdate, total} = props;

    return (
        <div id="shopping-cart">
            {cart.map((item) => {

                let catalogItem = getItem(item.id);
                let totalPrice = catalogItem.price * item.qty;

                return (
                    <div className="checkout-item" key={item.id}>
                        <p>Name: {catalogItem.name}</p>
                        <p>Quantity: {item.qty}</p>
                        <form onSubmit={e => handleUpdate(e, item.id)}>
                            <input type="number" min="0" defaultValue={item.qty}/>
                            <button type="submit">Update Cart</button>
                        </form>
                        <p>Total Price: ${totalPrice}</p>
                    </div>
                    );

            })}

            <p>Total: ${total}</p>
            <button>Checkout</button>
        </div>
    );
};


export default ShoppingCart;