import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import Home from "../Home";
import Login from "../Login";
import RestaurantPage from "../RestaurantPage"
import FeedPage from "../FeedPage"
import SignUp from "../SignUp";
import Address from "../Address";
import Cart from "../Cart"

export const routes = {
  Home: "/",
  Login: "/login",
  restaurantPage: "/restaurant-page",
  Feed: "/feed",
  SignUp: "/signup",
  Adress: "/address",
  Cart: "/cart"
};


function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.Home} component={Home} />
        <Route exact path={routes.Login} component={Login} />
        <Route exact path={routes.restaurantPage} component={RestaurantPage} />
        <Route exact path={routes.Feed} component={FeedPage} />
        <Route exact path={routes.SignUp} component={SignUp} />
        <Route exact path={routes.Adress} component={Address} />
        <Route exact path={routes.Cart} component={Cart} />
      </Switch>
    </ConnectedRouter>
  );
  }


export default Router;
