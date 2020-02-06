import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import login from "./login";
import profile from "./profile";

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    login,
    profile,
    // Outros reducers aqui
  });
