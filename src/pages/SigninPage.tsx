import React from "react";
import { CookiesProvider } from "react-cookie";
import { Signin, Header, NavbarComp, Footer } from "../components/index";

const SigninPage = () => {
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
