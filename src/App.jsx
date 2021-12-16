import React from "react";
import "./App.css";
import NavbarComp from "./Components/NavbarComp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Gallery from "./Pages/Gallery";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <Router>
      <NavbarComp />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" exact component={About}/>
        <Route path="/art" exact component={Gallery}/>
        <Route component={NotFound}/>
      </Switch>
    </Router>
  );
}

export default App;
