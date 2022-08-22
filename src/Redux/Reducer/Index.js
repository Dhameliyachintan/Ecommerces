import { combineReducers } from "redux";
import { alertReducer } from "./alert.reducer";
import { authReducer } from "./auth.Reducer";

export const rootReducer = combineReducers({
     auth : authReducer,
     alert : alertReducer,
})