import React, { useEffect } from "react";
import "./RecentEpisodes.scss";
import { Link } from "react-router-dom";
import { Podcast } from "../../model/Podcast";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setPodcast } from "./recent-episodes-slice";
import janeDoe from "../../images/avatar/jane-doe.png";
import avatar1 from "../../images/avatar/avatar-1.png";
import avatar2 from "../../images/avatar/avatar-2.png";

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
  const podcasts: Podcast[] = useAppSelector((state) => state.podcast.value);
  const dispatch = useAppDispatch();
  // const [numDogs, setNumDogs] = useState(10);

  // const { data = [], isFetching } = useFetchBreedsQuery(numDogs);

  // console.log(isFetching);

  useEffect(() => {
    if (podcasts.length === 0) {
      dispatch(setPodcast());
    }
  }, []);

  return (
    <section className="recent-episodes" ref={ref}>
      {/*<div>*/}
      {/*  <p>Dogs to fetch:</p>*/}
      {/*  <select*/}
      {/*      name=""*/}
      {/*      id=""*/}
      {/*      value={numDogs}*/}
      {/*      onChange={(e) => setNumDogs(Number(e.target.value))}*/}
      {/*  >*/}
      {/*    <option value="5">5</option>*/}
      {/*    <option value="10">10</option>*/}
      {/*    <option value="15">15</option>*/}
      {/*    <option value="20">20</option>*/}
      {/*  </select>*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*  <p>Number of dogs fetched: {data.length}</p>*/}
      {/*  <table>*/}
      {/*    <thead>*/}
      {/*    <tr>*/}
      {/*      <th>Name</th>*/}
      {/*      <th>Picture</th>*/}
      {/*    </tr>*/}
      {/*    </thead>*/}

      {/*    <tbody>*/}
      {/*    {data.map((breed) => {*/}
      {/*      return (*/}
      {/*          <tr key={breed.id}>*/}
      {/*            <td>{breed.name}</td>*/}
      {/*            <td>*/}
      {/*              <img*/}
      {/*                  src={breed.image.url}*/}
      {/*                  height="250"*/}
      {/*                  width="250"*/}
      {/*                  alt=""*/}
      {/*              />*/}
      {/*            </td>*/}
      {/*          </tr>*/}
      {/*      );*/}
      {/*    })}*/}
      {/*    </tbody>*/}
      {/*  </table>*/}
      {/*</div>*/}
      <h1 className="font-bold lg:text-6xl md:text-4xl sm:text-4xl">
        Recent Episodes
      </h1>
      <h3>Available on your favorite platform</h3>
      <EpisodeList episodes={podcasts} />
      <button className="button tracking-tightest">BROWSE ALL EPISODES</button>
    </section>
  );
});
