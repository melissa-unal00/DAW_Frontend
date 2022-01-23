import React from "react";
import { NavLink } from "react-router-dom";
import { ButtonComp } from "../..";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <div className="header__background-image header__buttons-flex">
        <NavLink to="/home" className="header__link">
          <ButtonComp type="button" variant="contained">
            Home
          </ButtonComp>
        </NavLink>

        <NavLink to="/products" className="header__link">
          <ButtonComp type="button" variant="contained">
            Shop
          </ButtonComp>
        </NavLink>

        <NavLink to="/cart" className="header__link">
          <ButtonComp type="button" variant="contained">
            Cart
          </ButtonComp>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
