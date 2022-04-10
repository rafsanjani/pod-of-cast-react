import React from "react";
import "./social-logos.css";
import google from "../../images/platforms/google-podcast.png";
import spotify from "../../images/platforms/spotify.png";
import youtube from "../../images/platforms/youtube.png";

export function SocialLogos() {
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
