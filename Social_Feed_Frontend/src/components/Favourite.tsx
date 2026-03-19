import { type JSX } from "react";
import "../App.css";
import Svg from "./Svg";
function Favourites(): JSX.Element {
  return (
    <>
      <button className="column-header__title">
        <Svg
          className="icon"
          path="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
        />
        Favourites
      </button>
      <hr className="divider" />
      <div className="profile-card">
        You don&apos;t have any favourite posts yet. When you favourite one, it will show up here.
      </div>
    </>
  );
}

export default Favourites;
