const CartItem = () => {
  return (
    <div class="sidebar">
      <div class="imag">
        <img src="./images/dummyImgs/b.png" width="100px" />
      </div>
      <div class="product-details">
        <p className="txt">
          Lorem ipsum dolor sit amet, <br /> consecte adipiscing elit.
        </p>
        <p>Qantity : 1</p>
        <div class="buttons">
          <p className="offer">9.999 LE</p>
          <button class="remove">Remove</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
