import { type JSX } from "react";
import "../App.css";
import Right from "./RightBar";
import { Outlet } from "react-router-dom";
function MainComponent(): JSX.Element {
  return (
    <>
      <div className="top-container">
        <div>
          <Outlet />
        </div>
        <div className="right-width">
          <Right />
        </div>
      </div>
    </>
  );
}

export default MainComponent;
