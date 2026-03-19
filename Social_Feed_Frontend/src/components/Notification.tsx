import { useState, type JSX } from "react";
import "../App.css";
import menuOf from "../data/menu-tabs.json";
const prof: string[] = menuOf.notification;

import Svg from "./Svg";
import Menu from "./Menu";
function Notification(): JSX.Element {
  //   const [count, setCount] = useState(0);
  const [notify, setNotify] = useState<string>("all");

  return (
    <>
      <button className="column-header__title" type="button" id="skip-link-target-content-1">
        <Svg
          className="icon"
          path="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160ZM480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80Z"
        />
        Notifications
      </button>
      <hr className="divider" />
      <Menu items={prof} active={notify} setActive={setNotify} />
      {notify === "all" && (
        <>
          <div className="profile-card">
            You don&apos;t have any notifications yet. When other people interact with you, you will
            see it here.
          </div>
        </>
      )}
      {notify === "mention" && (
        <>
          <div className="profile-card">
            You don&apos;t have any notifications yet. When other people interact with you, you will
            see it here.
          </div>
        </>
      )}
    </>
  );
}

export default Notification;
