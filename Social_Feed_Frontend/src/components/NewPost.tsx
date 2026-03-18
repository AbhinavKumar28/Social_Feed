// import { useState } from "react";
import { useEffect, useRef, useState, type JSX } from "react";
import "../App.css";
import mastodonLogo from "../assets/mastodon.png";
import Svg from "./Svg";
function NewPost(): JSX.Element {
  //   const [count, setCount] = useState(0);
  const maxChars = 500;
  const [text, setText] = useState("");
  const remaining = maxChars - text.length;
  const invalid = remaining < 0;
  const inputRef = useRef<HTMLTextAreaElement>(null);

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
      <div>
        <button className="column-header__back-button compact" aria-label="Back" type="button">
          <Svg
            className="icon"
            path="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"
          />
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
            <Svg
              className="icon icon-globe"
              path="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-40-82v-78q-33 0-56.5-23.5T360-320v-40L168-552q-3 18-5.5 36t-2.5 36q0 121 79.5 212T440-162Zm276-102q41-45 62.5-100.5T800-480q0-98-54.5-179T600-776v16q0 33-23.5 56.5T520-680h-80v80q0 17-11.5 28.5T400-560h-80v80h240q17 0 28.5 11.5T600-440v120h40q26 0 47 15.5t29 40.5Z"
            />
            <span className="dropdown-button__label">Public, quotes allowed</span>
          </button>
          <button className="dropdown-button">
            <Svg
              className="icon icon-globe"
              path="m476-80 182-480h84L924-80h-84l-43-122H603L560-80h-84ZM160-200l-56-56 202-202q-35-35-63.5-80T190-640h84q20 39 40 68t48 58q33-33 68.5-92.5T484-720H40v-80h280v-80h80v80h280v80H564q-21 72-63 148t-83 116l96 98-30 82-122-125-202 201Zm468-72h144l-72-204-72 204Z"
            />
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
              <Svg
                className="icon-globe"
                path="M360-384h384L618-552l-90 120-66-88-102 136Zm-48 144q-29.7 0-50.85-21.15Q240-282.3 240-312v-480q0-29.7 21.15-50.85Q282.3-864 312-864h480q29.7 0 50.85 21.15Q864-821.7 864-792v480q0 29.7-21.15 50.85Q821.7-240 792-240H312Zm0-72h480v-480H312v480ZM168-96q-29.7 0-50.85-21.15Q96-138.3 96-168v-552h72v552h552v72H168Zm144-696v480-480Z"
              />
            </button>
            <button className="compose-form__poll-button-icon  icon-button inverted">
              <Svg
                className="icon icon-globe"
                path="M96-144v-72h768v72H96Zm48-120v-264h96v264h-96Zm192 0v-456h96v456h-96Zm192 0v-336h96v336h-96Zm192 0v-552h96v552h-96Z"
              />
            </button>
            <button className="icon-button inverted">
              <Svg
                className="icon icon-globe"
                path="m48-144 432-720 432 720H48Zm127-72h610L480-724 175-216Zm304.79-48q15.21 0 25.71-10.29t10.5-25.5q0-15.21-10.29-25.71t-25.5-10.5q-15.21 0-25.71 10.29t-10.5 25.5q0 15.21 10.29 25.71t25.5 10.5ZM444-384h72v-192h-72v192Zm36-86Z"
              />
            </button>
            <button className="icon-button inverted">
              <Svg
                className="icon icon-globe"
                path="M612-516q25 0 42.5-17.5T672-576q0-25-17.5-42.5T612-636q-25 0-42.5 17.5T552-576q0 25 17.5 42.5T612-516Zm-264 0q25 0 42.5-17.5T408-576q0-25-17.5-42.5T348-636q-25 0-42.5 17.5T288-576q0 25 17.5 42.5T348-516Zm132 228q60 0 110.5-31t79.5-84H290q29 53 79.5 84T480-288Zm.28 192Q401-96 331-126t-122.5-82.5Q156-261 126-330.96t-30-149.5Q96-560 126-629.5q30-69.5 82.5-122T330.96-834q69.96-30 149.5-30t149.04 30q69.5 30 122 82.5T834-629.28q30 69.73 30 149Q864-401 834-331t-82.5 122.5Q699-156 629.28-126q-69.73 30-149 30ZM480-480Zm0 312q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Z"
              />
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
  );
}

export default NewPost;
