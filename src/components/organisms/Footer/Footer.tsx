import React, { useContext } from "react";
//react icons

//react router
import { Link } from "react-router-dom";
//atoms
import { Atag } from "../..";
import { TranslationsContext } from "../../../context/TranslationsContext";
//constants
//import { footerPlaceholderText } from "../../../utils/constants/constants";
//styles
import "./Footer.scss";
import data from "../../../assets/translations/translations.json";

const Footer = () => {
  let translationsContextData = useContext(TranslationsContext);

  return (
    <div className="footer">
      {translationsContextData.isTextChanged ? (
        <div className="footer__items">
          <div className="footer__contact">
            <h2 className="footer__contact--title">{data.ro.contactus}</h2>
            <div className="footer__contact--links">
              <Link to="/about">{data.ro.aboutus}</Link>
              <Link to="/contact">Email</Link>
              <Link to="/contact">{data.ro.phone}</Link>
            </div>
          </div>
          <div className="footer__explore">
            <h2 className="footer__explore--title">{data.ro.explore}</h2>
            <Link to="/reviews">{data.ro.review}</Link>
            <Link to="/blog">Blog</Link>
          </div>
          <div className="footer__social">
            <h2 className="footer__social--title">{data.ro.socials}</h2>
            <div className="footer__social--socials">
              <Atag link={"facebookPage"} icon={"FacebookIcon"} />
              <Atag link={"instagramPage"} icon={"InstagramIcon"} />
              <Atag link={"twitterPage"} icon={"TwitterIcon"} />
            </div>
          </div>
        </div>
      ) : (
        <div className="footer__items">
          <div className="footer__contact">
            <h2 className="footer__contact--title">{data.en.contactus}</h2>
            <div className="footer__contact--links">
              <Link to="/about">{data.en.aboutus}</Link>
              <Link to="/contact">Email</Link>
              <Link to="/contact">Phone</Link>
            </div>
          </div>
          <div className="footer__explore">
            <h2 className="footer__explore--title">{data.en.explore}</h2>
            <Link to="/reviews">{data.en.review}</Link>
            <Link to="/blog">Blog</Link>
          </div>
          <div className="footer__social">
            <h2 className="footer__social--title">{data.en.socials}</h2>
            <div className="footer__social--socials">
              <Atag link={"facebookPage"} icon={"FacebookIcon"} />
              <Atag link={"instagramPage"} icon={"InstagramIcon"} />
              <Atag link={"twitterPage"} icon={"TwitterIcon"} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
