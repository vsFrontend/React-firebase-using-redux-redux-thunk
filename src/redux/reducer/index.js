import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { resetUserReducer } from "./authReducer";

export const reducers = combineReducers({
  authenticate: authReducer,
});
