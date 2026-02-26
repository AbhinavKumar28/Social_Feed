// import { useState } from "react";
import type { JSX } from "react";
import "../App.css";
import "../assets/image.png";
import type { Clicked } from "../types/components";
function TrendingCard({ clicked }: Clicked): JSX.Element {
  //   const [count, setCount] = useState(0);

  return (
    <>
      {clicked === "posts" && (
        <div className="pady-trending-card">
          <div className=" center-align">
            <img src="../assets/image.png" className="trending-image" alt="" />
            <div>
              <div>Mr.Mark &quot;The Sharpie King&quot;</div>
              <div className="gray-text">@markmetz@sfba.social</div>
            </div>
            <a
              className="status__relative-time time"
              href="/@markmetz@sfba.social/116118453546273307"
            >
              <span className="status__visibility-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="14"
                  viewBox="0 -960 960 960"
                  width="14"
                  className="icon icon-globe"
                  aria-label="Public"
                  role="img"
                >
                  <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-40-82v-78q-33 0-56.5-23.5T360-320v-40L168-552q-3 18-5.5 36t-2.5 36q0 121 79.5 212T440-162Zm276-102q41-45 62.5-100.5T800-480q0-98-54.5-179T600-776v16q0 33-23.5 56.5T520-680h-80v80q0 17-11.5 28.5T400-560h-80v80h240q17 0 28.5 11.5T600-440v120h40q26 0 47 15.5t29 40.5Z"></path>
                </svg>
              </span>
              <time dateTime="2026-02-23T06:09:45.000Z" title="23 Feb 2026, 11:39">
                4h
              </time>
            </a>
          </div>
          <div>
            To hell with AI, more innovation like this please.
            <span className="hashtag-content">#solarpunk</span>
          </div>
          <div>
            <img src="../assets/image_copy.png" alt="" className="full-content-image" />
          </div>
          <div>
            <button className="hashtag-buttons">#Solarpunk</button>
            <button className="hashtag-buttons">#Housing</button>
            <button className="hashtag-buttons">#HumanRights</button>
          </div>
          <div className="trending-options-buttons">
            <div className="status-action-bar">
              <button
                type="button"
                aria-label="Reply"
                aria-hidden="false"
                title="Reply"
                className="status__action-bar__button icon-button icon-button--with-counter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                  className="icon icon-reply"
                  aria-hidden="true"
                >
                  <path d="M760-200v-160q0-50-35-85t-85-35H273l144 144-57 56-240-240 240-240 57 56-144 144h367q83 0 141.5 58.5T840-360v160h-80Z"></path>
                </svg>{" "}
                <span className="icon-button__counter">
                  <span className="animated-number">
                    <span>
                      <span>18</span>
                    </span>
                  </span>
                </span>
              </button>
            </div>
            <div className="status-action-bar">
              <button
                type="button"
                aria-label="Boost or quote"
                aria-hidden="false"
                title="Boost or quote"
                className="status__action-bar__button icon-button icon-button--with-counter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                  className="icon icon-retweet"
                  aria-hidden="true"
                >
                  <path d="M280-80 120-240l160-160 56 58-62 62h406v-160h80v240H274l62 62-56 58Zm-80-440v-240h486l-62-62 56-58 160 160-160 160-56-58 62-62H280v160h-80Z"></path>
                </svg>{" "}
                <span className="icon-button__counter">
                  <span className="animated-number">
                    <span>
                      <span>185</span>
                    </span>
                  </span>
                </span>
              </button>
            </div>
            <div className="status-action-bar">
              <button
                type="button"
                aria-label="Favourite"
                aria-hidden="false"
                title="Favourite"
                className="status__action-bar__button star-icon icon-button deactivate icon-button--with-counter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                  className="icon icon-star"
                  aria-hidden="true"
                >
                  <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"></path>
                </svg>{" "}
                <span className="icon-button__counter">
                  <span className="animated-number">
                    <span>
                      <span>261</span>
                    </span>
                  </span>
                </span>
              </button>
            </div>
            <div className="status-action-bar">
              <button
                type="button"
                aria-label="Bookmark"
                aria-hidden="false"
                title="Bookmark"
                className="status__action-bar__button bookmark-icon icon-button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                  className="icon icon-bookmark"
                  aria-hidden="true"
                >
                  <path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z"></path>
                </svg>{" "}
              </button>
            </div>
            <div className="status-action">
              <button
                type="button"
                aria-label="More"
                aria-hidden="false"
                title="More"
                className="status__action-bar__button icon-button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                  className="icon icon-ellipsis-h"
                  aria-hidden="true"
                >
                  <path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z"></path>
                </svg>{" "}
              </button>
            </div>
          </div>
        </div>
      )}
      {clicked === "hashtags" && (
        <>
          <div className="pad-bor">
            <div className="bold">#SeabirdsABookOrPlay</div>
            <div>83 people in the past 2 days</div>
          </div>
          <div className="pad-bor">
            <div className="bold">#fruitasongorpoem</div>
            <div>134 people in the past 2 days</div>
          </div>
          <div className="pad-bor">
            <div className="bold">#TuneTuesday</div>
            <div>97 people in the past 2 days</div>
          </div>
        </>
      )}
      {clicked === "people" && (
        <>
          <div className="grid-view">
            <div className="column-one">Popular on mastodon.social</div>

            <div className="column-two">
              <img src="../assets/image.png" className="people-image" alt="" />
            </div>
            <div className="column-one">
              <div>Information Is Beautiful</div>
              <div>@infobeautiful@vis.social</div>
            </div>
            <div className="column-three">
              <button
                type="button"
                aria-label="Don't show again"
                aria-hidden="false"
                title="Don't show again"
                className="explore-suggestions-card__dismiss-button icon-button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                  className="icon icon-close"
                  aria-hidden="true"
                >
                  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"></path>
                </svg>{" "}
              </button>
            </div>
            <button className="column-four">Follow</button>
          </div>
        </>
      )}
      {clicked === "news" && (
        <>
          <div className="news-card">
            <div>
              <div>USA TODAY · 2d</div>
              <div>
                Deepak Chopra acknowledges &apos;poor judgment&apos; over emails with Epstein
              </div>
              <div className="posts-news">
                <div>By , USA TODAY</div>
                <div className="margin-left">160 posts</div>
              </div>
            </div>
            <div>
              <img className="news-image" src="../assets/image.png" alt="" />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default TrendingCard;
