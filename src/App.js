import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ImportPage from "./pages/ImportPage";

class App extends Component {

  render() {
    return (
      <div className="container">
        <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/import">
            <ImportPage />
          </Route>
        </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
