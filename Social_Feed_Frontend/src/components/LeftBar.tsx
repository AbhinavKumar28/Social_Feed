// import { useState } from "react";
import "../App.css";
import Menu from "./Menu";
// import Content from "./Content";
import searchLogo from "../assets/search.png";
import mastodonLogo from "../assets/mastodon.png";
import Trending from "./Trending";
import { useState, useEffect, useRef, type JSX } from "react";
import TrendingCard from "./TrendingCard";
import type { Leftmenu } from "../types/components";
function Left({ left }: Leftmenu): JSX.Element {
  //   const [count, setCount] = useState(0);
  const [clicked, setClicked] = useState<"posts" | "hashtags" | "people" | "news">("posts");
  const [search, setSearch] = useState<boolean>(false);

  return (
    <>
      {left === "trending" && (
        <>
          <Trending />
          <div className="pady-search">
            <div className="border">
              <a
                className="search-icon"
                href="https://www.flaticon.com/free-icons/seo"
                title="seo icons"
              >
                <img src={searchLogo} width="20" />
              </a>
              <input
                placeholder="Search "
                onFocus={() => setSearch(true)}
                onBlur={() => setSearch(false)}
              />
            </div>
            <div className={`search-popup-main ${search ? "show" : "hide"}`}>
              <div className="search-popup-draft">RECENT SEARCHES</div>
              <div className="search-popup-draft">No recent searches</div>
              <div className="search-popup-draft">SEARCH OPTIONS</div>
              <div className="search-popup">
                <span className="search-bold">has: </span>
                <span>media, poll or embed</span>
              </div>
              <div className="search-popup">
                <span className="search-bold">is: </span>
                <span>reply or sensitive</span>
              </div>
              <div className="search-popup">
                <span className="search-bold">language: </span>
                <span>ISO language code</span>
              </div>
              <div className="search-popup">
                <span className="search-bold">from: </span>
                <span>user</span>
              </div>
              <div className="search-popup">
                <span className="search-bold">before: </span>
                <span>specific date</span>
              </div>
              <div className="search-popup">
                <span className="search-bold">during: </span>
                <span>specific date</span>
              </div>
              <div className="search-popup">
                <span className="search-bold">after: </span>
                <span>specific date</span>
              </div>
              <div className="search-popup">
                <span className="search-bold">in: </span>
                <span>all, library or public</span>
              </div>
            </div>
          </div>
          <Menu clicked={clicked} setClicked={setClicked} />
          <TrendingCard clicked={clicked} />
        </>
      )}
      {left === "new_posts" && (
        <>
          <div>
            <button className="column-header__back-button compact" aria-label="Back" type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                className="icon icon-chevron-left column-back-button__icon"
                aria-hidden="true"
              >
                <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"></path>
              </svg>
            </button>
            <span>New Post</span>
          </div>
          <div className="pady-name center-align">
            <img src={mastodonLogo} className="trending-image" alt="" />
            <div>
              <div>ak_57</div>
              <div className="gray-text">@ak_57</div>
            </div>
          </div>
          <div className="post-border">
            <button type="button" title="Change post privacy" className="dropdown-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                className="icon icon-globe"
                aria-hidden="true"
              >
                <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-40-82v-78q-33 0-56.5-23.5T360-320v-40L168-552q-3 18-5.5 36t-2.5 36q0 121 79.5 212T440-162Zm276-102q41-45 62.5-100.5T800-480q0-98-54.5-179T600-776v16q0 33-23.5 56.5T520-680h-80v80q0 17-11.5 28.5T400-560h-80v80h240q17 0 28.5 11.5T600-440v120h40q26 0 47 15.5t29 40.5Z"></path>
              </svg>
              <span className="dropdown-button__label">Public, quotes allowed</span>
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default Left;
