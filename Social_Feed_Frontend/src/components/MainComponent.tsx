// import { useState } from "react";
import type { JSX } from "react";
import "../App.css";
import Left from "./LeftBar";
import Right from "./RightBar";

function MainComponent(): JSX.Element {
  //   const [count, setCount] = useState(0);

  return (
    <>
      <div className="top-container">
        <div>
          <Left />
        </div>
        <div className="right-width">
          <Right />
        </div>
      </div>
    </>
  );
}

export default MainComponent;
