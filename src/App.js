import "./App.css";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const APIKey = process.env.REACT_APP_NEWS_API;

  let [progress, setProgress] = useState(0);
  let [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <Router>
        <Navbar onSearch={handleSearch} />
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                APIKey={APIKey}
                key="general"
                pageSize={12}
                country="in"
                category={"general"}
                searchQuery={searchQuery}
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                APIKey={APIKey}
                key="business"
                pageSize={12}
                country="in"
                category={"business"}
                searchQuery={searchQuery}
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                APIKey={APIKey}
                exact
                key="entertainment"
                pageSize={12}
                country="in"
                category={"entertainment"}
                searchQuery={searchQuery}
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                APIKey={APIKey}
                key="health"
                pageSize={12}
                country="in"
                category={"health"}
                searchQuery={searchQuery}
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                APIKey={APIKey}
                key="science"
                pageSize={12}
                country="in"
                category={"science"}
                searchQuery={searchQuery}
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                APIKey={APIKey}
                key="sports"
                pageSize={12}
                country="in"
                category={"sports"}
                searchQuery={searchQuery}
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                APIKey={APIKey}
                key="technology"
                pageSize={12}
                country="in"
                category={"technology"}
                searchQuery={searchQuery}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
