import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import Home from "../Home";
import Login from "../Login";
import Profile from "../Profile";

export const routes = {
  Home: "/",
  Login: "/login",
  Profile: "/profile",
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.Home} component={Home} />
        <Route exact path={routes.Login} component={Login} />
        <Route exact path={routes.Profile} component={Profile} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
