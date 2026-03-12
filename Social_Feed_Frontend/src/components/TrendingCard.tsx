// import { useState } from "react";
import type { JSX } from "react";
import "../App.css";
import mastodonLogo from "../assets/mastodon.png";
import aiLogo from "../assets/ai.png";
import type { Clicked, Post } from "../types/components";
import PostCard from "./PostCard";
import postsOf from "../data/trending-posts.json";
const posts: Post[] = postsOf;
function TrendingCard({ clicked }: Clicked): JSX.Element {
  //   const [count, setCount] = useState(0);
  return (
    <>
      {clicked === "posts" &&
        posts.map((post: Post, index: number) => <PostCard key={index} post={post} />)}
      {clicked === "hashtags" && (
        <>
          <div className="pad-bor">
            <div className="bold">#SeabirdsABookOrPlay</div>
            <div>83 people in the past 2 days</div>
          </div>
          <div className="pad-bor">
            <div className="bold">#fruitasongorpoem</div>
            <div>134 people in the past 2 days</div>
          </div>
          <div className="pad-bor">
            <div className="bold">#TuneTuesday</div>
            <div>97 people in the past 2 days</div>
          </div>
        </>
      )}
      {clicked === "people" && (
        <>
          <div className="grid-view">
            <div className="column-one">Popular on mastodon.social</div>

            <div className="column-two">
              <img src={mastodonLogo} className="people-image" alt="" />
            </div>
            <div className="column-one">
              <div>Information Is Beautiful</div>
              <div>@infobeautiful@vis.social</div>
            </div>
            <button className="explore-suggestions-card__dismiss-button icon-button column-three">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                className="icon icon-close"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"></path>
              </svg>
            </button>

            <button className="column-four">Follow</button>
          </div>
        </>
      )}
      {clicked === "news" && (
        <>
          <div className="news-card">
            <div>
              <div>USA TODAY · 2d</div>
              <div>
                Deepak Chopra acknowledges &apos;poor judgment&apos; over emails with Epstein
              </div>
              <div className="posts-news">
                <div>By , USA TODAY</div>
                <div className="margin-left">160 posts</div>
              </div>
            </div>
            <div>
              <img className="news-image" src={aiLogo} alt="" />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default TrendingCard;
