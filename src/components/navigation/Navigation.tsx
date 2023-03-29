import React from "react";
import "./Navigation.scss";
import { Link } from "react-router-dom";
import { Images } from "../../images/images";

export function Navigation() {
  return (
    <div className="nav-wrapper">
      <nav>
        <div className="left">
          <Link to="/">
            <img className="logo" src={Images.logo} alt="logo" />
          </Link>
          <ul>
            <li className="nav-link">
              <Link
                to={{
                  pathname: "/",
                  hash: "#recent-episodes",
                }}
              >
                Episodes
              </Link>
            </li>
            <li className="nav-link">
              <Link to="about">About</Link>
            </li>
            <li className="nav-link dropdown">
              <a href="#">
                <div>
                  <p>More</p>
                  <img src={Images.arrowDown} alt="" />
                </div>
              </a>
              <div className="dropdown-content">
                <ul className="vertical-list">
                  <li>
                    <a>Article and News</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                </ul>
              </div>
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
