import { type JSX } from "react";
import "../App.css";
import Svg from "./Svg";
import type { Post } from "../types/components";
function ActionBar({ post }: { post: Post }): JSX.Element {
  return (
    <div className="trending-options-buttons">
      <div className="status-action-bar">
        <button className="status__action-bar__button icon-button icon-button--with-counter">
          <Svg
            className="icon icon-reply"
            path="M760-200v-160q0-50-35-85t-85-35H273l144 144-57 56-240-240 240-240 57 56-144 144h367q83 0 141.5 58.5T840-360v160h-80Z"
          />
          <span className="icon-button__counter">
            <span className="animated-number">
              <span>
                <span>{post.stats.replies}</span>
              </span>
            </span>
          </span>
        </button>
      </div>
      <div className="status-action-bar">
        <button className="status__action-bar__button icon-button icon-button--with-counter">
          <Svg
            className="icon icon-retweet"
            path="M280-80 120-240l160-160 56 58-62 62h406v-160h80v240H274l62 62-56 58Zm-80-440v-240h486l-62-62 56-58 160 160-160 160-56-58 62-62H280v160h-80Z"
          />
          <span className="icon-button__counter">
            <span className="animated-number">
              <span>
                <span>{post.stats.boosts}</span>
              </span>
            </span>
          </span>
        </button>
      </div>
      <div className="status-action-bar">
        <button className="status__action-bar__button star-icon icon-button deactivate icon-button--with-counter">
          <Svg
            className="icon icon-star"
            path="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"
          />
          <span className="icon-button__counter">
            <span className="animated-number">
              <span>
                <span>{post.stats.favourites}</span>
              </span>
            </span>
          </span>
        </button>
      </div>
      <div className="status-action-bar">
        <button className="status__action-bar__button bookmark-icon icon-button">
          <Svg
            className="icon icon-bookmark"
            path="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z"
          />
        </button>
      </div>
      <div className="status-action">
        <button className="status__action-bar__button icon-button">
          <Svg
            className="icon icon-ellipsis-h"
            path="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z"
          />
        </button>
      </div>
    </div>
  );
}

export default ActionBar;
