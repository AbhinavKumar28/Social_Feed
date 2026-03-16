// import { useState } from "react";
import "../App.css";
import Menu from "./Menu";
// import Content from "./Content";
import mastodonLogo from "../assets/mastodon.png";
import elephant from "../assets/elephant.png";
import Trending from "./Trending";
import aiLogo from "../assets/ai.png";
import { useEffect, useRef, useState, type JSX } from "react";
import TrendingCard from "./TrendingCard";
import type { Leftmenu } from "../types/components";
import Search from "./Search";
import Home from "./Home";
import menuOf from "../data/menu-tabs.json";
const trend: string[] = menuOf.clicked;

function Left({ left }: Leftmenu): JSX.Element {
  //   const [count, setCount] = useState(0);
  const [clicked, setClicked] = useState<"posts" | "hashtags" | "people" | "news">("posts");
  const [profile, setProfile] = useState<"Featured" | "Posts" | "Replies" | "Media">("Featured");
  const [notify, setNotify] = useState<"All" | "Mentions">("All");
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const maxChars = 500;
  const [text, setText] = useState("");
  const remaining = maxChars - text.length;
  const invalid = remaining < 0;
  useEffect(() => {
    const el = inputRef.current;
    if (!el) return;

    el.addEventListener("input", () => {
      el.style.height = "74px";
      el.style.height = el.scrollHeight + "px";
    });
  });

  return (
    <>
      {left === "trending" && (
        <>
          <Trending />
          <Search />
          <Menu clicked={clicked} setClicked={setClicked} />
          <TrendingCard clicked={clicked} />
        </>
      )}
      {left === "profile" && (
        <>
          <button className="column-back-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              className="icon"
            >
              <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"></path>
            </svg>
            <span>Back</span>
          </button>
          <div className="elephant-container">
            <img className="elephant-image" src={elephant} />
          </div>
          <div className="edit-profile">
            <button>Edit profile</button>
            <button className="icon-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                className="icon"
              >
                <path d="M680-80q-50 0-85-35t-35-85q0-6 3-28L282-392q-16 15-37 23.5t-45 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q24 0 45 8.5t37 23.5l281-164q-2-7-2.5-13.5T560-760q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-24 0-45-8.5T598-672L317-508q2 7 2.5 13.5t.5 14.5q0 8-.5 14.5T317-452l281 164q16-15 37-23.5t45-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T720-200q0-17-11.5-28.5T680-240q-17 0-28.5 11.5T640-200q0 17 11.5 28.5T680-160ZM200-440q17 0 28.5-11.5T240-480q0-17-11.5-28.5T200-520q-17 0-28.5 11.5T160-480q0 17 11.5 28.5T200-440Zm480-280q17 0 28.5-11.5T720-760q0-17-11.5-28.5T680-800q-17 0-28.5 11.5T640-760q0 17 11.5 28.5T680-720Zm0 520ZM200-480Zm480-280Z"></path>
              </svg>
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
              <a
                className={profile === "Posts" ? "active" : ""}
                onClick={() => setProfile("Posts")}
              >
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
              <a
                className={profile === "Media" ? "active" : ""}
                onClick={() => setProfile("Media")}
              >
                Media
              </a>
            </div>
          </div>
          {profile === "Featured" && (
            <>
              <div className="profile-card">
                You have not featured anything yet. Did you know that you can feature your hashtags
                you use the most, and even your friend&apos;s accounts on your profile?
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
      )}

      {left === "new_posts" && (
        <>
          <div>
            <button className="column-header__back-button compact" aria-label="Back" type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                className="icon icon-chevron-left column-back-button__icon"
              >
                <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"></path>
              </svg>
            </button>
            <span>New Post</span>
          </div>
          <div className="pady-name center-align">
            <img src={mastodonLogo} className="trending-image" alt="" />
            <div>
              <div>ak_57</div>
              <div className="gray-text">@ak_57</div>
            </div>
          </div>
          <div className="post-border">
            <div className="post-card">
              <button className="dropdown-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                  className="icon icon-globe"
                >
                  <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-40-82v-78q-33 0-56.5-23.5T360-320v-40L168-552q-3 18-5.5 36t-2.5 36q0 121 79.5 212T440-162Zm276-102q41-45 62.5-100.5T800-480q0-98-54.5-179T600-776v16q0 33-23.5 56.5T520-680h-80v80q0 17-11.5 28.5T400-560h-80v80h240q17 0 28.5 11.5T600-440v120h40q26 0 47 15.5t29 40.5Z"></path>
                </svg>
                <span className="dropdown-button__label">Public, quotes allowed</span>
              </button>
              <button className="dropdown-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                  className="icon icon-globe"
                >
                  <path d="m476-80 182-480h84L924-80h-84l-43-122H603L560-80h-84ZM160-200l-56-56 202-202q-35-35-63.5-80T190-640h84q20 39 40 68t48 58q33-33 68.5-92.5T484-720H40v-80h280v-80h80v80h280v80H564q-21 72-63 148t-83 116l96 98-30 82-122-125-202 201Zm468-72h144l-72-204-72 204Z"></path>
                </svg>
                <span className="dropdown-button__label">English</span>
              </button>
            </div>
            <div>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                ref={inputRef}
                className="newpost-textarea"
                placeholder="What's on your mind?"
              ></textarea>
            </div>
            <div className="compose-form__upload-button">
              <div>
                <button className="compose-form__upload-button-icon icon-button inverted">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 -960 960 960"
                    width="20"
                    className="icon-globe"
                  >
                    <path d="M360-384h384L618-552l-90 120-66-88-102 136Zm-48 144q-29.7 0-50.85-21.15Q240-282.3 240-312v-480q0-29.7 21.15-50.85Q282.3-864 312-864h480q29.7 0 50.85 21.15Q864-821.7 864-792v480q0 29.7-21.15 50.85Q821.7-240 792-240H312Zm0-72h480v-480H312v480ZM168-96q-29.7 0-50.85-21.15Q96-138.3 96-168v-552h72v552h552v72H168Zm144-696v480-480Z"></path>
                  </svg>
                </button>
                <button className="compose-form__poll-button-icon  icon-button inverted">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 -960 960 960"
                    width="20"
                    className="icon icon-globe"
                  >
                    <path d="M96-144v-72h768v72H96Zm48-120v-264h96v264h-96Zm192 0v-456h96v456h-96Zm192 0v-336h96v336h-96Zm192 0v-552h96v552h-96Z"></path>
                  </svg>
                </button>
                <button className="icon-button inverted">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 -960 960 960"
                    width="20"
                    className="icon icon-globe"
                  >
                    <path d="m48-144 432-720 432 720H48Zm127-72h610L480-724 175-216Zm304.79-48q15.21 0 25.71-10.29t10.5-25.5q0-15.21-10.29-25.71t-25.5-10.5q-15.21 0-25.71 10.29t-10.5 25.5q0 15.21 10.29 25.71t25.5 10.5ZM444-384h72v-192h-72v192Zm36-86Z"></path>
                  </svg>
                </button>
                <button className="icon-button inverted">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 -960 960 960"
                    width="20"
                    className="icon icon-globe"
                  >
                    <path d="M612-516q25 0 42.5-17.5T672-576q0-25-17.5-42.5T612-636q-25 0-42.5 17.5T552-576q0 25 17.5 42.5T612-516Zm-264 0q25 0 42.5-17.5T408-576q0-25-17.5-42.5T348-636q-25 0-42.5 17.5T288-576q0 25 17.5 42.5T348-516Zm132 228q60 0 110.5-31t79.5-84H290q29 53 79.5 84T480-288Zm.28 192Q401-96 331-126t-122.5-82.5Q156-261 126-330.96t-30-149.5Q96-560 126-629.5q30-69.5 82.5-122T330.96-834q69.96-30 149.5-30t149.04 30q69.5 30 122 82.5T834-629.28q30 69.73 30 149Q864-401 834-331t-82.5 122.5Q699-156 629.28-126q-69.73 30-149 30ZM480-480Zm0 312q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Z"></path>
                  </svg>
                </button>
              </div>
              <div>
                <span className={`post-500 ${remaining < 0 ? "red" : "black"}`}>{remaining}</span>
                <button disabled={invalid} className="posts-btn">
                  POST
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      {left === "home" && (
        <>
          <Home />
          <TrendingCard clicked={clicked} />
        </>
      )}
      {left === "notification" && (
        <>
          <button className="column-header__title" type="button" id="skip-link-target-content-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              className="icon icon-bell column-header__icon"
            >
              <path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160ZM480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80Z"></path>
            </svg>
            Notifications
          </button>
          <hr className="divider" />
          <div className="border-bottom">
            <div className="menu-items">
              <a className={notify === "All" ? "active" : ""} onClick={() => setNotify("All")}>
                All
              </a>
            </div>
            <div className="menu-items">
              <a
                className={notify === "Mentions" ? "active" : ""}
                onClick={() => setNotify("Mentions")}
              >
                Mentions
              </a>
            </div>
          </div>
          {notify === "All" && (
            <>
              <div className="profile-card">
                You don&apos;t have any notifications yet. When other people interact with you, you
                will see it here.
              </div>
            </>
          )}
          {notify === "Mentions" && (
            <>
              <div className="profile-card">
                You don&apos;t have any notifications yet. When other people interact with you, you
                will see it here.
              </div>
            </>
          )}
        </>
      )}
      {left === "lists" && (
        <>
          <div className="list-header">
            <button className="column-header__title">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                className="icon icon-list-ul column-header__icon"
              >
                <path d="M320-280q17 0 28.5-11.5T360-320q0-17-11.5-28.5T320-360q-17 0-28.5 11.5T280-320q0 17 11.5 28.5T320-280Zm0-160q17 0 28.5-11.5T360-480q0-17-11.5-28.5T320-520q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440Zm0-160q17 0 28.5-11.5T360-640q0-17-11.5-28.5T320-680q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Zm120 320h240v-80H440v80Zm0-160h240v-80H440v80Zm0-160h240v-80H440v80ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"></path>
              </svg>
              Lists
            </button>
            <div className="column-header__buttons">
              <a className="column-header__button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                  className="icon icon-globe"
                >
                  <path
                    fill="black"
                    d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <hr className="divider" />
          <div className="profile-card">
            No lists yet.<br></br>
            Create a new list to organise your Home feed
          </div>
        </>
      )}
      {left === "hashtags" && (
        <>
          <button className="column-header__back-button compact">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              className="icon icon-chevron-left column-back-button__icon"
            >
              <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"></path>
            </svg>
          </button>
          <button>Followed hashtags</button>
          <hr className="divider" />
          <div className="profile-card">
            You have not followed any hashtags yet. When you do, they will show up here.
          </div>
        </>
      )}
      {left === "favourites" && (
        <>
          <button className="column-header__title">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              className="icon icon-star column-header__icon"
            >
              <path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"></path>
            </svg>
            Favourites
          </button>
          <hr className="divider" />
          <div className="profile-card">
            You don&apos;t have any favourite posts yet. When you favourite one, it will show up
            here.
          </div>
        </>
      )}
      {left === "bookmarks" && (
        <>
          <button className="column-header__title">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              className="icon icon-bookmarks column-header__icon"
            >
              <path d="M160-80v-560q0-33 23.5-56.5T240-720h320q33 0 56.5 23.5T640-640v560L400-200 160-80Zm560-160v-560H280v-80h440q33 0 56.5 23.5T800-800v560h-80Z"></path>
            </svg>
            Bookmarks
          </button>
          <hr className="divider" />
          <div className="profile-card">
            You don&apos;t have any bookmarked posts yet. When you bookmark one, it will show up
            here.
          </div>
        </>
      )}
      {left === "private" && (
        <>
          <button className="column-header__title">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              className="icon icon-at column-header__icon"
            >
              <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480v58q0 59-40.5 100.5T740-280q-35 0-66-15t-52-43q-29 29-65.5 43.5T480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480v58q0 26 17 44t43 18q26 0 43-18t17-44v-58q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93h200v80H480Zm0-280q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z"></path>
            </svg>
            Private mentions
          </button>
          <hr className="divider" />
          <div>
            Posts on Mastodon are not end-to-end encrypted. Do not share any sensitive information
            over Mastodon. <span>Learn more</span>
          </div>
          <div className="profile-card">
            You don&apos;t have any private mentions yet. When you send or receive one, it will show
            up here.
          </div>
        </>
      )}
    </>
  );
}

export default Left;
