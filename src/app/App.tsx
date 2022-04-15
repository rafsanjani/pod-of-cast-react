import React from "react";
import "./App.css";
import { Navigation } from "../navigation/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Landing } from "../pages/landing/Landing";
import { About } from "../pages/about/About";

export function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}
