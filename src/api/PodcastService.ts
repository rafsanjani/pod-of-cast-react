import covid19 from "../images/cover/covid-19.png";
import teslaAutopilot from "../images/cover/tesla-autopilot.png";
import womensRights from "../images/cover/women-rights.png";
import selfConfidence from "../images/cover/self-confidence.png";
import socialClass from "../images/cover/social-class.png";
import perplexedMind from "../images/cover/perplexed-mind.png";
import janeDoe from "../images/avatar/jane-doe.png";
import avatar1 from "../images/avatar/avatar-1.png";
import avatar2 from "../images/avatar/avatar-2.png";
import avatar3 from "../images/avatar/avatar-3.png";
import { Podcast } from "../model/Podcast";

const episodes: Podcast[] = [
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio",
    cover: covid19,
    title: "Pandemic Becoming Endemic",
    shortTitle: "COVID-19 Endemic",
    episode: 1,
    date: new Date(),
    host: {
      name: "Jane doe",
      avatar: avatar1,
    },
    tags: ["covid-19", "health"],
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio",
    cover: teslaAutopilot,
    shortTitle: "Tesla Autopilot",
    host: {
      name: "Jane doe",
      avatar: avatar2,
    },
    date: new Date(2022, 1, 1),
    isFeatured: true,
    title: "Tesla Autopilot Controversy",
    episode: 2,
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    tags: ["automation", "tech"],
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio",
    cover: womensRights,
    host: {
      name: "Jane doe",
      avatar: avatar3,
    },
    date: new Date(),
    shortTitle: "Women's rights",
    title: "Women's Rights? Is it alright?",
    episode: 3,
    tags: ["women's rights"],
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio",
    cover: selfConfidence,
    title: "How to Deal with Self–Confidence",
    episode: 4,
    date: new Date(),
    shortTitle: "Self-confidence",
    host: {
      name: "Jane doe",
      avatar: janeDoe,
    },
    isFeatured: true,
    tags: ["self-esteem", "health"],
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio",
    cover: socialClass,
    date: new Date(),
    title: "Type of Social Classes of People",
    shortTitle: "Social Class",
    host: {
      name: "Jane doe",
      avatar: janeDoe,
    },
    episode: 5,
    tags: ["social class", "health"],
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio",
    cover: perplexedMind,
    date: new Date(),
    host: {
      name: "Jane doe",
      avatar: janeDoe,
    },
    isFeatured: true,
    title: "Are you a Perplexed Mind Person?",
    shortTitle: "Perplexed Mind",
    episode: 6,
    tags: ["mind-behaviour", "health"],
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
];

export const getPodcastEpisodes = () => episodes;
