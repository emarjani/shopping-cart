import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import cartIcon from "../imgs/icons8-shopping-cart-32.png";

function Nav(props) {

    const {open} = props;

    return (
        <nav>
            <h3>Logo</h3>
            <Link to = "/">
                <p>Home</p>
            </Link>
            <Link to="/shop">
                <p>Shop</p>
            </Link>

            <img id="cart-icon" className="icon" onClick={open} src={cartIcon}/>
        </nav>
    );
}

export default Nav;
