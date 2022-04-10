import React from "react";
import "./podcast.css";
import logo from "../images/logo.svg";
import hero_shape_swirl from "../images/hero-shape-swirl.svg";
import stars from "../images/stars.svg";
import { SocialLogos } from "./social-logos/social-logos";
import { ImageList } from "./image-list/image-list";
import { Testimonial, Testimonials } from "./testimonial/testimonial";
import avatar_1 from "../images/avatar/avatar-1.png";
import avatar_2 from "../images/avatar/avatar-2.png";
import avatar_3 from "../images/avatar/avatar-3.png";
import spotify from "../images/platforms/spotify.png";
import googlePodcast from "../images/platforms/google-podcast.png";
import applePodcast from "../images/platforms/apple-podcast.svg";
import { Benefits } from "./benefits/benefits";

export function Podcast() {
  let testimonials: Testimonial[] = [
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
        <section>
          <Testimonials props={testimonials} />
        </section>
        <Benefits />
      </div>
    </div>
  );
}
