import React from "react";
import logo from "../images/logo.svg";
import "./navigation.css";

export function Navigation() {
    return (
        <header>
            <img src={logo} alt="logo"/>
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
                    <div className="recent-episodes-btn">Recent Episodes</div>
                </a>
                <div className="button">
                    <button>Subscribe</button>
                </div>
            </div>
        </header>
    );
}
