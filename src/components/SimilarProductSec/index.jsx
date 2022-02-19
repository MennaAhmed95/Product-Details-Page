import Card from "../Card/index.jsx";
import "./similar.scss";
import { similarProduct } from "./../../services/products.js";
const SimilarProductSec = () => {
  return (
    <section>
      <h2>Similar Products</h2>
      <p className="tex">You may like these products also</p>
      <div className="cards">
        {similarProduct.map((itm) => (
          <Card key={itm} item={itm} />
        ))}
      </div>
      <hr />
    </section>
  );
};

export default SimilarProductSec;
