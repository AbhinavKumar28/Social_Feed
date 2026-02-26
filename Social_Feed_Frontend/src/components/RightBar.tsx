// import { useState } from "react";
import type { JSX } from "react";
import "../App.css";
import type { Rightmenu } from "../types/components";
function Right({ left, setLeft }: Rightmenu): JSX.Element {
  //   const [count, setCount] = useState(0);
  console.log(left);
  return (
    <>
      <div className="right-bar-container-top">
        <div className="sticky">
          <div className="pady-searching">
            <div className="border">
              <a
                className="search-icon"
                href="https://www.flaticon.com/free-icons/seo"
                title="seo icons"
              >
                <img src="../assets/search.png" width="20" />
              </a>
              <span>Search or paste URL</span>
            </div>
          </div>
          <div className="pady-name center-align">
            <img src="../assets/image.png" className="trending-image" alt="" />
            <div>
              <div>ak_57</div>
              <div className="gray-text">@ak_57</div>
            </div>
          </div>
        </div>
        <div className="new-post" onClick={() => setLeft("new_posts")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            className="icon icon-plus column-link__icon"
            aria-hidden="true"
          >
            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path>
          </svg>
          <span className="margin-left">New Post</span>
        </div>
        <a className="column-link column-link--transparent" href="/home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            className="icon icon-home column-link__icon"
            aria-hidden="true"
          >
            <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path>
          </svg>
          <span>Home</span>
        </a>
        <a
          className="column-link column-link--transparent active"
          href="/explore"
          aria-current="page"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            className="icon icon-explore column-link__icon"
            aria-hidden="true"
          >
            <path d="m136-240-56-56 296-298 160 160 208-206H640v-80h240v240h-80v-104L536-320 376-480 136-240Z"></path>
          </svg>
          <span>Trending</span>
        </a>
        <a className="column-link navigate column-link--transparent" href="/notifications">
          <i className="icon-with-badge">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              className="icon icon-bell column-link__icon"
              aria-hidden="true"
            >
              <path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"></path>
            </svg>
          </i>
          <span>Notifications</span>
        </a>
        <hr className="divider" />
        <div className="right-bar-container">
          <a className="column-link lists column-link--transparent" id=":r1:-title" href="/lists">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              className="icon icon-list-ul column-link__icon"
              aria-hidden="true"
            >
              <path d="M320-280q17 0 28.5-11.5T360-320q0-17-11.5-28.5T320-360q-17 0-28.5 11.5T280-320q0 17 11.5 28.5T320-280Zm0-160q17 0 28.5-11.5T360-480q0-17-11.5-28.5T320-520q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440Zm0-160q17 0 28.5-11.5T360-640q0-17-11.5-28.5T320-680q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Zm120 320h240v-80H440v80Zm0-160h240v-80H440v80Zm0-160h240v-80H440v80ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"></path>
            </svg>
            <span>Lists</span>
          </a>
          <a className="column-link column-link--transparent" id=":r2:-title" href="/followed_tags">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              className="icon icon-hashtag column-link__icon"
              aria-hidden="true"
            >
              <path d="m240-160 40-160H120l20-80h160l40-160H180l20-80h160l40-160h80l-40 160h160l40-160h80l-40 160h160l-20 80H660l-40 160h160l-20 80H600l-40 160h-80l40-160H360l-40 160h-80Zm140-240h160l40-160H420l-40 160Z"></path>
            </svg>
            <span>Followed hashtags</span>
          </a>
          <a
            className="column-link column-link--transparent active"
            href="/favourites"
            aria-current="page"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              className="icon icon-star column-link__icon"
              aria-hidden="true"
            >
              <path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"></path>
            </svg>
            <span>Favourites</span>
          </a>
          <a className="column-link column-link--transparent" href="/bookmarks">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              className="icon icon-bookmarks column-link__icon"
              aria-hidden="true"
            >
              <path d="M160-80v-560q0-33 23.5-56.5T240-720h320q33 0 56.5 23.5T640-640v560L400-200 160-80Zm80-121 160-86 160 86v-439H240v439Zm480-39v-560H280v-80h440q33 0 56.5 23.5T800-800v560h-80ZM240-640h320-320Z"></path>
            </svg>
            <span>Bookmarks</span>
          </a>
          <a
            className="column-link navigate column-link--transparent active"
            href="/conversations"
            aria-current="page"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              className="icon icon-at column-link__icon"
              aria-hidden="true"
            >
              <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480v58q0 59-40.5 100.5T740-280q-35 0-66-15t-52-43q-29 29-65.5 43.5T480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480v58q0 26 17 44t43 18q26 0 43-18t17-44v-58q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93h200v80H480Zm0-280q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z"></path>
            </svg>
            <span>Private mentions</span>
          </a>
        </div>
        <hr className="divider" />
        <div className="right-bar-container">
          <a href="/settings/preferences" className="lists column-link column-link--transparent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              className="icon icon-cog column-link__icon"
              aria-hidden="true"
            >
              <path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"></path>
            </svg>
            <span>Preferences</span>
          </a>
          <a
            className="column-link column-link--transparent"
            type="button"
            aria-expanded="false"
            aria-controls=":r3:"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              className="icon icon- column-link__icon"
              aria-hidden="true"
            >
              <path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z"></path>
            </svg>
            <span>More</span>
          </a>
          <a
            className="column-link column-link--transparent active"
            href="/about"
            aria-current="page"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              className="icon icon-ellipsis-h column-link__icon"
              aria-hidden="true"
            >
              <path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path>
            </svg>
            <span>About</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default Right;
