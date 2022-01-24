import React, { useState } from "react";
import "./NavbarComp.scss";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { useCookies } from "react-cookie";
import { TranslationsContext } from "../../../context/TranslationsContext";
import ReactCountryFlag from "react-country-flag";
import data from "../../../assets/translations/translations.json";

const NavbarComp = () => {
  let userContextData = useContext(UserContext);
  let { username } = userContextData;

  let translationsContextData = useContext(TranslationsContext);

  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  const handleLogout = () => {
    removeCookie("token");
    window.location.reload();
  };

  return (
    <div className="navbar__fixed">
      {translationsContextData.isTextChanged ? (
        username ? (
          <div className="navbar">
            <div className="navbar__submenu">
              <div className="navbar__user">
                <FaRegUser className="navbar__user-photo"></FaRegUser>
                <div className="navbar__user-name">{username}</div>
              </div>

              <div className="navbar__submenu-content">
                <div className="navbar__submenu-arrow">
                  <BsFillArrowRightCircleFill />
                </div>
                <NavLink to="/profile" className="navbar__submenu-content-a">
                  {data.ro.profile}
                </NavLink>
                <div className="navbar__submenu-arrow">
                  <BsFillArrowRightCircleFill />
                </div>
                <NavLink
                  to="/home"
                  className="navbar__submenu-content-a"
                  onClick={handleLogout}
                >
                  {data.ro.signout}
                </NavLink>
              </div>
            </div>
            <NavLink to="/blog" className="navbar__blog">
              Blog
            </NavLink>
            <button
              onClick={translationsContextData.setIsTextChanged}
              style={{ paddingLeft: "1rem" }}
              className="header__button-language"
            >
              <ReactCountryFlag
                countryCode="US"
                svg
                style={{
                  width: "3em",
                  height: "3em",
                }}
              />
            </button>
          </div>
        ) : (
          <div className="navbar">
            <NavLink to="/login" className="navbar__blog">
              {data.ro.login}
            </NavLink>
            <NavLink to="/blog" className="navbar__blog">
              Blog
            </NavLink>
            <button
              onClick={translationsContextData.setIsTextChanged}
              style={{ paddingLeft: "1rem" }}
              className="header__button-language"
            >
              <ReactCountryFlag
                countryCode="US"
                svg
                style={{
                  width: "3em",
                  height: "3em",
                }}
              />
            </button>
          </div>
        )
      ) : username ? (
        <div className="navbar">
          <div className="navbar__submenu">
            <div className="navbar__user">
              <FaRegUser className="navbar__user-photo"></FaRegUser>
              <div className="navbar__user-name">{username}</div>
            </div>

            <div className="navbar__submenu-content">
              <div className="navbar__submenu-arrow">
                <BsFillArrowRightCircleFill />
              </div>
              <NavLink to="/profile" className="navbar__submenu-content-a">
                {data.en.profile}
              </NavLink>
              <div className="navbar__submenu-arrow">
                <BsFillArrowRightCircleFill />
              </div>
              <NavLink
                to="/home"
                className="navbar__submenu-content-a"
                onClick={handleLogout}
              >
                {data.en.signout}
              </NavLink>
            </div>
          </div>
          <NavLink to="/blog" className="navbar__blog">
            Blog
          </NavLink>
          <button
            onClick={translationsContextData.setIsTextChanged}
            className="header__button-language"
            style={{ paddingLeft: "1rem" }}
          >
            <ReactCountryFlag
              countryCode="RO"
              svg
              style={{
                width: "3em",
                height: "3em",
              }}
            />
          </button>
        </div>
      ) : (
        <div className="navbar">
          <NavLink to="/login" className="navbar__blog">
            {data.en.login}
          </NavLink>
          <NavLink to="/blog" className="navbar__blog">
            Blog
          </NavLink>
          <button
            onClick={translationsContextData.setIsTextChanged}
            className="header__button-language"
            style={{ paddingLeft: "1rem" }}
          >
            <ReactCountryFlag
              countryCode="RO"
              svg
              style={{
                width: "3em",
                height: "3em",
              }}
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default NavbarComp;
