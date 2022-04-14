import React from "react";
import logo from "../images/logo.svg";
import "./Navigation.css";

export function Navigation() {
  return (
    <header>
      <img className="logo" src={logo} alt="logo" />
      <nav>
        <ul>
          <li>
            <a href="#recent-episodes">Episodes</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">More</a>
          </li>
        </ul>
      </nav>
      <div className="top-buttons">
        <a href="#">
          <div className="outline-button">Recent Episodes</div>
        </a>
        <button className="button subscribe-button">Subscribe</button>
      </div>
    </header>
  );
}
