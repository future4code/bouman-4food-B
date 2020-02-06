import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import Home from "../Home";
import Login from "../Login";
import FeedPage from "../FeedPage"
import SignUp from "../SignUp";
import Address from "../Address";

export const routes = {
  Home: "/",
  Login: "/login",
  Feed: "/feed",
  signUp: "/signup",
  adress: "/address,"
};


function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.Home} component={Home} />
        <Route exact path={routes.Login} component={Login} />
        <Route exact path={routes.Feed} component={FeedPage} />
        <Route exact path={routes.signUp} component={SignUp} />
        <Route exact path={routes.address} component={Address} />
      </Switch>
    </ConnectedRouter>
  );
  }


export default Router;
