import React from "react";
import { useCookies } from "react-cookie";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SignupPage, SigninPage, HomePage } from "../src/components/index";
import { UserContext } from "./context/UserContext";

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  if (typeof cookies.token !== "undefined") {
    const jwt = cookies.token;
    const jwtSplit = jwt.split(".");
    const data = atob(jwtSplit[1]);
    const dataObject = JSON.parse(data);
    var username = dataObject.username;
    console.log(jwt);
  } else {
    username = "";
    console.log(document.cookie);
  }

  return (
    <div>
      <UserContext.Provider value={{ username: username }}>
        <Router>
          <Switch>
            <Route path="/home" component={HomePage}></Route>
            <Route path="/register" component={SignupPage}></Route>
            <Route path="/login" component={SigninPage}></Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
