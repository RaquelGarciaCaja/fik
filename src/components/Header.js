import React from "react";
import "../stylesheets/Header.scss";
import menu from "../images/icon-burger.svg";
import logo from "../images/icon-logo.svg";
import cart from "../images/icon-cart.svg";

const Header = () => {
  return (
    <header className="header">
      <img className="header__menu" src={menu} alt="pinch para abrir" />
      <img className="header__title" src={logo} alt="logo" />
      <div className="header__containerProducts">
        <input className="header__input" type="text" placeholder="Search" />
        <h5 className="header__login">Login</h5>
        <div className="header__containerShopping">
          <img className="header__shopping" src={cart} alt="productos" />
          <p className="header__items">(3)</p>
        </div>
      </div>
    </header>
  );
};
export default Header;
