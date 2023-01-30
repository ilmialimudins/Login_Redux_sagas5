import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import UsrReducer from "./UsrReducer";

const rootReducer = combineReducers({
    usrStated: UsrReducer,
    userStated: UserReducer,
})

export default rootReducer