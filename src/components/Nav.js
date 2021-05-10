import {Link} from "react-router-dom";
// import cartIcon from "../imgs/icons8-shopping-cart-32.png";
import cartIcon from "../imgs/shopping-cart-48.png";

function Nav(props) {

    const {open} = props;

    return (
        <nav>
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
