// import { useState } from "react";
import "../App.css";
import Menu from "./Menu";
// import Content from "./Content";
import Trending from "./Trending";
import { useState, type JSX } from "react";
import TrendingCard from "./TrendingCard";
function Left(): JSX.Element {
  //   const [count, setCount] = useState(0);
  const [clicked, setClicked] = useState<"posts" | "hashtags" | "people" | "news">("posts");

  return (
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
  );
}

export default Left;
