import React from "react";
import "./app.css";
import {Testimonials} from "../pages/testimonial/testimonial";
import {Landing} from "../pages/landing/landing";
import spotify from "../images/platforms/spotify.svg";
import avatar_1 from "../images/avatar/avatar-1.png";
import googlePodcast from "../images/platforms/google-podcast.svg";
import avatar_2 from "../images/avatar/avatar-2.png";
import applePodcast from "../images/platforms/apple-podcast.svg";
import avatar_3 from "../images/avatar/avatar-3.png";
import {Navigation} from "../navigation/navigation";
import {Benefits} from "../pages/benefits/benefits";
import {RecentEpisodes} from "../pages/recent-episodes/recent-episodes";
import {BecomeOurSponsor} from "../pages/become-our-sponsor/become-our-sponsor";

export function App() {
    return (
        <div className="App">
            <Navigation/>
            <div className="content flex flex-col justify-center items-center">
                <Landing/>
                <Testimonials props={testimonials()}/>
                <Benefits/>
                <RecentEpisodes/>
                <BecomeOurSponsor/>
            </div>
        </div>
    );
}

const testimonials = () => {
    return [
        {
            name: "Luna LoveGood",
            platform: spotify,
            avatar: avatar_1,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
        },
        {
            name: "Emily Blunt",
            platform: googlePodcast,
            avatar: avatar_2,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
        },
        {
            name: "Mia Winters",
            platform: applePodcast,
            avatar: avatar_3,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
        },
        {
            name: "Wanheda Brown",
            platform: googlePodcast,
            avatar: avatar_3,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
        },
    ];
};
