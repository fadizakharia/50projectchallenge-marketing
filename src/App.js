import "./App.css";

import React, { Component, Fragment } from "react";
import Index from "./pages";
import { Switch, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Header from "./components/header";
import Footer from "./components/footer";
export default class App extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Fragment>
    );
  }
}
