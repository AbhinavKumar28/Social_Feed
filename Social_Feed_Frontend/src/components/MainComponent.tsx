import { useState } from "react";
import type { JSX } from "react";
import "../App.css";
import Left from "./LeftBar";
import Right from "./RightBar";

function MainComponent(): JSX.Element {
  const [left, setLeft] = useState<
    | "favourites"
    | "bookmarks"
    | "private"
    | "new_posts"
    | "trending"
    | "hashtags"
    | "profile"
    | "home"
    | "notification"
    | "lists"
  >("trending");

  return (
    <>
      <div className="top-container">
        <div>
          <Left left={left} />
        </div>
        <div className="right-width">
          <Right left={left} setLeft={setLeft} />
        </div>
      </div>
    </>
  );
}

export default MainComponent;
