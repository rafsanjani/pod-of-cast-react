import React from "react";
import logo from "../images/logo.svg";
import "./Navigation.scss";
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
          <button className="button outline-button recent-episodes">
            Recent Episodes
          </button>
        </a>
        <button className="button filled-button subscribe-button">
          Subscribe
        </button>
      </div>
    </header>
  );
}
