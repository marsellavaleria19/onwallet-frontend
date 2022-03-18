import { combineReducers } from "redux";
import registration from "./registration";
import forgotPassword from "./forgotPassword";

const rootReducer = combineReducers({
    registration,
    forgotPassword
})

export default rootReducer