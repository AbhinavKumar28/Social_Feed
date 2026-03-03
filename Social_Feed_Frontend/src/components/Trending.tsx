// import { useState } from "react";
import type { JSX } from "react";
import "../App.css";
import mastodonLogo from "../assets/mastodon.png";
function Trending(): JSX.Element {
  //   const [count, setCount] = useState(0);

  return (
    <>
      <div className="pady center-align">
        <img src={mastodonLogo} className="trending-image" alt="" />
        <span>Trending</span>
      </div>
      <hr className="divider" />
    </>
  );
}

export default Trending;
