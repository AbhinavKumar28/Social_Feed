// import { useState } from "react";
import { type JSX } from "react";
import "../App.css";
import Svg from "./Svg";
function Bookmarks(): JSX.Element {
  return (
    <>
      <button className="column-header__title">
        <Svg
          className="icon"
          path="M160-80v-560q0-33 23.5-56.5T240-720h320q33 0 56.5 23.5T640-640v560L400-200 160-80Zm560-160v-560H280v-80h440q33 0 56.5 23.5T800-800v560h-80Z"
        />
        Bookmarks
      </button>
      <hr className="divider" />
      <div className="profile-card">
        You don&apos;t have any bookmarked posts yet. When you bookmark one, it will show up here.
      </div>
    </>
  );
}

export default Bookmarks;
