// import { useState } from "react";
import { useEffect, type JSX } from "react";
import "../App.css";
import Left from "./LeftBar";
import Right from "./RightBar";
import type { Rightmenu } from "../types/components";
import { useParams } from "react-router-dom";

function MainComponent({ left, setLeft }: Rightmenu): JSX.Element {
  const { section } = useParams();
  useEffect(() => {
    if (section) {
      setLeft(section);
    }
  }, [section, setLeft]);
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
