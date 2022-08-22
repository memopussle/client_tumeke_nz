import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { apiSlice } from "./features/api/apiSlice";
import App from "./App";

ReactDOM.render(
  <ApiProvider api={apiSlice}>
    <Router>
      <App />
    </Router>
  </ApiProvider>,
  document.getElementById("root")
);
