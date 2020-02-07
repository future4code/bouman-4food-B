import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import Home from "../Home";
import Login from "../Login";
import RestaurantPage from "../RestaurantPage"

export const routes = {
  Home: "/",
  Login: "/login",
  restaurantPage: "/restaurant-page"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.Home} component={Home} />
        <Route exact path={routes.Login} component={Login} />
        <Route exact path={routes.restaurantPage} component={RestaurantPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
