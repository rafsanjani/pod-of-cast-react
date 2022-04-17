export interface PodcastHost {
  name: string;
  avatar: string;
}

export interface Podcast {
  title: string;
  episode: number;
  cover: string;
  tags: string[];
  description: string;
  content: string;
  host: PodcastHost;
}
