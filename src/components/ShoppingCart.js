//import icons
import cancelIcon from "../imgs/icons8-cancel-50.png"

import React, {useState, useEffect} from "react";

function ShoppingCart(props) {

    const {cart, getItem, total, close, change, clearCart, set} = props;

    return (
        <div id="shopping-cart">
            <div id="cart-buttons">
                <img id="close-icon" className="icon" onClick={close} src={cancelIcon}/>
                <button onClick={clearCart}>Clear cart</button>
            </div>
            
            {cart.map((item) => {
                let catalogItem = getItem(item.id);

                return (
                    <div className="checkout-item" key={item.id}>
                        <img src={catalogItem.img}/>

                        <div className="item-info">
                            <p>{catalogItem.name}</p>

                            <div>
                                <input
                                onChange={e => change(e, item.id)}
                                onBlur={e => set(e, item.id)}
                                type="number"
                                min="1"
                                value={item.qty}
                                />

                                <p>${catalogItem.price}</p>
                            </div>
                        </div>
                    </div>
                    );

            })}

            <p id="total">Total: ${total}</p>
            <button id="checkout">Checkout</button>
        </div>
    );
};

export default ShoppingCart;