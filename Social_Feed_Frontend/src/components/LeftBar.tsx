// import { useState } from "react";
import "../App.css";
import Menu from "./Menu";
// import Content from "./Content";
import Trending from "./Trending";
import { useState, type JSX } from "react";
import TrendingCard from "./TrendingCard";
import type { Leftmenu } from "../types/components";
function Left({ left }: Leftmenu): JSX.Element {
  //   const [count, setCount] = useState(0);
  const [clicked, setClicked] = useState<"posts" | "hashtags" | "people" | "news">("posts");

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
                <img src="../assets/search.png" width="20" />
              </a>
              <span>Search or paste URL</span>
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
            <img src="../assets/image.png" className="trending-image" alt="" />
            <div>
              <div>ak_57</div>
              <div className="gray-text">@ak_57</div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Left;
