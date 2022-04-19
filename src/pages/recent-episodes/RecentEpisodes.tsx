import React from "react";
import "./RecentEpisodes.scss";
import { Link } from "react-router-dom";
import { Podcast } from "../../model/Podcast";
import { useAppDataInit, useAppSelector } from "../../app/hooks";
import janeDoe from "../../images/avatar/jane-doe.png";
import avatar1 from "../../images/avatar/avatar-1.png";
import avatar2 from "../../images/avatar/avatar-2.png";
import { PodcastTag } from "../../components/podcast-tag/PodcastTag";

type RecentEpisodeProp = {
  episodes: Podcast[];
};

function EpisodeList(prop: RecentEpisodeProp) {
  const episodeListElements = prop.episodes.map((podcast) => {
    return (
      <Link to={`podcast/episode/${podcast.episode}`} key={podcast.title}>
        <div className="recent-episodes-card">
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

  return <div className="recent-episodes-grid">{episodeListElements}</div>;
}

export const RecentEpisodes = React.forwardRef<HTMLElement>((prop, ref) => {
  useAppDataInit();

  const podcasts: Podcast[] = useAppSelector((state) => state.podcast.value);

  return (
    <section className="recent-episodes" ref={ref}>
      <h1>Recent Episodes</h1>
      <h3>Available on your favorite platform</h3>
      <EpisodeList episodes={podcasts} />
      <button className="button filled-button tracking-tightest">
        BROWSE ALL EPISODES
      </button>
    </section>
  );
});
