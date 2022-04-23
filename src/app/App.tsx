import React, { useEffect } from "react";
import "./App.scss";
import { Navigation } from "../navigation/Navigation";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Landing } from "../components/landing/Landing";
import { About } from "../pages/about/About";
import { PodcastDetail } from "../pages/podcast-detail/PodcastDetail";

export function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
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

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
