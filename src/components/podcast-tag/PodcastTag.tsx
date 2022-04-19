import React from "react";
import "./PodcastTag.scss";

type PodcastTagProps = {
  tags: string[] | undefined;
};

export function PodcastTag({ tags }: PodcastTagProps) {
  return (
    <ul className="horizontal-list">
      {tags?.map((tag) => {
        return (
          <li className="podcast-tag" key={tag}>
            {tag}
          </li>
        );
      })}
    </ul>
  );
}
