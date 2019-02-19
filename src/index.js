import React from "react";
import ReactDOM from "react-dom";
import MyForm from "../src/components/myForm";
import App from "./App";
import { Provider } from "react-redux";
import "semantic-ui-css/semantic.min.css";
import store from "./store";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
