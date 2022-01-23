import axios from "axios";
import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { ButtonComp, FormField } from "../../index";
import { useCookies } from "react-cookie";
import { useContext } from "react";
import "./Signin.scss";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  //const [cookies, setCookie] = useCookies(["username"]);

  const history = useHistory();

  const routeChange = (e: any) => {
    //e.preventDefault();
    let path = `home`;
    history.push(path);
    window.location.reload();
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const user = { username, password };
    await axios
      .post("https://localhost:44336/api/User/authenticate", user)
      .then((res) => {
        setCookie("token", res.data.token);

        // console.log("Cookies: ", cookies);
        routeChange(e);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="formfield"
        action="https://localhost:44336/api/User/authenticate"
        method="POST"
      >
        <div className="signin__margin">
          <FormField
            variant="standard"
            label="Username"
            type="text"
            value={username}
            onChange={(e: any) => setUsername(e.target.value)}
          />
        </div>
        <div className="signin__margin">
          <FormField
            variant="standard"
            label="Password"
            type="password"
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
          />
        </div>
        <ButtonComp type="submit" variant="contained">
          Submit
        </ButtonComp>
        <h2>Don't have an account? Sign up </h2>{" "}
        <NavLink to="/register">Here</NavLink>
      </form>
    </div>
  );
};

export default Signin;
