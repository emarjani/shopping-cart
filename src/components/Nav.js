import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

function Nav() {
    return (
        <nav>
            <h3>Logo</h3>
            <Link to = "/">
                <p>Home</p>
            </Link>
            <Link to="/shop">
                <p>Shop</p>
            </Link>
            <Link to="/cart">
                <p>Shopping Cart</p>
            </Link>
        </nav>
    );
}

export default Nav;