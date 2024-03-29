import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import reportWebVitals from "./reportWebVitals";
import { Home } from "./pages/home/00_index";
import { Press } from "./pages/press/Press";
import { HashRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="press" element={<Press />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
