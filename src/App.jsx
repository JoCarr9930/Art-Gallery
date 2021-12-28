import React from "react";
import "./App.css";
import NavbarComp from "./Components/NavbarComp";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Gallery from "./Pages/Gallery";
import NotFound from "./Pages/NotFound";
import FormSubmit from "./Pages/FormSubmit";
import ScrollToTop from "./Utilities/Functions";

function App() {
  return (
    <Router>
      <NavbarComp />
      <ScrollToTop />
      <Switch>
        <Route path="/Art-Gallery/" exact component={Home} />
        <Route path="/Art-Gallery/about" component={About} />
        <Route path="/Art-Gallery/art" component={Gallery} />
        <Route path="/Art-Gallery/submit" component={FormSubmit} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
