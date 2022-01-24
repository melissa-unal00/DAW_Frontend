import axios from "axios";
import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { ButtonComp, FormField } from "../../index";
import { useCookies } from "react-cookie";
import { useContext } from "react";
import "./Signin.scss";
import { TranslationsContext } from "../../../context/TranslationsContext";
import data from "../../../assets/translations/translations.json";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  //const [cookies, setCookie] = useCookies(["username"]);
  let translationsContextData = useContext(TranslationsContext);

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
    <div className="signin__form--styling">
      {translationsContextData.isTextChanged ? (
        <form
          onSubmit={handleSubmit}
          className="formfield"
          action="https://localhost:44336/api/User/authenticate"
          method="POST"
        >
          <div className="signin__margin">
            <FormField
              variant="standard"
              label={data.ro.username}
              type="text"
              value={username}
              onChange={(e: any) => setUsername(e.target.value)}
            />
          </div>
          <div className="signin__margin">
            <FormField
              variant="standard"
              label={data.ro.password}
              type="password"
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
            />
          </div>
          <ButtonComp type="submit" variant="contained">
            {data.ro.submit}
          </ButtonComp>
          <h2>{data.ro.donthaveanaccount}</h2>{" "}
          <NavLink to="/register">{data.ro.here}</NavLink>
        </form>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="formfield"
          action="https://localhost:44336/api/User/authenticate"
          method="POST"
        >
          <div className="signin__margin">
            <FormField
              variant="standard"
              label={data.en.username}
              type="text"
              value={username}
              onChange={(e: any) => setUsername(e.target.value)}
            />
          </div>
          <div className="signin__margin">
            <FormField
              variant="standard"
              label={data.en.password}
              type="password"
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
            />
          </div>
          <ButtonComp type="submit" variant="contained">
            {data.en.submit}
          </ButtonComp>
          <br />
          <h3>
            {data.en.donthaveanaccount}{" "}
            <NavLink to="/register">{data.en.here}</NavLink>
          </h3>{" "}
        </form>
      )}
    </div>
  );
};

export default Signin;
