import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./PortfolioContainer/Home/Home";
import Work from "./PortfolioContainer/Work/Work";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/work" element={<Work />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
