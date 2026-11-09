import soldTVs from "./soldTVs.js";
import purchasedTVs from "./purchasedTVs.js";

function toBeSoldTVs() {
    return purchasedTVs()-soldTVs();
}

export default toBeSoldTVs;