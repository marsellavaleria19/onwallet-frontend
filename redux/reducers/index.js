import { combineReducers } from "redux";
import registration from "./registration";
import forgotPassword from "./forgotPassword";
import auth from "./auth"
import user from "./user";

const rootReducer = combineReducers({
    registration,
    forgotPassword,
    auth,
    user
})

export default rootReducer