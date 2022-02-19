import NavBar from "./../Navbar/index";
import Menu from "./../Menu/index";
import React, { Component } from "react";
import "./header.scss";
class Header extends Component {
  state = {};
  render() {
    return (
      <>
        <NavBar />
        <section className="container sec">
          <div className="sec-searchBar">
            <a href={() => false}>
              <img className="sec-searchBar-icon" src="./images/search.svg" />
            </a>
            <input
              type="text"
              className="sec-searchBar-text"
              placeholder="Search"
            />
          </div>
          <img className="sec-img" src="./images/adidaslogo.svg" alt="" />
          <ul className="sec-menu">
            <li onClick={() => this.props.openNav(true)}>
              <img
                src="./images/basket.svg"
                alt=""
                width="20px"
                height="20px"
              />
              <span className="badge">1</span>
              <a href={() => false}>Card</a>
            </li>
            <li>
              <img src="./images/heart.svg" alt="" width="20px" height="20px" />
              <a href={() => false}>wishlist</a>
            </li>
            <li>
              <img
                src="./images/person.svg"
                alt=""
                width="20px"
                height="20px"
              />
              <a href={() => false}>Login</a>
            </li>
          </ul>
        </section>
        <Menu />
      </>
    );
  }
}

export default Header;
