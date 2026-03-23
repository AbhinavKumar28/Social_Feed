// import { useState } from "react";
import type { JSX } from "react";
import "../App.css";
import Left from "./LeftBar";
import Right from "./RightBar";
import type { Rightmenu } from "../types/components";

function MainComponent({ left, setLeft }: Rightmenu): JSX.Element {
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
