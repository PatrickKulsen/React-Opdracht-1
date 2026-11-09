import {inventory} from "../constants/inventory.js";

function purchasedTVs() {
    let purchasedTVAmount = 0;
    for (let i = 0; i < inventory.length; i++) {
        purchasedTVAmount = purchasedTVAmount + inventory[i].originalStock;
    }
    return purchasedTVAmount;
}

export default purchasedTVs;