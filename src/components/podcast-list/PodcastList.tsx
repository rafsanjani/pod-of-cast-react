import { Link } from "react-router-dom";
import { PodcastTag } from "../podcast-tag/PodcastTag";
import janeDoe from "../../images/avatar/jane-doe.png";
import avatar1 from "../../images/avatar/avatar-1.png";
import avatar2 from "../../images/avatar/avatar-2.png";
import React from "react";
import styles from "./PodcastList.module.scss";
import { Podcast } from "../../model/Podcast";

type PodcastListProp = {
  episodes: Podcast[];
  genre: string;
};

export function PodcastList({ episodes, genre }: PodcastListProp) {
  const filteredEpisodes =
    genre === "All"
      ? episodes
      : episodes.filter((podcast) =>
          podcast.tags.includes(genre.toLowerCase())
        );

  const elements = filteredEpisodes.map((podcast) => {
    return (
      <Link to={`podcast/episode/${podcast.episode}`} key={podcast.title}>
        <div className={styles["podcast-card"]}>
          <div className={styles["top"]}>
            <img className={styles.image} src={podcast.cover} alt="episode" />
            <div className={styles.description}>
              <h4>Eps. {podcast.episode}</h4>
              <h3>{podcast.title}</h3>
              <hr className={styles.divider} />
              <p>{podcast.description}</p>
            </div>
          </div>
          <div className={styles["card-footer"]}>
            <div className={styles["tags-area"]}>
              <PodcastTag tags={podcast.tags} />
            </div>

            <div className={styles.hosts}>
              <p>Hosted By:</p>
              <img className={styles["footer-image"]} src={janeDoe} alt="" />
              <img className={styles["footer-image"]} src={avatar1} alt="" />
              <img className={styles["footer-image"]} src={avatar2} alt="" />
            </div>
          </div>
        </div>
      </Link>
    );
  });

  if (elements.length === 0) {
    return <h3 className="font-bold">No Podcast found</h3>;
  }
  return <div className={styles["podcast-list"]}>{elements}</div>;
}
