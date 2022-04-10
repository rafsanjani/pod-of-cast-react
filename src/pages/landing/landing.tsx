import React from "react";
import "./landing.css";
import logo from "../../images/logo.svg";
import hero_shape_swirl from "../../images/hero-shape-swirl.svg";
import stars from "../../images/stars.svg";
import { Testimonials } from "../testimonial/testimonial";
import avatar_1 from "../../images/avatar/avatar-1.png";
import avatar_2 from "../../images/avatar/avatar-2.png";
import avatar_3 from "../../images/avatar/avatar-3.png";
import spotify from "../../images/platforms/spotify.png";
import googlePodcast from "../../images/platforms/google-podcast.png";
import google from "../../images/platforms/google-podcast.png";
import applePodcast from "../../images/platforms/apple-podcast.svg";
import { Benefits } from "../benefits/benefits";
import perplexed from "../../images/cover/perplexed-mind.png";
import self_confidence from "../../images/cover/self-confidence.png";
import social_class from "../../images/cover/social-class.png";
import tesla_autopilot from "../../images/cover/tesla-autopilot.png";
import women_rights from "../../images/cover/women-rights.png";
import youtube from "../../images/platforms/youtube.png";
import { RecentEpisodes } from "../recent-episodes/recent-episodes";

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
          className="lg:h-52 lg:w-52 md:w-40 md:h-40 sm:w-20 sm:h-20 xs:h-20 xs:w-20"
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

const testimonials = () => {
  return [
    {
      name: "Luna LoveGood",
      platform: spotify,
      avatar: avatar_1,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    },
    {
      name: "Emily Blunt",
      platform: googlePodcast,
      avatar: avatar_2,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    },
    {
      name: "Mia Winters",
      platform: applePodcast,
      avatar: avatar_3,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    },
    {
      name: "Wanheda Brown",
      platform: googlePodcast,
      avatar: avatar_3,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    },
  ];
};

export function Landing() {
  return (
    <div className="App">
      <header>
        <img src={logo} alt="logo" />
        <nav>
          <ul>
            <li>
              <a href="#">Episodes</a>
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
            <div className="recent">Recent Episodes</div>
          </a>
          <div className="button">
            <button>Subscribe</button>
          </div>
        </div>
      </header>
      <div className="content flex flex-col justify-center items-center">
        <section>
          <div className="hero">
            <div className="spring">
              <img src={hero_shape_swirl} alt="spring" />
            </div>
            <div className="hero-content">
              <h1 className="tracking-tightest lg:text-6xl md:text-4xl sm:text-4xl xs:text-4xl">
                Your daily
                <br />
                <span>Podcast</span>
              </h1>
              <p>
                We cover all kinds of categories and <br />a weekly special
                guest.
              </p>
              <div className="button">
                <button className="button">Subscribe</button>
              </div>
            </div>
            <div className="stars">
              <img src={stars} alt="stars" />
            </div>
          </div>
          <ImageList />
          <SocialLogos />
        </section>
        <Testimonials props={testimonials()} />
        <Benefits />
        <RecentEpisodes />
      </div>
    </div>
  );
}
