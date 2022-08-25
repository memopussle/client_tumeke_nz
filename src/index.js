import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { apiSlice } from "./features/api/apiSlice";
import App from "./App";
import ScrollToTop from "./ScrollToTop";

ReactDOM.render(
  <ApiProvider api={apiSlice}>
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  </ApiProvider>,
  document.getElementById("root")
);
