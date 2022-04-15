import React from "react";
import "./App.css";
import { Navigation } from "../navigation/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Landing } from "../pages/landing/Landing";
import { About } from "../pages/about/About";
import { PodcastDetail } from "../pages/podcast-detail/PodcastDetail";

export function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="about" element={<About />} />
          <Route path="podcast/episode/:episode" element={<PodcastDetail />} />
        </Routes>
      </Router>
    </div>
  );
}
