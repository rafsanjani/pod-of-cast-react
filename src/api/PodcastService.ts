import episode1 from "../images/cover/episode-1.png";
import episode2 from "../images/cover/episode-2.png";
import episode3 from "../images/cover/episode-3.png";
import episode4 from "../images/cover/episode-4.png";
import episode5 from "../images/cover/episode-5.png";
import episode6 from "../images/cover/episode-6.png";
import { Podcast } from "../model/Podcast";

const episodes: Podcast[] = [
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio",
    cover: episode1,
    title: "Pandemic Becoming Endemic",
    episode: 1,
    tags: ["covid-19", "health"],
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio",
    cover: episode2,
    title: "Tesla Autopilot Controversy",
    episode: 2,
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    tags: ["automation", "tech"],
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio",
    cover: episode3,
    title: "Women's Rights? Is it alright?",
    episode: 3,
    tags: ["women's rights"],
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio",
    cover: episode4,
    title: "How to Deal with Self–Confidence",
    episode: 4,
    tags: ["self-esteem", "health"],
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio",
    cover: episode5,
    title: "Type of Social Classes of People",
    episode: 5,
    tags: ["social class", "health"],
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio",
    cover: episode6,
    title: "Are you a Perplexed Mind Person?",
    episode: 6,
    tags: ["mind-behaviour", "health"],
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
];

export const getPodcastEpisodes = async () => episodes;
