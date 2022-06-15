import React from "react";
import "./App.css";
import Tasks from "./components/Tasks";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Redirect } from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="nav">
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Tasks />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Redirect from="*" to="/" />
      </Switch>
    </div>
  );
};

export default App;
