import React, { useEffect } from "react";
import { CookiesProvider, useCookies } from "react-cookie";
import { Signin, Header, NavbarComp, Footer } from "../components/index";

const SigninPage = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  useEffect(() => {
    removeCookie("token");
  }, []);
  return (
    <div>
      <Header />
      <NavbarComp />
      <CookiesProvider>
        <Signin />
      </CookiesProvider>
      <Footer />
    </div>
  );
};

export default SigninPage;
