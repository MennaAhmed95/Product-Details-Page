import "./menu.scss";
const Menu = () => {
  const cat = [
    "Men",
    "Women",
    "Unisex",
    "Kids",
    "Best Seller",
    "New Arrivals",
    "Offers",
  ];
  return (
    <menu className="menu">
      <ul className="container menu-ul">
        {cat.map((itm, i) => (
          <li key={i}>
            <a href="#" className={itm === "Offers" ? "col" : ""}>
              {itm}
            </a>
          </li>
        ))}
      </ul>
    </menu>
  );
};

export default Menu;
