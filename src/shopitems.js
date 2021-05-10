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

//add category (bags, shoes), so you can filter items (lukily can only belong to one category at a time)
const createItem = (name, raw_price, category, img) => {
    const id = uniqid();
    const price = raw_price.toFixed(2);
    return {name, price, category, img, id};
}

const getItems = () => {
    let items = [
        createItem("Converse Hightops", 14.50, "shoes", converse1),
        createItem("Longchamp Blue Tote", 35, "bags", longchamp),
        createItem("Nike Tanjun White", 17, "shoes", nike1),
        createItem("Amiya Slingback Heel", 10, "shoes", amiya1),
        createItem("Milarno White", 14.99, "shoes", milarno1),
        createItem("Superdry Red", 15, "bags", superdry1),
        createItem("Milliot Pear Clutch", 26,"bags", milliot1),
        createItem("Hush Puppies Ivory Wristlet", 25, "bags", hush1),
        createItem("Therapy Beach Sandals", 10.70, "shoes", therapy1),
        createItem("Kingship Navy Pouch", 14, "bags", kingship1),
        createItem("Head Over Heels Black Stiletto", 19.50, "shoes", head1)
    ]    
    return items;
};


export default getItems;

