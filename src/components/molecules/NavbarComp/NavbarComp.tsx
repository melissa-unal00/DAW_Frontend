import React, { useState } from "react";
import "./NavbarComp.scss";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const NavbarComp = () => {
  return (
    <div className="navbar__fixed">
      <div className="navbar">
        <div className="navbar__submenu">
          <div className="navbar__user">
            <FaRegUser className="navbar__user-photo"></FaRegUser>
            <div className="navbar__user-name">Melissa</div>
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
            <NavLink to="/home" className="navbar__submenu-content-a">
              Sign out
            </NavLink>
          </div>
        </div>
        <NavLink to="/blog" className="navbar__blog">
          Blog
        </NavLink>

        {/* user logged out */}
        {/* <div className="navbar">
          <NavLink to="/login" className="navbar__blog">
            Login
          </NavLink>
          <NavLink to="/blog" className="navbar__blog">
            Blog
          </NavLink>
        </div> */}
      </div>
    </div>
  );
};

export default NavbarComp;
