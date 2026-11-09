import {bestSellingTv} from "../constants/inventory.js";

function screenSizes () {
    let screenSizesString = [];
    for (let i = 0; i < bestSellingTv.availableSizes.length; i++) {
        let inch = bestSellingTv.availableSizes[i];
        let cm = Math.round(inch * 2.54);

        screenSizesString.push(`${inch} inch (${cm} cm)`);
    }
    return screenSizesString.join("|");
}

export default screenSizes;