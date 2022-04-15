import React, { useEffect } from "react";
import "./RecentEpisodes.scss";
import episode1 from "../../images/cover/episode-1.png";
import { Link } from "react-router-dom";
import { Podcast } from "../../model/Podcast";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getPodcastEpisodes } from "../../api/PodcastService";
import { setPodcast } from "./recent-episodes-slice";

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
            <ul className="tags">
              {podcast.tags.map((tag) => {
                return (
                  <li className="footer-content" key={tag}>
                    {tag}
                  </li>
                );
              })}
            </ul>
            <div className="hosts font-bold">
              <p>Hosted By:</p>
              <img className="footer-image" src={episode1} alt="" />
              <img className="footer-image" src={episode1} alt="" />
              <img className="footer-image" src={episode1} alt="" />
            </div>
          </div>
        </div>
      </Link>
    );
  });

  return <div className="recent-episodes-grid">{episodeListElements}</div>;
}

export const RecentEpisodes = React.forwardRef<HTMLElement>((prop, ref) => {
  const podcasts = useAppSelector((state) => state.podcast.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchPodcasts() {
      const podcasts = await getPodcastEpisodes();
      dispatch(setPodcast(podcasts));
    }

    fetchPodcasts().then(() => console.log("Successfully loaded podcasts"));
  }, []);

  return (
    <section className="recent-episodes" ref={ref}>
      <h1 className="font-bold lg:text-6xl md:text-4xl sm:text-4xl">
        Recent Episodes
      </h1>
      <h3>Available on your favorite platform</h3>
      <EpisodeList episodes={podcasts} />
      <button className="button tracking-tightest">BROWSE ALL EPISODES</button>
    </section>
  );
});
