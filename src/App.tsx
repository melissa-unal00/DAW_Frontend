import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage, SignupPage } from "../src/components/index";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home" component={HomePage}></Route>
          <Route path="/register" component={SignupPage}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
