import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import * as BooksAPI from './BooksAPI'
import SearchBar from "./Components/SearchBar";
import Home from "./Components/Home";
import "./App.css";

const BooksApp = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/Search">
          <SearchBar />
        </Route>
      </Switch>
    </Router>
  );
};

export default BooksApp;
