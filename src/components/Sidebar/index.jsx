import CartItem from "../CartItem";
import "./sidebar.scss";
const Sidebar = ({ flag, closeNav }) => {
  return (
    <div className={flag ? "sidenav disWidth" : "sidenav"}>
      <a
        className="closebtn"
        href={() => false}
        onClick={() => closeNav(false)}
      >
        &times;
      </a>
      <h3>My Cart</h3>
      <h4>Cart Summary</h4>
      <CartItem />
      <h3 className="tot">Total:9.999 LE</h3>
      <div className="box">
        <button className="cart" style={{ fontSize: "small" }}>
          Review Cart
        </button>
        <button className="cart" style={{ fontSize: "small" }}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
