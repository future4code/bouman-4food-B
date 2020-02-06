import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import Home from "../Home";
import Login from "../Login";
import FeedPage from "../FeedPage"


export const routes = {
  Home: "/",
  Login: "/login",
  Feed: "/feed",
};


function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.Home} component={Home} />
        <Route exact path={routes.Login} component={Login} />
        <Route path={routes.Feed} component={FeedPage} />
      </Switch>
    </ConnectedRouter>
  );
}


export default Router;
