import React from "react";
import { useCookies } from "react-cookie";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  SignupPage,
  SigninPage,
  HomePage,
  ProductsPage,
  ProfilePage,
  useToggle,
} from "../src/components/index";
import { UserContext } from "./context/UserContext";
import { TranslationsContext } from "./context/TranslationsContext";

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const [isTextChanged, setIsTextChanged] = useToggle();

  if (typeof cookies.token !== "undefined") {
    const jwt = cookies.token;
    const jwtSplit = jwt.split(".");
    const data = atob(jwtSplit[1]);
    const dataObject = JSON.parse(data);
    var username = dataObject.username;
    var userId = dataObject.id;
    console.log(jwt);
  } else {
    username = "";
    console.log(document.cookie);
  }

  return (
    <div>
      <TranslationsContext.Provider value={{ isTextChanged, setIsTextChanged }}>
        <UserContext.Provider value={{ username: username, userId: userId }}>
          <Router>
            <Switch>
              <Route path="/home" component={HomePage}></Route>
              <Route path="/register" component={SignupPage}></Route>
              <Route path="/login" component={SigninPage}></Route>
              <Route path="/products" component={ProductsPage}></Route>
              <Route
                path="/profile"
                component={username ? ProfilePage : HomePage}
              ></Route>
            </Switch>
          </Router>
        </UserContext.Provider>
      </TranslationsContext.Provider>
    </div>
  );
}

export default App;
