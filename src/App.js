import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css";

import SiderMenu from "./page/SiderMenu";
import ReactDnD from "./page/ReactDnD";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <div
              style={{
                position: "fixed",
                left: "0",
                top: "0",
                width: "260px",
                height: "100%"
              }}
            >
              <SiderMenu />
            </div>
            <div style={{ marginLeft: "270px" }}>
              <Route path="/" component={ReactDnD} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
