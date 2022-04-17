import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Podcast } from "../../model/Podcast";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setPodcast } from "../recent-episodes/recent-episodes-slice";

export const PodcastDetail = () => {
  const episode = useParams();

  return (
    <div>
      <Hello />
    </div>
  );
};

function Hello() {
  const podcastEpisodeNumber = Number(useLocation().pathname.split("/").pop());
  const [podcast, setSelectedPodcast] = useState<Podcast>();

  const podcasts: Podcast[] = useAppSelector((state) => state.podcast.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (podcasts.length === 0) {
      dispatch(setPodcast());
    } else {
      const value = podcasts.find((p) => p.episode === podcastEpisodeNumber);
      setSelectedPodcast(value);
    }
  }, [podcasts.length]);

  if (podcast) {
    return <div>{podcast.episode}</div>;
  } else {
    return <p>Error loading podcast</p>;
  }
}
