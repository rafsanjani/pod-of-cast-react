import React from "react";
import "./image-list.css";
import perplexed from "../../images/cover/perplexed-mind.png";
import self_confidence from "../../images/cover/self-confidence.png";
import social_class from "../../images/cover/social-class.png";
import tesla_autopilot from "../../images/cover/tesla-autopilot.png";
import women_rights from "../../images/cover/women-rights.png";

export function ImageList() {
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
