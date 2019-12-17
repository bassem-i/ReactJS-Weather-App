import thunkMiddleware from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";
import weatherReducer from "./reducers/weatherReducer";

export default createStore(
  combineReducers({ weatherReducer }),
  applyMiddleware(thunkMiddleware)
);
