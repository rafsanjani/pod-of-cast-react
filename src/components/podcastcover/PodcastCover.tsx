import React from "react";
import "./PodcastCover.scss";
import google from "../../icons/google-podcast.svg";
import spotify from "../../icons/spotify.svg";
import youtube from "../../icons/youtube.svg";
import { Podcast } from "../../model/Podcast";

type PodcastCoverProps = {
  podcast: Podcast | undefined;
  style?: React.CSSProperties;
};

export function PodcastCover({ podcast, style }: PodcastCoverProps) {
  return (
    <div className="cover-container" style={style}>
      <img className="stack-item" src={podcast?.cover} alt={podcast?.title} />
      <div className="stack-item">
        <div className="content">
          <div className="platform-icons">
            <img src={google} alt="" />
            <img src={spotify} alt="" />
            <img src={youtube} alt="" />
          </div>
          <h2>{podcast?.shortTitle}</h2>
        </div>
      </div>
    </div>
  );
}
