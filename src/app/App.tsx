import React from "react";
import logo from "../images/logo.svg";

function App() {
  return (
    <div className="App">
      <header className="navigation">
        <div className="logo">
          <img src={logo} alt="Logo" width="150px" />
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#" className="sign-up-btn">
                Sign Up
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="content-left">
          <h1>Digital</h1>
          <h2>Marketing</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A,
            corporis dolore explicabo fugiat id ipsam magni minima minus natus
            neque nulla quis quod reiciendis, soluta?
          </p>
          <button className="cta">Learn More</button>
        </div>
        <div className="content-right">
          <img src={logo} className="hero-img" alt="Background" />
        </div>
      </main>
    </div>
  );
}

export default App;
