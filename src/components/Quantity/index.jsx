import "./quantity.scss";
import React from "react";
class Quantity extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: 1 };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment = () => {
    this.setState((previousState) => ({
      value: ++previousState.value,
    }));
  };

  decrement = () => {
    this.setState((previousState) => ({
      value: previousState.value > 0 ? --previousState.value : 0,
    }));
  };
  render() {
    return (
      <div className="quantity-input">
        <button
          className="quantity-input__modifier quantity-input__modifier--left"
          onClick={this.decrement}
        >
          <img src="./images/minus.svg" alt="" />
        </button>
        <input
          className="quantity-input__screen"
          type="text"
          value={this.state.value}
          readOnly
        />
        <button
          className="quantity-input__modifier quantity-input__modifier--right"
          onClick={this.increment}
        >
          <img src="./images/plus.svg" alt="" />
        </button>
      </div>
    );
  }
}
export default Quantity;
