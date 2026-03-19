import { type JSX } from "react";
import "../App.css";
import Svg from "./Svg";
function Lists(): JSX.Element {
  return (
    <>
      <div className="list-header">
        <button className="column-header__title">
          <Svg
            className="icon"
            path="M320-280q17 0 28.5-11.5T360-320q0-17-11.5-28.5T320-360q-17 0-28.5 11.5T280-320q0 17 11.5 28.5T320-280Zm0-160q17 0 28.5-11.5T360-480q0-17-11.5-28.5T320-520q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440Zm0-160q17 0 28.5-11.5T360-640q0-17-11.5-28.5T320-680q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Zm120 320h240v-80H440v80Zm0-160h240v-80H440v80Zm0-160h240v-80H440v80ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"
          />
          Lists
        </button>
        <div className="column-header__buttons">
          <a className="column-header__button">
            <Svg
              className="icon icon-globe"
              path="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"
            />
          </a>
        </div>
      </div>

      <hr className="divider" />
      <div className="profile-card">
        No lists yet.<br></br>
        Create a new list to organise your Home feed
      </div>
    </>
  );
}

export default Lists;
