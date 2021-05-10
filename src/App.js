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

  const [items, setItems] = useState(getItems());
  const [shoppingCart, setShoppingCart] = useState([]);

  const [shipping, setShipping] = useState(0);
  const [taxRate, setTaxRate] = useState(0.15);

  const [bill, setBill] = useState({});

  //maybe add shipping and taxes to total? make it more realistic
  //maybe set up cart length? (no of unique shoppping cart items).
  //if this changes, animation to nav bar with number showing amnt in cart

  //set up total before mount
  useEffect(() => {
    calculateBill();
  }, []);

  //after shoppingCart is updated, update cart Total
  useEffect(()=> {
    calculateBill();
  }, [shoppingCart]);


  const getCatalogItem = (id) => {
    return (items.find(i => i.id === id));
  }

  //sets bill
  const calculateBill = () => {
    let subtotal = 0;
    shoppingCart.forEach(item => {
      subtotal += getCatalogItem(item.id).price * item.qty;
    });
    let tax = (subtotal * taxRate);

    //tofixed is not exactlyyyy accurate
    let bill = {
      subtotal: subtotal.toFixed(2),
      shipping: shipping.toFixed(2),
      tax: tax.toFixed(2),
      total: (subtotal + shipping + tax).toFixed(2)
    }
    setBill(bill);
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
      if (qty > 0) {
        setShoppingCart([...shoppingCart, {id: id, qty: qty}]);
      }
    }
  }

  //e.target[0] is grabbing the input tag. (make sure that if input isnt first node, wont break)

  //handle submit for shop page (addto cart)
  const handleSubmit = (e, id) => {
    e.preventDefault();

    let qty = parseInt(e.target[0].value);
    addToCart(id, qty);
    //reset input field back to 0
    e.target[0].value = "0";
  }

  //guarantees integer if number input field is left blank
  const setNumber = (e, id) => {
    if (e.target.value === "") {
      let cartItem = shoppingCart.find(item => item.id === id);
      let index = shoppingCart.indexOf(cartItem);

      let temp = [...shoppingCart];
      temp[index] = {id: id, qty: 1}
      setShoppingCart(temp);
    }
  }

  const handleChange = (e, id) => {

    //if e.target.value === "", do nothing
    //make sure e NAN doesnt reutnr error later

    let qty = parseInt(e.target.value);

    //if qty is 0, need to remove from cart. or set minimum to 1. and have a cancel button
    if (qty === 0) {
      //create a popup asking ARE U sure you want to remove item from cart?

      setShoppingCart(shoppingCart.filter(item => item.id !== id));
    } else {
      let cartItem = shoppingCart.find(item => item.id === id);
      let index = shoppingCart.indexOf(cartItem);

      let temp = [...shoppingCart];
      temp[index] = {id: id, qty: qty}

      setShoppingCart(temp);
    }

    
  };

  //handle change has same function.
  const removeItem = (id) => {
    setShoppingCart(shoppingCart.filter(item => item.id !== id));
  }

  const clearCart = () => {
    setShoppingCart([]);
  }

  //functions to toggle collapsable shop sidebar
  const openCart = () => {
    document.getElementById("shopping-cart").style.width = "35%";
    document.getElementById("shopping-cart").style.padding = "2em";
  }

  const closeCart = () => {
    document.getElementById("shopping-cart").style.width = "0";
    document.getElementById("shopping-cart").style.padding = "0";
  }

  return (
    <Router>
      <div className="App">
        <Nav open={openCart}/>
        <div id="page-content">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/shop"
            render={(props) => (
              <Shop {...props} items={items} handleSubmit={handleSubmit}/>
            )}
            />
          </Switch>

          <ShoppingCart  
          cart={shoppingCart}
          bill={bill}
          
          getItem={getCatalogItem}
          change = {handleChange}
          close={closeCart}
            
          remove= {removeItem}
          clearCart = {clearCart}
          set={setNumber}
          />
        </div>
      </div>

    </Router>
  );
}

export default App;

