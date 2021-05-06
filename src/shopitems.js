//use uniqid to give each item a unique id??? instead of relying on name to identify.
import uniqid from "uniqid";
import React from "react";

const createItem = (name, price, img_path) => {
    // console.log(img_path);
    // console.log(require.apply(img_path).default);

    let new_item = {
        name: name,
        // img: require(img_path).default,
        price: price,
        //id shud never change, while site is up.
        id: uniqid()
    }


    return new_item;
};


function getItems() {
    //get item images, return path to file, name and price? (in an object), in array
    //manually return for now
    let items = [
        createItem('Converse Black Hightops', "10", "./imgs/converse3.PNG"),
        createItem('Longchammp Blue bag', '15', "./imgs/longchamp.PNG"),
        createItem('Nike Tanjun White', '11', './imgs/nike tanjun white.PNG')
    ]    
    return items;
};


export default getItems;


// let items = [
    //     {name: 'Converse Black Hightops', img: require("./imgs/converse3.PNG").default, price: "10"},
    //     {name: 'Longchamp Blue Bag', img: require("./imgs/longchamp.PNG").default, price: "15"},
    //     {name: 'Nike Tanjun White', img: require("./imgs/nike tanjun white.PNG").default, price: "12"}
    // ];