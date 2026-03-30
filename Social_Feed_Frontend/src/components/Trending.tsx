import type { JSX } from "react";
import "../App.css";
import mastodonLogo from "../assets/mastodon.png";
function Trending(): JSX.Element {
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
