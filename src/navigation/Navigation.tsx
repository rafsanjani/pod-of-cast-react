import React from "react";
import logo from "../images/logo.svg";
import "./Navigation.scss";
import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <nav>
      <div className="left">
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <ul>
          <li>
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
      </div>
      <div className="buttons">
        <button className="button outline-button recent-episodes">
          Recent Episodes
        </button>
        <button className="button filled-button">Subscribe</button>
      </div>
    </nav>
  );
}
