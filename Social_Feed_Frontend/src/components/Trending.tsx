// import { useState } from "react";
import type { JSX } from "react";
import "../App.css";
import "../assets/image.png";
function Trending(): JSX.Element {
  //   const [count, setCount] = useState(0);

  return (
    <>
      <div className="pady center-align">
        <img src="../assets/image.png" className="trending-image" alt="" />
        <span>Trending</span>
      </div>
      <hr className="divider" />
    </>
  );
}

export default Trending;
