import {bestSellingTv} from "../constants/inventory.js";

function namingTVs() {
return bestSellingTv.brand+' '+bestSellingTv.type+' - '+bestSellingTv.name;
}

export default namingTVs;