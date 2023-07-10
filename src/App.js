import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      searchQuery: "",
    };
  }
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  handleSearch = (query) => {
    this.setState({ searchQuery: query });
  };
  render() {
    return (
      <div>
        <Router>
          <Navbar onSearch={this.handleSearch} />
          <LoadingBar
            height={3}
            color="#f11946"
            progress={this.state.progress}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
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
                  setProgress={this.setProgress}
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
                  setProgress={this.setProgress}
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
                  setProgress={this.setProgress}
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
                  setProgress={this.setProgress}
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
                  setProgress={this.setProgress}
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
                  setProgress={this.setProgress}
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
