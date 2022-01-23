import React, { useState } from "react";
import "./NavbarComp.scss";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { useCookies } from "react-cookie";

const NavbarComp = () => {
  let userContextData = useContext(UserContext);
  let { username } = userContextData;

  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  const handleLogout = () => {
    removeCookie("token");
    window.location.reload();
  };

  return (
    <div className="navbar__fixed">
      {username ? (
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
                Profile
              </NavLink>
              <div className="navbar__submenu-arrow">
                <BsFillArrowRightCircleFill />
              </div>
              <NavLink
                to="/home"
                className="navbar__submenu-content-a"
                onClick={handleLogout}
              >
                Sign out
              </NavLink>
            </div>
          </div>
          <NavLink to="/blog" className="navbar__blog">
            Blog
          </NavLink>
        </div>
      ) : (
        <div className="navbar">
          <NavLink to="/login" className="navbar__blog">
            Login
          </NavLink>
          <NavLink to="/blog" className="navbar__blog">
            Blog
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default NavbarComp;
