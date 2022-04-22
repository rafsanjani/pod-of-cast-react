import { Podcast } from "../../model/Podcast";
import { useAppDataInit, useAppSelector } from "../../app/hooks";
import styles from "./PodcastDetail.module.scss";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { PodcastTag } from "../../components/podcast-tag/PodcastTag";
import { Images } from "../../images/images";
import { LandingHero } from "../../components/landing/Landing";
import { PodcastCover } from "../../components/podcastcover/PodcastCover";
import { Footer } from "../../footer/Footer";
import {PodcastList} from "../../components/podcast-list/PodcastList";

export function PodcastDetail() {
  useAppDataInit();

  const podcastEpisodeNumber = Number(useLocation().pathname.split("/").pop());
  const [selectedPodcast, setSelectedSelectedPodcast] = useState<Podcast>();

  const podcasts: Podcast[] = useAppSelector((state) => state.podcast.value);

  useEffect(() => {
    const value = podcasts.find((p) => p.episode === podcastEpisodeNumber);
    setSelectedSelectedPodcast(value);
  }, [podcastEpisodeNumber, podcasts]);

  return <PodcastDetailContent podcast={selectedPodcast} />;
}

type PodcastDetailProp = {
  podcast: Podcast | undefined;
};

function PodcastDetailContent({ podcast }: PodcastDetailProp) {
  return (
    <section className={styles["podcast-detail"]}>
      <div className={styles["landing-hero"]}>
        <LandingHero />
      </div>
      <div className={styles["top"]}>
        <div className={styles["left"]}>
          <PodcastCover
            podcast={podcast!}
            style={{ height: 472, width: 472 }}
          />

          <div className={styles["tags-area"]}>
            <p className="text-caption font-bold">Tags</p>
            <PodcastTag tags={podcast?.tags} />
          </div>
        </div>
        <div className={styles["right"]}>
          <div className={styles["right-top"]}>
            <h3>Episode {podcast?.episode}</h3>
            {podcast?.isFeatured && (
              <h3 className={styles["featured"]}>Featured Episode</h3>
            )}
          </div>
          <h2>{podcast?.title}</h2>
          <hr />
          <p>{podcast?.content}</p>

          <div className={styles["host"]}>
            <div className={styles["hosted-by"]}>
              <img src={podcast?.host.avatar} alt="Cover" />
              <p>Hosted by: </p>
              <p className={styles["host-name"]}>{podcast?.host.name}</p>
            </div>
            <p>
              {podcast?.date.toLocaleDateString("en-us", {
                year: "numeric",
                day: "numeric",
                month: "short",
              })}
            </p>
          </div>
          <div className={styles["bottom-buttons"]}>
            <button className="button filled-button">Subscribe</button>
            <button
              className={`button outline-button ${styles["listen-now-btn"]}`}
            >
              <img src={Images.playButton} alt="" />
              <p>
                Listen Now <span>(46 min)</span>
              </p>
            </button>
          </div>
        </div>
      </div>
      <div className={styles["bottom-content"]}>
        <div className={styles["heading"]}>
          <h2 className={styles.title}>Latest Episode</h2>
          <img className={styles.sparkle} src={Images.sparkle} alt="" />
        </div>
        <GenreNav />
        <Footer />
      </div>
    </section>
  );
}

function GenreNav() {
  useAppDataInit();

  const podcasts: Podcast[] = useAppSelector((state) => state.podcast.value);

  const genres: string[] = [
    "All",
    "Business",
    "Comedy",
    "Education",
    "Health",
    "News",
    "Tech",
  ];
  const items = genres.map((genre) => (
    <li key={genre}>
      <a href="#">{genre}</a>
    </li>
  ));

  return (
    <>
      <div className={styles["genre-nav"]}>
        <ul className={styles["podcast-genre-list"]}>{items}</ul>
        <hr />
        <PodcastList episodes={podcasts}/>
      </div>
    </>
  );
}
