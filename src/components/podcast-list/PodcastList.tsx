import { Link } from "react-router-dom";
import { PodcastTag } from "../podcast-tag/PodcastTag";
import janeDoe from "../../images/avatar/jane-doe.png";
import avatar1 from "../../images/avatar/avatar-1.png";
import avatar2 from "../../images/avatar/avatar-2.png";
import React from "react";
import "./PodcastList.scss";
import { Podcast } from "../../model/Podcast";

type PodcastListProp = {
  episodes: Podcast[];
};

export function PodcastList(prop: PodcastListProp) {
  const episodeListElements = prop.episodes.map((podcast) => {
    return (
      <Link to={`podcast/episode/${podcast.episode}`} key={podcast.title}>
        <div className="podcast-card">
          <div className="top">
            <img className="image" src={podcast.cover} alt="episode" />
            <div className="description">
              <h4>Eps. {podcast.episode}</h4>
              <h3>{podcast.title}</h3>
              <hr />
              <p>{podcast.description}</p>
            </div>
          </div>
          <div className="card-footer">
            <div className="tags-area">
              <PodcastTag tags={podcast.tags} />
            </div>

            <div className="hosts font-bold">
              <p>Hosted By:</p>
              <img className="footer-image" src={janeDoe} alt="" />
              <img className="footer-image" src={avatar1} alt="" />
              <img className="footer-image" src={avatar2} alt="" />
            </div>
          </div>
        </div>
      </Link>
    );
  });

  return <div className="podcast-list">{episodeListElements}</div>;
}
