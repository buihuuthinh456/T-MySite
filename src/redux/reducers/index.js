import { combineReducers } from "redux";
import homeReducers from "./home";
import loginReducer from "./login";
import notifyReducer from "./notify";
import projectReducer from "./project";

export default combineReducers({
    home:homeReducers,
    login:loginReducer,
    notify:notifyReducer,
    project:projectReducer,
})