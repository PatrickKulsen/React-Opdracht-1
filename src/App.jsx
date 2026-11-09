import './App.css';
import './helpers/soldTVs.js';
import soldTVs from "./helpers/soldTVs.js";
import purchasedTVs from "./helpers/purchasedTVs.js";
import toBeSoldTVs from "./helpers/toBeSoldTVs.js";
import namingTVs from "./helpers/namingTVs.js";
import priceTVs from "./helpers/priceTVs.js";
import {bestSellingTv} from "./constants/inventory.js";
import screenSizes from "./helpers/screenSizes.js";
import showOutcomeInConsole from "./constants/oefenbestand.js";


function App() {
  showOutcomeInConsole();
    return (
      <>
          <h1>Begin hier met met maken van de applicatie!</h1>
          <p className="soldTellies"> Het aantal verkochte TV's zijn {soldTVs()}.</p>
          <p className="purchasedTellies">Het aantal ingekochte TV's zijn {purchasedTVs()}</p>
          <p className="toBeSoldTellies">De te verkopen TV's zijn {toBeSoldTVs()}</p>
          <span className="bestTV">
            <article>
              <img src="https://image.coolblue.nl/max/500x500/products/1786196"/>
            </article>
            <article>
              <p className="tvName">{namingTVs()}</p>
              <p className="tvPrice">{priceTVs(bestSellingTv.price)}</p>
              <p className="tvSize">{screenSizes()}</p>
            </article>
          </span>
      </>
  )
}

console.log(soldTVs());
console.log(purchasedTVs());
console.log(toBeSoldTVs());
console.log(namingTVs());
console.log(priceTVs(bestSellingTv.price));
console.log(screenSizes());


export default App
