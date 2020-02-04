import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import FeedPage from "../FeedPage"

const routes = {};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.root} component={() => <FeedPage/>} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
