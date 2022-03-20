import { combineReducers } from "redux";
import registration from "./registration";
import forgotPassword from "./forgotPassword";
import auth from "./auth"
import user from "./user";
import transaction from "./transaction";

const rootReducer = combineReducers({
    registration,
    forgotPassword,
    auth,
    user,
    transaction
})

export default rootReducer