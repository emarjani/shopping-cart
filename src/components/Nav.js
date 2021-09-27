import {Link} from "react-router-dom";
import cartIcon from "../imgs/shopping-cart-48.png";

function Nav(props) {

    const {open, cartIsEmpty} = props;

    



    return (
        <nav>
            <Link to = "/">
                <p>Home</p>
            </Link>
            <Link to="/shop">
                <p>Shop</p>
            </Link>

            <div id="cart-nav">
                {!cartIsEmpty && 
                <div className="circle-icon"></div>
                }
                <img id="cart-icon" className="icon" onClick={open} src={cartIcon}/>   
            </div>
        </nav>
    );
}

export default Nav;
