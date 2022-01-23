import React from "react";
//react icons

//react router
import { Link } from "react-router-dom";
//atoms
import { Atag } from "../..";
//constants
//import { footerPlaceholderText } from "../../../utils/constants/constants";
//styles
import "./Footer.scss";

const Footer = () => (
  <div className="footer">
    <div className="footer__items">
      <div className="footer__contact">
        <h2 className="footer__contact--title">Contact Us</h2>
        <div className="footer__contact--links">
          <Link to="/about">About us</Link>
          <Link to="/contact">Email</Link>
          <Link to="/contact">Phone</Link>
        </div>
      </div>
      <div className="footer__explore">
        <h2 className="footer__explore--title">Explore</h2>
        <Link to="/reviews">Write a review</Link>
        <Link to="/blog">Blog</Link>
      </div>
      <div className="footer__social">
        <h2 className="footer__social--title">Socials</h2>
        <div className="footer__social--socials">
          <Atag link={"facebookPage"} icon={"FacebookIcon"} />
          <Atag link={"instagramPage"} icon={"InstagramIcon"} />
          <Atag link={"twitterPage"} icon={"TwitterIcon"} />
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
