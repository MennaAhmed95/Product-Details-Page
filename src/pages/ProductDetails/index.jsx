import React from "react";

import { DetailsThumb } from "./../../components/DetailsThumb/index";
import Rate from "../../components/Rate/index";
import SizeItem from "./../../components/SizeItem/index";
import Color from "./../../components/Color/index";
import Quantity from "./../../components/Quantity";
import SimilarProductSec from "../../components/SimilarProductSec";
import Header from "./../../components/Header/index";
import Breadcrambs from "./../../components/Breadcrambs/index";
import Footer from "./../../components/Footer/index";
import Sidebar from "../../components/Sidebar";

class ProductDetails extends React.Component {
  state = {
    products: [
      {
        _id: "1",
        title: "Men",
        src: [
          "./images/dummyImgs/a.png",
          "./images/dummyImgs/b.png",
          "./images/dummyImgs/c.png",
          "./images/dummyImgs/d.png",
        ],
        description:
          //  "UI/UX designing, html css tutorials",
          // content:
          "Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        price: 10000,
        offerPrice: 9000,
        colors: ["./images/dummyImgs/black.png", "./images/dummyImgs/red.png"],
        count: 1,
        cat: "Men",
      },
    ],
    index: 0,
    flag: false,
  };

  Size = ["small", "Medium", "Large", "X Large", "XX Large"];
  myRef = React.createRef();

  handleTab = (index) => {
    this.setState({ index: index });
    const images = this.myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };
  openNav = (flag) => {
    debugger;
    this.setState({ flag: flag });
  };

  closeNav = (flag) => {
    this.setState({ flag: flag });
  };
  componentDidMount() {
    const { index } = this.state;
    this.myRef.current.children[index].className = "active";
  }

  render() {
    const { products, index, flag } = this.state;
    return (
      <>
        <Sidebar flag={flag} closeNav={this.closeNav} />
        <Header openNav={this.openNav} />
        <Breadcrambs />
        <div className="container">
          {products.map((item) => (
            <div className="details" key={item._id}>
              <div className="big-img">
                <img src={item.src[index]} alt="" />
                <DetailsThumb
                  images={item.src}
                  tab={this.handleTab}
                  myRef={this.myRef}
                />
              </div>

              <div className="box">
                <div className="row">
                  <img src="./images/adidaslogo.svg" alt="logo" />
                </div>
                <p>{item.description}</p>
                <p className="col">{item.cat}</p>
                <Rate flag={true} />
                <div className="flexRow">
                  <div className="offer">{item.offerPrice} LE</div>
                  <div className="price">{item.price} LE</div>
                  <div className="off">
                    {100 - (item.offerPrice / item.price) * 100}% off
                  </div>
                </div>
                <hr />
                <span>Size</span>
                <p className="flexRow" style={{ maxWidth: "450px" }}>
                  {this.Size.map((itm, i) => (
                    <SizeItem size={itm} key={itm} />
                  ))}
                </p>
                <hr />
                <span>Color</span>
                <p style={{ display: "flex" }}>
                  {item.colors.map((itm, i) => (
                    <Color src={itm} key={itm} />
                  ))}
                </p>
                <hr />
                <div>
                  <span>Quantity</span>
                  <Quantity />
                </div>
                <button className="cart">Add To Cart</button>
                <button className="cart">Pick Form Store</button>
              </div>
            </div>
          ))}
          <SimilarProductSec />
        </div>
        <Footer />
      </>
    );
  }
}

export default ProductDetails;
