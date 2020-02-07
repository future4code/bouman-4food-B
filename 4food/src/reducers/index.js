import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import login from "./login";
import user from "./user";
import restaurant from "./restaurant";

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    login,
    restaurant,
    // Outros reducers aqui
    user,
  });
