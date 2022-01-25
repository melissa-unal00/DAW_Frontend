import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ButtonComp, useToggle } from "../..";
import { TranslationsContext } from "../../../context/TranslationsContext";
import "./Header.scss";
import data from "../../../assets/translations/translations.json";

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

          <NavLink to="/basket" className="header__link">
            <ButtonComp type="button" variant="contained">
              {data.ro.basket}
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

          <NavLink to="/basket" className="header__link">
            <ButtonComp type="button" variant="contained">
              {data.en.basket}
            </ButtonComp>
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;
