import React from "react";
import logo from "../images/logo.svg";
import "./Navigation.css";
import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <header>
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <nav>
        <ul>
          <li>
            {/*<a href="#recent-episodes">Episodes</a>*/}
            <Link
              to={{
                pathname: "/",
                hash: "#recent-episodes",
              }}
            >
              Episodes
            </Link>
          </li>
          <li>
            <Link to="about">About</Link>
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
