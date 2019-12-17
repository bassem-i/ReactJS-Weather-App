import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import WeatherApp from "./WeatherApp";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <WeatherApp />
  </Provider>,
  document.getElementById("root")
);
