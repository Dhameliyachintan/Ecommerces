import { combineReducers } from "redux";
import { authReducer } from "./auth.Reducer";

export const rootReducer = combineReducers({
     auth : authReducer
})