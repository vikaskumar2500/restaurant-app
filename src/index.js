import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import MyContextProvider from "./store/MyContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MyContextProvider>
    <App />
  </MyContextProvider>
);
