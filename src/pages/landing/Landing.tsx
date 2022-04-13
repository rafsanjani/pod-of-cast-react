import React from "react";
import "./Landing.css";
import hero_shape_swirl from "../../images/hero-shape-swirl.svg";
import stars from "../../images/stars.svg";
import perplexed from "../../images/cover/perplexed-mind.png";
import self_confidence from "../../images/cover/self-confidence.png";
import social_class from "../../images/cover/social-class.png";
import tesla_autopilot from "../../images/cover/tesla-autopilot.png";
import women_rights from "../../images/cover/women-rights.png";
import google from "../../images/platforms/google-podcast.svg";
import spotify from "../../images/platforms/spotify.svg";
import youtube from "../../images/platforms/youtube.svg";

export function Landing() {
  return (
    <section className="landing">
      <div className="hero">
        <img className="spring" src={hero_shape_swirl} alt="spring" />
        <div className="hero-content">
          <h1 className="tracking-tightest text-4xl lg:text-6xl md:text-4xl">
            Your daily
            <br />
            <span>Podcast</span>
          </h1>
          <p>
            We cover all kinds of categories and <br />a weekly special guest.
          </p>
          <button className="button">Subscribe</button>
        </div>
        <img className="stars" src={stars} alt="stars" />
      </div>
      <ImageList />
      <SocialLogos />
    </section>
  );
}

function ImageList() {
  const urls: string[] = [
    perplexed,
    self_confidence,
    social_class,
    tesla_autopilot,
    women_rights,
  ];
  const imageItems = urls.map((image) => {
    return (
      <li key={image}>
        <img
          className="h-16 w-16 md:h-32 md:w-32 lg:h-48 lg:w-48"
          src={image}
          alt="tile element"
        />
      </li>
    );
  });

  return (
    <div className="tiles">
      <ul> {imageItems}</ul>
    </div>
  );
}

function SocialLogos() {
  return (
    <div className="platforms">
      <h1 className="font-bold tracking-tightest">Supported by</h1>
      <ul className="social-logos">
        <li>
          <img src={google} alt="Google" />
        </li>
        <li>
          <img src={spotify} alt="Google" />
        </li>
        <li>
          <img src={youtube} alt="Google" />
        </li>
      </ul>
    </div>
  );
}
