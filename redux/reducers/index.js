import { combineReducers } from "redux";
import registration from "./registration";
import forgotPassword from "./forgotPassword";
import auth from "./auth"

const rootReducer = combineReducers({
    registration,
    forgotPassword,
    auth
})

export default rootReducer