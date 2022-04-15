import React from "react";
import "./Benfits.css";
import scribble from "../../images/scribble.svg";
import topic from "../../images/ic-topic.svg";
import shiningStars from "../../images/shining-stars.svg";
import face from "../../images/face.svg";
import fire from "../../images/fire.svg";
import stars from "../../images/stars.svg";

type BenefitsScreenType = {
  image: string;
  text: string;
  title: string;
};

type BenefitsProp = {
  benefits: BenefitsScreenType[];
};

function BenefitsGrid(props: BenefitsProp) {
  const benefitsGridItems = props.benefits.map((benefit) => {
    return (
      <div className="benefits-card" key={benefit.title}>
        <img src={benefit.image} alt="" />
        <h3 className="font-bold">{benefit.title}</h3>
        <p>{benefit.text}</p>
      </div>
    );
  });

  return <div className="benefits-grid">{benefitsGridItems}</div>;
}

export function Benefits() {
  const benefits: BenefitsScreenType[] = [
    {
      image: topic,
      text: "Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor",
      title: "Topic By Request",
    },
    {
      image: shiningStars,
      text: "Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor",
      title: "Exclusive Content",
    },
    {
      image: face,
      text: "Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor",
      title: "Join the community",
    },
    {
      image: face,
      text: "Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor",
      title: "Livestream Access",
    },
    {
      image: fire,
      text: "Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor",
      title: "Exclusive Episodes and Merch",
    },
    {
      image: stars,
      text: "Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor",
      title: "And much more!",
    },
  ];
  return (
    <section className="benefits">
      <header>
        <div>
          <h1 className="font-bold lg:text-6xl md:text-4xl sm:text-4xl">
            Membership benefits
          </h1>
          <img src={scribble} alt="" />
        </div>
        <h3>Become our sponsor and get all benefits</h3>
      </header>
      <BenefitsGrid benefits={benefits} />
      <button className="button"> See Pricing</button>
    </section>
  );
}
