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

  const routeChange = (e: { preventDefault: () => void }) => {
    //e.preventDefault();
    let path = `home`;
    history.push(path);
    window.location.reload();
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
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
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="signin__margin">
            <FormField
              variant="standard"
              label={data.ro.password}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br />
          <ButtonComp type="submit" variant="contained">
            {data.ro.submit}
          </ButtonComp>
          <br />
          <h2>
            {data.ro.donthaveanaccount}{" "}
            <NavLink to="/register">{data.ro.here}</NavLink>
          </h2>
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
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="signin__margin">
            <FormField
              variant="standard"
              label={data.en.password}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br />
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
