import React from "react";
import ReactDOM from "react-dom";
import { StateProvider } from "./contexts/StateProvider";
import reducer, { initialState } from "./contexts/reducer";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App initialState={initialState} />
  </StateProvider>,
  document.getElementById("root")
);
