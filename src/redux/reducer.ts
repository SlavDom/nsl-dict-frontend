import {combineReducers} from "redux";
import {userReducer} from "./user";
import {reducer as formReducer} from "redux-form";

const rootReducer = combineReducers({
  form: formReducer,
  user: userReducer
});

export default rootReducer;
