import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./PortfolioContainer/Home/Home";
import Work from "./PortfolioContainer/Work/Work";
import Navbar from "./PortfolioContainer/NavBar/NavBar";
import AboutMe from "./PortfolioContainer/AboutMe/AboutMe";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/work" element={<Work />}></Route>
        <Route path="/aboutme" element={<AboutMe />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
