import "./navbar.scss";

const NavBar = () => {
  // Open links in mobiles
  const handleMobile = () => {
    let navbarMenu = document.querySelector(".navbar-menu");
    if (navbarMenu.style.display === "flex") {
      navbarMenu.style.display = "none";
      return;
    }
    navbarMenu.style.display = "flex";
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-header">
          <button
            className="navbar-toggler"
            data-toggle="open-navbar1"
            onClick={handleMobile}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <a href="#">
            <img src="./images/blacklogo.png" alt="logo" width="140px" />
          </a>
          <span className="navbar-header-text">
            &lt; Valentine’s Day Offers! Buy Two Get One Free Shop Now &gt;
          </span>
        </div>

        <div className="navbar-menu" id="open-navbar1">
          <ul className="navbar-nav">
            <li>
              <img src="./images/phone.png" alt="" width="20px" height="20px" />
              <a href="#">Contact Us</a>
            </li>
            <li>
              <img
                src="./images/carshop.png"
                alt=""
                width="20px"
                height="20px"
              />
              <a href="#">Track Order</a>
            </li>
            <li>
              <img
                src="./images/location.png"
                alt=""
                width="20px"
                height="20px"
              />
              <a href="#">Find a Store</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
