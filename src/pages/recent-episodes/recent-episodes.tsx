import React from "react";
import "./recent-episodes.css";
import episode1 from '../../images/cover/episode-1.png'
import episode2 from '../../images/cover/episode-2.png'
import episode3 from '../../images/cover/episode-3.png'
import episode4 from '../../images/cover/episode-4.png'
import episode5 from '../../images/cover/episode-5.png'
import episode6 from '../../images/cover/episode-6.png'

export type Episode = {
    description: string,
    image: string,
    title: string,
    number: number,
    tags: string[]
}
type RecentEpisodeProp = {
    episodes: Episode[]
}
const episodes: Episode[] = [
    {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio",
        image: episode1,
        title: "Pandemic Becoming Endemic",
        number: 1,
        tags: ["covid-19", "health"],
    },
    {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio",
        image: episode2,
        title: "Tesla Autopilot Controversy",
        number: 2,
        tags: ["automation", "tech"],
    },
    {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio",
        image: episode3,
        title: "Women's Rights? Is it alright?",
        number: 3,
        tags: ["women's rights"],
    },
    {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio",
        image: episode4,
        title: "How to Deal with Self–Confidence",
        number: 4,
        tags: ["self-esteem", "health"],
    },
    {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio",
        image: episode5,
        title: "Type of Social Classes of People",
        number: 5,
        tags: ["social class", "health"],
    },
    {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio",
        image: episode6,
        title: "Are you a Perplexed Mind Person?",
        number: 6,
        tags: ["mind-behaviour", "health"],
    }
]

function EpisodeList(prop: RecentEpisodeProp) {
    const episodes = prop
        .episodes
        .map((episode) => {
            return <div className="recent-episodes-card">
                <div className="top">
                    <img className="image" src={episode.image} alt="episode image"/>
                    <div className="description">
                        <h4>Eps. {episode.number}</h4>
                        <h3>{episode.title}</h3>
                        <hr/>
                        <p>{episode.description}</p>
                    </div>
                </div>
                <div className="card-footer">
                    <ul className="tags">
                        {episode.tags.map((tag) => {
                            return <li className="footer-content">{tag}</li>
                        })}
                    </ul>
                    <div className="hosts font-bold">
                        <p>Hosted By:</p>
                        <img className="footer-image" src={episode1} alt=""/>
                        <img className="footer-image" src={episode1} alt=""/>
                        <img className="footer-image" src={episode1} alt=""/>
                    </div>
                </div>
            </div>
        })

    return (
        <div
            className="recent-episodes-grid">
            {episodes}
        </div>
    )
}

export function RecentEpisodes() {
    return (
        <section className="recent-episodes" id="recent-episodes">
            <h1 className="font-bold lg:text-6xl md:text-4xl sm:text-4xl">
                Recent Episodes
            </h1>
            <h3>Available on your favorite platform</h3>
            <EpisodeList episodes={episodes}/>
            <button className="button tracking-tightest">BROWSE ALL EPISODES</button>
        </section>
    );
}
