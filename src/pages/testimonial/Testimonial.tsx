import React, { useRef } from "react";
import "./Testimonial.scss";
import sparkles from "../../images/sparkles.svg";
import arrowLeft from "../../images/arrow-left-circle.svg";
import arrowRight from "../../images/arrow-right-circle.svg";
import spotify from "../../images/platforms/spotify.svg";
import avatar_1 from "../../images/avatar/avatar-1.png";
import googlePodcast from "../../images/platforms/google-podcast.svg";
import avatar_2 from "../../images/avatar/avatar-2.png";
import applePodcast from "../../images/platforms/apple-podcast.svg";
import avatar_3 from "../../images/avatar/avatar-3.png";

export type Testimonial = {
  avatar: string;
  platform: string;
  name: string;
  text: string;
};
const hello = () => {
  return "";
};
const testimonials = () => {
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

  return testimonials;
};

export function Testimonials() {
  const listRef = useRef<HTMLDivElement>(null);
  let cardWidth = 570;

  let scrollForward = () => {
    listRef?.current?.scrollBy({
      behavior: "smooth",
      left: cardWidth,
      top: 0,
    });
  };

  let scrollBackwards = () => {
    listRef?.current?.scrollBy({
      behavior: "smooth",
      left: -cardWidth,
      top: 0,
    });
  };

  const testimonialList = testimonials().map((testimonial) => {
    return (
      <div className="testimonial-card" key={testimonial.name}>
        <h1 className="font-bold">“</h1>
        <p>{testimonial.text}</p>
        <div className="contact">
          <div className="flex flex-row">
            <img className="avatar" src={testimonial.avatar} alt="avatar-1" />
            <h6>{testimonial.name}</h6>
          </div>
          <img className="social" src={testimonial.platform} alt="spotify" />
        </div>
      </div>
    );
  });

  return (
    <section className="testimonial">
      <header>
        <div>
          <img src={sparkles} alt="" />
          <h1 className="font-bold lg:text-6xl md:text-4xl sm:text-4xl">
            What our listeners say
          </h1>
        </div>
        <h3>Their experience throughout every platform</h3>
      </header>
      <div className="testimonials-wrapper" ref={listRef}>
        <div className="testimonial-list">{testimonialList}</div>
      </div>
      <div className="card-navigation">
        <img src={arrowLeft} alt="Scroll left" onClick={scrollBackwards} />
        <img src={arrowRight} alt="Scroll right" onClick={scrollForward} />
      </div>
    </section>
  );
}
