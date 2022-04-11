import React from "react";
import "./recent-episodes.css";

export function RecentEpisodeCard() {
    return <div className="recent-episodes-card">
        <div className="top">
            <div className="image"></div>
            <div className="description">
                <h4>Eps. 6</h4>
                <h3>Pandemic becoming endemic</h3>
                <hr/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, repellat!</p>
            </div>
        </div>
        <div className="card-footer">
            <ul className="tags">
                <li className="footer-content">Hello</li>
                <li className="footer-content">Hello</li>
                <li className="footer-content">Hello</li>
            </ul>
            <div className="hosted-by footer-content">
                Hosted by
            </div>
        </div>
    </div>
}

export function RecentEpisodes() {
    return (
        <section className="recent-episodes" id="recent-episodes">
            <h1 className="font-bold lg:text-6xl md:text-4xl sm:text-4xl">
                Recent Episodes
            </h1>
            <h3>Available on your favorite platform</h3>
            <div
                className="recent-episodes-grid grid grid-rows-3 md:grid-cols-1 md:grid-rows-6 sm:grid-cols-1 lg:grid-cols-2">
                <RecentEpisodeCard/>
                <RecentEpisodeCard/>
                <RecentEpisodeCard/>
                <RecentEpisodeCard/>
                <RecentEpisodeCard/>
                <RecentEpisodeCard/>
            </div>
        </section>
    );
}
