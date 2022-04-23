import React from "react";
import "./RecentEpisodes.scss";
import { Podcast } from "../../../model/Podcast";
import { useAppDataInit, useAppSelector } from "../../../app/hooks";
import { PodcastList } from "../../../components/podcast-list/PodcastList";

export const RecentEpisodes = React.forwardRef<HTMLElement>((prop, ref) => {
  useAppDataInit();

  const podcasts: Podcast[] = useAppSelector((state) => state.podcast.value);

  return (
    <section className="recent-episodes" ref={ref}>
      <h1>Recent Episodes</h1>
      <h3>Available on your favorite platform</h3>
      <PodcastList episodes={podcasts} genre="All" />
      <button className="button filled-button tracking-tightest">
        BROWSE ALL EPISODES
      </button>
    </section>
  );
});
