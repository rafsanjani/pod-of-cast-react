import React, { useEffect, useRef } from "react";
import "./Landing.scss";
import "../../images/images";
import { Benefits } from "../../pages/home/benefits/Benefits";
import { RecentEpisodes } from "../../pages/home/recent-episodes/RecentEpisodes";
import { BecomeOurSponsor } from "../../pages/home/become-our-sponsor/BecomeOurSponsor";
import { Footer } from "../footer/Footer";
import { useLocation } from "react-router-dom";
import { Testimonials } from "../../pages/home/testimonial/Testimonial";
import { Images } from "../../images/images";

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
  title?: string;
  subtitle?: string;
  paragraph?: string;
  children?: React.ReactNode;
};

export function LandingHero(props: LandingHeroProps) {
  return (
    <div className="hero">
      <img className="spring" src={Images.heroShapeSwirl} alt="spring" />
      <div className="hero-content">
        <div className="display">
          {props.title}
          <br />
          <span>{props.subtitle}</span>
        </div>
        <p>{props.paragraph}</p>
        {props.children}
      </div>
      <img className="stars" src={Images.stars} alt="stars" />
    </div>
  );
}

function ImageList() {
  const urls: string[] = [
    Images.perplexed,
    Images.selfConfidence,
    Images.socialClass,
    Images.teslaAutoPilot,
    Images.womenRights,
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
          <img src={Images.google} alt="Google" key="Google" />
        </li>
        <li>
          <img src={Images.spotify} alt="Spotify" key="Spotify" />
        </li>
        <li>
          <img src={Images.youtube} alt="Youtube" key="Youtube" />
        </li>
      </ul>
    </div>
  );
}
