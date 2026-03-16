// import { useState } from "react";
import { useState, type JSX } from "react";
import "../App.css";
import mastodonLogo from "../assets/mastodon.png";
import aiLogo from "../assets/ai.png";
import Svg from "./Svg";
import elephant from "../assets/elephant.png";
function ProfileCard(): JSX.Element {
  //   const [count, setCount] = useState(0);
  const [profile, setProfile] = useState<"Featured" | "Posts" | "Replies" | "Media">("Featured");

  return (
    <>
      <button className="column-back-button">
        <Svg
          classname="icon"
          path="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"
        />
        <span>Back</span>
      </button>
      <div className="elephant-container">
        <img className="elephant-image" src={elephant} />
      </div>
      <div className="edit-profile">
        <button>Edit profile</button>
        <button className="icon-button">
          <Svg
            classname="icon"
            path="M680-80q-50 0-85-35t-35-85q0-6 3-28L282-392q-16 15-37 23.5t-45 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q24 0 45 8.5t37 23.5l281-164q-2-7-2.5-13.5T560-760q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-24 0-45-8.5T598-672L317-508q2 7 2.5 13.5t.5 14.5q0 8-.5 14.5T317-452l281 164q16-15 37-23.5t45-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T720-200q0-17-11.5-28.5T680-240q-17 0-28.5 11.5T640-200q0 17 11.5 28.5T680-160ZM200-440q17 0 28.5-11.5T240-480q0-17-11.5-28.5T200-520q-17 0-28.5 11.5T160-480q0 17 11.5 28.5T200-440Zm480-280q17 0 28.5-11.5T720-760q0-17-11.5-28.5T680-800q-17 0-28.5 11.5T640-760q0 17 11.5 28.5T680-720Zm0 520ZM200-480Zm480-280Z"
          />
        </button>
      </div>
      <div className="pady-name center-align">
        <div>
          <div className="bold">ak_57</div>
          <div className="one-line">
            <div className="gray-text">@ak_57</div>
            <div className="mastodon">mastodon social</div>
          </div>
        </div>
      </div>
      <div className="joined">
        <div>JOINED</div>
        <div>18 Feb 2026</div>
      </div>
      <div className="follow">
        <div>1 post</div>
        <div>2 following</div>
        <div>0 followers</div>
      </div>
      <hr />
      <div className="border-bottom">
        <div className="menu-items">
          <a
            className={profile === "Featured" ? "active" : ""}
            onClick={() => setProfile("Featured")}
          >
            Featured
          </a>
        </div>
        <div className="menu-items">
          <a className={profile === "Posts" ? "active" : ""} onClick={() => setProfile("Posts")}>
            Posts
          </a>
        </div>
        <div className="menu-items">
          <a
            className={profile === "Replies" ? "active" : ""}
            onClick={() => setProfile("Replies")}
          >
            Posts and replies
          </a>
        </div>
        <div className="menu-items">
          <a className={profile === "Media" ? "active" : ""} onClick={() => setProfile("Media")}>
            Media
          </a>
        </div>
      </div>
      {profile === "Featured" && (
        <>
          <div className="profile-card">
            You have not featured anything yet. Did you know that you can feature your hashtags you
            use the most, and even your friend&apos;s accounts on your profile?
          </div>
        </>
      )}
      {profile === "Posts" && (
        <>
          <div className="profile-card">No posts here!</div>
        </>
      )}
      {profile === "Media" && (
        <>
          <div className="profile-card"></div>
        </>
      )}
      {profile === "Replies" && (
        <>
          <div className="pady-trending-card">
            <div className=" center-align">
              <img src={mastodonLogo} className="trending-image" />
              <div>
                <div>Mr.Mark &quot;The Sharpie King&quot;</div>
                <div className="gray-text">@markmetz@sfba.social</div>
              </div>
              <a className="time" href="/@markmetz@sfba.social/116118453546273307">
                <span className="status__visibility-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="14"
                    viewBox="0 -960 960 960"
                    width="14"
                    className="icon icon-globe"
                  >
                    <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-40-82v-78q-33 0-56.5-23.5T360-320v-40L168-552q-3 18-5.5 36t-2.5 36q0 121 79.5 212T440-162Zm276-102q41-45 62.5-100.5T800-480q0-98-54.5-179T600-776v16q0 33-23.5 56.5T520-680h-80v80q0 17-11.5 28.5T400-560h-80v80h240q17 0 28.5 11.5T600-440v120h40q26 0 47 15.5t29 40.5Z"></path>
                  </svg>
                </span>
                <time>4h</time>
              </a>
            </div>
            <div>
              To hell with AI, more innovation like this please.
              <span className="hashtag-content">#solarpunk</span>
            </div>
            <div>
              <img src={aiLogo} alt="" className="full-content-image" />
            </div>
            <div>
              <button className="hashtag-buttons">#Solarpunk</button>
              <button className="hashtag-buttons">#Housing</button>
              <button className="hashtag-buttons">#HumanRights</button>
            </div>
            <div className="trending-options-buttons">
              <div className="status-action-bar">
                <button className="status__action-bar__button icon-button icon-button--with-counter">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                    className="icon"
                  >
                    <path d="M760-200v-160q0-50-35-85t-85-35H273l144 144-57 56-240-240 240-240 57 56-144 144h367q83 0 141.5 58.5T840-360v160h-80Z"></path>
                  </svg>
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
                <button className="status__action-bar__button icon-button icon-button--with-counter">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                    className="icon icon-retweet"
                  >
                    <path d="M280-80 120-240l160-160 56 58-62 62h406v-160h80v240H274l62 62-56 58Zm-80-440v-240h486l-62-62 56-58 160 160-160 160-56-58 62-62H280v160h-80Z"></path>
                  </svg>
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
                <button className="status__action-bar__button star-icon icon-button deactivate icon-button--with-counter">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                    className="icon icon-star"
                  >
                    <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"></path>
                  </svg>
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
                <button className="status__action-bar__button bookmark-icon icon-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                    className="icon icon-bookmark"
                  >
                    <path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z"></path>
                  </svg>
                </button>
              </div>
              <div className="status-action">
                <button className="status__action-bar__button icon-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                    className="icon icon-ellipsis-h"
                    aria-hidden="true"
                  >
                    <path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ProfileCard;
