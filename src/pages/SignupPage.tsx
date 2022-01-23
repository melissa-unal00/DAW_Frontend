import React from "react";
import { Signup, Header, NavbarComp, Footer } from "../components/index";

const SignupPage = () => {
  return (
    <div>
      <NavbarComp />
      <Header />
      <Signup />
      <Footer />
    </div>
  );
};

export default SignupPage;
