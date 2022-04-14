import "./About.css";
import React from "react";
import { LandingHero } from "../landing/Landing";

export function About() {
  return (
    <section className="about">
      <LandingHero
        title="About"
        subtitle="Pod of Cast"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam–quis."
      >
        <div className="about-buttons">
          <button className="outline-button">BECOME SPONSOR</button>
          <button className="button">SUBSCRIBE</button>
        </div>
      </LandingHero>
    </section>
  );
}
