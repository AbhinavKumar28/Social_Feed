// import { useState } from "react";
import type { JSX } from "react";
import "../App.css";

function Menu(): JSX.Element {
  //   const [count, setCount] = useState(0);

  return (
    <>
      <div className="border-bottom">
        <a href="">Posts</a>
        <a href="">Hashtags</a>
        <a href="">People</a>
        <a href="">News</a>
      </div>
    </>
  );
}

export default Menu;
