import { useState } from "react";
import type { JSX } from "react";
import "../App.css";
import Left from "./LeftBar";
import Right from "./RightBar";

function MainComponent(): JSX.Element {
  //   const [count, setCount] = useState(0);
  const [left, setLeft] = useState<"new_posts" | "trending">("trending");

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
