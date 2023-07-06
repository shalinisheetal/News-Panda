import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      searchQuery: "",
    };
  }

  handleSearch = (query) => {
    this.setState({ searchQuery: query });
  };
  render() {
    return (
      <div>
        <Router>
          <Navbar onSearch={this.handleSearch} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  key="general"
                  pageSize={12}
                  country="in"
                  category={"general"}
                  searchQuery={this.state.searchQuery}
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  key="business"
                  pageSize={12}
                  country="in"
                  category={"business"}
                  searchQuery={this.state.searchQuery}
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News
                  exact
                  key="entertainment"
                  pageSize={12}
                  country="in"
                  category={"entertainment"}
                  searchQuery={this.state.searchQuery}
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  key="health"
                  pageSize={12}
                  country="in"
                  category={"health"}
                  searchQuery={this.state.searchQuery}
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  key="science"
                  pageSize={12}
                  country="in"
                  category={"science"}
                  searchQuery={this.state.searchQuery}
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  key="sports"
                  pageSize={12}
                  country="in"
                  category={"sports"}
                  searchQuery={this.state.searchQuery}
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  key="technology"
                  pageSize={12}
                  country="in"
                  category={"technology"}
                  searchQuery={this.state.searchQuery}
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
