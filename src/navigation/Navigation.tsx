import React from "react";
import "./Navigation.scss";
import { Link } from "react-router-dom";
import { Images } from "../images/images";

export function Navigation() {
  return (
    <div className="nav-wrapper">
      <nav>
        <div className="left">
          <Link to="/">
            <img className="logo" src={Images.logo} alt="logo" />
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
    </div>
  );
}
