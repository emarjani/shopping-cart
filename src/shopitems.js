import uniqid from "uniqid";

//import imgs here (require ().default doesnt okr for some reaosn)
import longchamp from "./imgs/longchamp.PNG";
import converse1 from "./imgs/converse3.PNG";
import nike1 from "./imgs/nike tanjun white.PNG";
// import mango1 from "./imgs/Mango.PNG";
import amiya1 from "./imgs/amiya slingback heel.PNG";
import milarno1 from "./imgs/milarno.PNG";
import superdry1 from "./imgs/superdry.PNG";
import milliot1 from "./imgs/milliot.PNG";
import hush1 from "./imgs/Hush puppies.PNG";

const createItem = (name, price, img) => {
    const id = uniqid();
    return {name, price, img, id};
}

const getItems = () => {
    let items = [
        // createItem("converse", 10, "./converse3.PNG"),
        createItem("Converse Hightops", 10, converse1),
        createItem("Longchamp Blue Tote", 15, longchamp),
        createItem("Nike Tanjun White", 12, nike1),
        createItem("Amiya Slingback Heel", 10, amiya1),
        createItem("Milarno White", 14, milarno1),
        createItem("Superdry Red", 10, superdry1),
        createItem("Milliot Pear Clutch", 16, milliot1),
        createItem("Hush Puppies Ivory Wristlet", 15, hush1)
    ]    
    return items;
};


export default getItems;


// let items = [
    //     {name: 'Converse Black Hightops', img: require("./imgs/converse3.PNG").default, price: "10"},
    //     {name: 'Longchamp Blue Bag', img: require("./imgs/longchamp.PNG").default, price: "15"},
    //     {name: 'Nike Tanjun White', img: require("./imgs/nike tanjun white.PNG").default, price: "12"}
    // ];