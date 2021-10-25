import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.rtl.css";

ReactDOM.render(
  <React.StrictMode>
    <div className="container text-center">
      <Router>
        <Switch>
          <App />
        </Switch>
      </Router>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
