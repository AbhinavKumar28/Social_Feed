// import { useState } from "react";
import type { JSX } from "react";
import "../App.css";
import mastodonLogo from "../assets/mastodon.png";
function Home(): JSX.Element {
  //   const [count, setCount] = useState(0);

  return (
    <>
      <div className="pady center-align">
        <img src={mastodonLogo} className="trending-image" />
        <span>Home</span>
      </div>
      <hr className="divider" />
    </>
  );
}

export default Home;
