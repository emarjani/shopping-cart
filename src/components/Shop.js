import React, {useState, useEffect} from "react";

function Shop(props) {

    const {items, handleSubmit} = props;

    return(
        <div id="shop">
            <h1>Shop</h1>
            {items.map((item) => {
                return (
                <div key={item.id}>
                    <img src={item.img}/>
                    <p>{item.name}</p>
                    <p>Price: ${item.price}</p>

                    <form onSubmit={e => handleSubmit(e, item.id)}>
                        <input type="number" min="0" defaultValue ="0"/>
                        <button type="submit">Add to cart</button>
                    </form>
                </div>
                )}
            )}       
        </div>
    );
}

export default Shop;


// <input type="number" min="0"/>

// {/* find a way to link input value to button */}
// <button onClick={()=>add(item.id, 3)}>Add to cart</button>
// <p>{item.id}</p>