import uniqid from "uniqid";

//import imgs
import longchamp from "./imgs/longchamp.PNG";
import converse1 from "./imgs/converse3.PNG";
import nike1 from "./imgs/nike tanjun white.PNG";
import amiya1 from "./imgs/amiya slingback heel.PNG";
import milarno1 from "./imgs/milarno.PNG";
import superdry1 from "./imgs/superdry.PNG";
import milliot1 from "./imgs/milliot.PNG";
import hush1 from "./imgs/Hush puppies.PNG";
import kingship1 from "./imgs/kingship.PNG";
import head1 from "./imgs/head over heels1.PNG"
import therapy1 from "./imgs/therapy.PNG";

const createItem = (name, raw_price, img) => {
    const id = uniqid();
    const price = raw_price.toFixed(2);
    return {name, price, img, id};
}

const getItems = () => {
    let items = [
        createItem("Converse Hightops", 14.50, converse1),
        createItem("Longchamp Blue Tote", 35, longchamp),
        createItem("Nike Tanjun White", 17, nike1),
        createItem("Amiya Slingback Heel", 10, amiya1),
        createItem("Milarno White", 14.99, milarno1),
        createItem("Superdry Red", 15, superdry1),
        createItem("Milliot Pear Clutch", 26, milliot1),
        createItem("Hush Puppies Ivory Wristlet", 25, hush1),
        createItem("Therapy Beach Sandals", 10.70, therapy1),
        createItem("Kingship Navy Pouch", 14, kingship1),
        createItem("Head Over Heels Black Stiletto", 19.50, head1)
    ]    
    return items;
};


export default getItems;

