import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";

import store from "./store";

import "./index.scss";

const AppTemplate = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(AppTemplate, document.getElementById("root"));
