// import { useState } from "react";
// import type { JSX } from "react";
import "../App.css";
import { useState, type JSX } from "react";

import searchLogo from "../assets/search.png";
function Search(): JSX.Element {
  //   const [count, setCount] = useState(0);
  const [search, setSearch] = useState<boolean>(false);
  return (
    <>
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
            placeholder="Search or paste URL"
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
    </>
  );
}

export default Search;
