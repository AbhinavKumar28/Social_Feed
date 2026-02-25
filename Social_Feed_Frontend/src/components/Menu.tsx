// import { useState } from "react";
import { type JSX } from "react";
import "../App.css";
import type { MenuProps } from "../types/components";
function Menu({ clicked, setClicked }: MenuProps): JSX.Element {
  //   const [count, setCount] = useState(0);
  // const [clicked, setClicked] = useState<"posts" | "hashtags" | "people" | "news">("hashtags");
  console.log(clicked);
  return (
    <>
      <div className="border-bottom">
        <div className="menu-items">
          <a className={clicked === "posts" ? "active" : ""} onClick={() => setClicked("posts")}>
            Posts
          </a>
        </div>
        <div className="menu-items">
          <a
            className={clicked === "hashtags" ? "active" : ""}
            onClick={() => setClicked("hashtags")}
          >
            Hashtags
          </a>
        </div>
        <div className="menu-items">
          <a className={clicked === "people" ? "active" : ""} onClick={() => setClicked("people")}>
            People
          </a>
        </div>
        <div className="menu-items">
          <a className={clicked === "news" ? "active" : ""} onClick={() => setClicked("news")}>
            News
          </a>
        </div>
      </div>
    </>
  );
}

export default Menu;
