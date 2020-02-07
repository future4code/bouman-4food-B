import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import login from "./login";
import profile from "./profile";

const initialState = {
  profileInfo: ""
}

export const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    case "GET_PROFILE":
      return {...state, profileInfo: action.payload.profile}
    default:
      return state;
  }
}

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    login,
    profile,
    // Outros reducers aqui
  });
