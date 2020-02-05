import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import SignUp from "../SignUp";
//import Home from "../Home";
//import Login from "../Login";

export const routes = {
  signUp: "/signup",
  // Home: "/",
  // Login: "/login",
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.signUp} component={SignUp} />
        {/* <Route exact path={routes.Home} component={Home} />
        <Route exact path={routes.Login} component={Login} /> */}
      </Switch>
    </ConnectedRouter>
  );
  }

  export default Router;