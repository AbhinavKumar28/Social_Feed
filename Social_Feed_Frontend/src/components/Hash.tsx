import { type JSX } from "react";
import "../App.css";
import Svg from "./Svg";
function Hash(): JSX.Element {
  return (
    <>
      <button className="column-header__back-button compact">
        <Svg
          className="icon"
          path="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"
        />
      </button>
      <button>Followed hashtags</button>
      <hr className="divider" />
      <div className="profile-card">
        You have not followed any hashtags yet. When you do, they will show up here.
      </div>
    </>
  );
}

export default Hash;
