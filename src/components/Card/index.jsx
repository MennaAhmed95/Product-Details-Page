import "./card.scss";
import Rate from "./../../Rate/index";

const Card = ({ item }) => {
  return (
    <div className="card">
      <div className="card-head">
        <div className="cont-lo">
          <img src="./images/360.svg" alt="logo" className="card-lo" />
        </div>
        <img src={item.srcImg} alt="logo" className="card-logo" />
      </div>
      <div className="card-body">
        <strong>{item.desc}</strong>
        <div className="priceLogo">
          <div className="dis">
            {item.offerPrice ? (
              <div className="offer">{item.offerPrice} LE</div>
            ) : (
              ""
            )}
            <div className={item.offerPrice ? "price" : "offer"}>
              {item.price} LE
            </div>
            {item.offerPrice ? (
              <div className="off">
                {(100 - (item.offerPrice / item.price) * 100).toFixed(2)}% off
              </div>
            ) : (
              ""
            )}
          </div>
          <div>
            <img src="./images/adidaslogo.svg" alt="logo" />
          </div>
        </div>
        <Rate />
        <p>{item.from}</p>
      </div>
    </div>
  );
};

export default Card;
