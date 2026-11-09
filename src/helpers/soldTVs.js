import {inventory} from "../constants/inventory.js";

function soldTVs() {
    let soldTVAmount = 0;
    for (let i = 0; i < inventory.length; i++) {
        soldTVAmount = soldTVAmount + inventory[i].sold;
    }
    return soldTVAmount;
}

export default soldTVs;