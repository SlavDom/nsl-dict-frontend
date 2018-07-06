import {createStore} from "redux";
import rootReducer from './reducer';

export function configureStore() {
  return createStore(rootReducer);
}