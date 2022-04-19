import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Podcast } from "../../model/Podcast";
import { useAppDataInit, useAppSelector } from "../../app/hooks";
import "./PodcastDetail.scss";
import playButton from "../../icons/icon-play.svg";
import { PodcastCover } from "../../components/podcastcover/PodcastCover";
import { LandingHero } from "../../components/landing/Landing";
import { PodcastTag } from "../../components/podcast-tag/PodcastTag";

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
    <section className="podcast-detail">
      <div className="landing-hero">
        <LandingHero />
      </div>
      <div className="top">
        <div className="left">
          <PodcastCover
            podcast={podcast!}
            style={{ height: 472, width: 472 }}
          />

          <div className="tags-area">
            <p className="text-caption font-bold">Tags</p>
            <PodcastTag tags={podcast?.tags} />
          </div>
        </div>
        <div className="right">
          <h3>Episode {podcast?.episode}</h3>
          <h2>{podcast?.title}</h2>
          <hr />
          <p>{podcast?.content}</p>

          <div className="host">
            <div className="hosted-by">
              <img src={podcast?.host.avatar} alt="Cover" />
              <p>Hosted by: </p>
              <p className="host-name">{podcast?.host.name}</p>
            </div>
            <p>
              {podcast?.date.toLocaleDateString("en-us", {
                year: "numeric",
                day: "numeric",
                month: "short",
              })}
            </p>
          </div>
          <div className="bottom-buttons">
            <button className="button filled-button">Subscribe</button>
            <button className="button outline-button  listen-now-btn">
              <img src={playButton} alt="" />
              <p>
                Listen Now <span>(46 min)</span>
              </p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
