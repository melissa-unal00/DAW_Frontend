import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ButtonComp, useToggle } from "../..";
import { TranslationsContext } from "../../../context/TranslationsContext";
import "./Header.scss";
import data from "../../../assets/translations/translations.json";
import ReactCountryFlag from "react-country-flag";

const Header = () => {
  let translationsContextData = useContext(TranslationsContext);

  return (
    <header>
      {translationsContextData.isTextChanged ? (
        <div className="header__background-image header__buttons-flex">
          <NavLink to="/home" className="header__link">
            <ButtonComp type="button" variant="contained">
              {data.ro.home}
            </ButtonComp>
          </NavLink>

          <NavLink to="/products" className="header__link">
            <ButtonComp type="button" variant="contained">
              {data.ro.shop}
            </ButtonComp>
          </NavLink>

          <NavLink to="/cart" className="header__link">
            <ButtonComp type="button" variant="contained">
              {data.ro.cart}
            </ButtonComp>
          </NavLink>
        </div>
      ) : (
        <div className="header__background-image header__buttons-flex">
          <NavLink to="/home" className="header__link">
            <ButtonComp type="button" variant="contained">
              {data.en.home}
            </ButtonComp>
          </NavLink>

          <NavLink to="/products" className="header__link">
            <ButtonComp type="button" variant="contained">
              {data.en.shop}
            </ButtonComp>
          </NavLink>

          <NavLink to="/cart" className="header__link">
            <ButtonComp type="button" variant="contained">
              {data.en.cart}
            </ButtonComp>
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;
