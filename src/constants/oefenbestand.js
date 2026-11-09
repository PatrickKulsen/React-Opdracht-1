import {inventory} from "../constants/inventory.js";

// Deel 2: opdracht 1a, 1b, 1c, 1d, 1e, 1f.
function showOutcomeInConsole () {
    const tvNames = inventory.map(tvType => {
        return tvType.type;
    })

    const soldOutTvs = inventory.filter (tvSoldOut => {
        return tvSoldOut.sold===tvSoldOut.originalStock;
    })

    const specificTvs = inventory.find (specificTv => {
        return specificTv.type==="NH3216SMART";
    })

    const sportTvsId = inventory.map (suitabelTv => {
        return {name: suitabelTv.brand + suitabelTv.name, suitable: suitabelTv.refreshRate};
    })

    const sportTvs = sportTvsId.map (sportTv => {
        return {name: sportTv.name, suitable: sportTv.suitable===100};
    })

    const bigTvs = inventory.filter (bigTv => {
        return bigTv.availableSizes.some(size => size >=65);
    })

    const ambilightTvs = inventory.filter (ambiTv => {
        return ambiTv.options.some(option => option.name === "ambiLight" && option.applicable === true);
    })

    console.log(tvNames);
    console.log(soldOutTvs);
    console.log(specificTvs);
    //console.log(sportTvsId);
    console.log(sportTvs);
    console.log(bigTvs);
    console.log(ambilightTvs);
   }

export default showOutcomeInConsole;