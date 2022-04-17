import React, { useEffect, useRef } from "react";
import "./Landing.scss";
import hero_shape_swirl from "../../images/hero-shape-swirl.svg";
import stars from "../../images/stars.svg";
import perplexed from "../../images/cover/perplexed-mind.png";
import selfConfidence from "../../images/cover/self-confidence.png";
import socialClass from "../../images/cover/social-class.png";
import teslaAutopilot from "../../images/cover/tesla-autopilot.png";
import womensRights from "../../images/cover/women-rights.png";
import google from "../../images/platforms/google-podcast.svg";
import spotify from "../../images/platforms/spotify.svg";
import youtube from "../../images/platforms/youtube.svg";
import { Benefits } from "../benefits/Benefits";
import { RecentEpisodes } from "../recent-episodes/RecentEpisodes";
import { BecomeOurSponsor } from "../become-our-sponsor/BecomeOurSponsor";
import { Footer } from "../../footer/Footer";
import { useLocation } from "react-router-dom";
import { Testimonials } from "../testimonial/Testimonial";

export function Landing() {
  const recentEpisodesRef = useRef<HTMLElement>(null);
  const location = useLocation();

  useEffect(() => {
    if (recentEpisodesRef && location.hash.includes("#recent-episodes")) {
      recentEpisodesRef?.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "center",
      });
    }
  });

  return (
    <section className="landing">
      <LandingHero
        title="Your daily"
        subtitle="Podcast"
        paragraph="We cover all kinds of categories and a weekly special guest"
      >
        <button className="button filled-button">Subscribe</button>
      </LandingHero>
      <ImageList />
      <SocialLogos />
      <Benefits />
      <RecentEpisodes ref={recentEpisodesRef} />
      <Testimonials />
      <BecomeOurSponsor />
      <Footer />
    </section>
  );
}

type LandingHeroProps = {
  title: string;
  subtitle: string;
  paragraph: string;
  children: React.ReactNode;
};

export function LandingHero(props: LandingHeroProps) {
  return (
    <div className="hero">
      <img className="spring" src={hero_shape_swirl} alt="spring" />
      <div className="hero-content">
        <div className="display">
          {props.title}
          <br />
          <span>{props.subtitle}</span>
        </div>
        <p>{props.paragraph}</p>
        {props.children}
      </div>
      <img className="stars" src={stars} alt="stars" />
    </div>
  );
}

function ImageList() {
  const urls: string[] = [
    perplexed,
    selfConfidence,
    socialClass,
    teslaAutopilot,
    womensRights,
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

  return <ul className="horizontal-list tiles"> {imageItems}</ul>;
}

function SocialLogos() {
  return (
    <div className="platforms horizontal-list">
      <h3 className="font-bold tracking-tightest">Supported by</h3>
      <ul className="social-logos horizontal-list">
        <li>
          <img src={google} alt="Google" key="Google" />
        </li>
        <li>
          <img src={spotify} alt="Spotify" key="Spotify" />
        </li>
        <li>
          <img src={youtube} alt="Youtube" key="Youtuge" />
        </li>
      </ul>
    </div>
  );
}
