import React from "react";
import "./Benfits.scss";
import scribble from "../../../icons/scribble.svg";
import topic from "../../../icons/ic-topic.svg";
import shiningStars from "../../../icons/shining-stars.svg";
import face from "../../../icons/face.svg";
import fire from "../../../icons/fire.svg";
import stars from "../../../icons/stars.svg";

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
        <p className="text-body">{benefit.text}</p>
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
          <h1>Membership benefits</h1>
          <img src={scribble} alt="" />
        </div>
        <h3>Become our sponsor and get all benefits</h3>
      </header>
      <BenefitsGrid benefits={benefits} />
      <button className="button filled-button"> See Pricing</button>
    </section>
  );
}
