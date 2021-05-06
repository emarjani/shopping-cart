import './App.css';
import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
//all routing will be done thru App

import getItems from "./shopitems.js"
import Shop from "./components/Shop";
import Home from "./components/Home";
import Nav from "./components/Nav";
import ShoppingCart from './components/ShoppingCart';

function App() {

  //array of shopping objects?

  //item has name, price, maybe category later?
  //items acts as the catelog. it will house all the prices and such. 
  const [items, setItems] = useState(getItems());
  const [shoppingCart, setShoppingCart] = useState([]);
  const [total, setTotal] = useState(0);


  //after shoppingCart is updated, update cart Total
  useEffect(()=> {
    calculateTotal();
  }, [shoppingCart]);


  const getCatalogItem = (id) => {
    return (items.find(i => i.id === id));
  }

  const calculateTotal = () => {
    let total = 0;
    shoppingCart.forEach(item => {
      total += getCatalogItem(item.id).price * item.qty;
    });
    setTotal(total);
  };


  const addToCart = (id, qty) => {
    let cartItem = shoppingCart.find((item) => item.id === id);

    if (cartItem) {
      let newQty = cartItem.qty + qty;
      let index = shoppingCart.indexOf(cartItem);

      let updatedCart = [...shoppingCart];
      updatedCart[index] = {id: id, qty: newQty};
      setShoppingCart(updatedCart);

    } else {
      setShoppingCart([...shoppingCart, {id: id, qty: qty}]);
    }
  };


  const updateCart = (id, qty) => {
    let cartItem = shoppingCart.find(item => item.id === id);

    if (cartItem) {
      if (qty === 0) {
        setShoppingCart(shoppingCart.filter(item => item.id !== id));
      } else {
        let index = shoppingCart.indexOf(cartItem);
        let updated_cart = [...shoppingCart];
        updated_cart[index] = {id: id, qty: qty};

        setShoppingCart(updated_cart);
      }
    }
  };

  //e.target[0] is grabbing the input tag. (make sure that if input isnt first node, wont break)

  //handle submit for shop page (addto cart)
  const handleSubmit = (e, id) => {
    e.preventDefault();
    let qty = parseInt(e.target[0].value);
    addToCart(id, qty);
    //reset input field back to 0
    e.target[0].value = "0";
  }

  const handleUpdate = (e, id) => {
    e.preventDefault();
    let qty = parseInt(e.target[0].value);

    updateCart(id, qty);
  };

  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/shop"
          render={(props) => (
            <Shop {...props} items={items} handleSubmit={handleSubmit}/>
          )}
          />
          <Route exact path="/cart"
          render={(props) => (
            <ShoppingCart
            {...props}
            handleUpdate = {handleUpdate}
            cart={shoppingCart}
            getItem={getCatalogItem}
            total = {total}
            />
          )}
          />
        </Switch>
      </div>

    </Router>
  );
}

export default App;
