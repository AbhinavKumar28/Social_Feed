import type { JSX } from "react";
import type { Post } from "../types/components";
import "../App.css";
import Svg from "./Svg";
import ActionBar from "./ActionBar";
function PostCard({ post }: { post: Post }): JSX.Element {
  return (
    <div className="pady-trending-card">
      <div className=" center-align">
        <img src={post.author.avatar} className="trending-image" alt="" />
        <div>
          <div>{post.author.name}</div>
          <div className="gray-text">{post.author.handle}</div>
        </div>
        <a className="status__relative-time time">
          <span className="status__visibility-icon">
            <Svg
              size="14"
              className="icon icon-globe"
              path="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-40-82v-78q-33 0-56.5-23.5T360-320v-40L168-552q-3 18-5.5 36t-2.5 36q0 121 79.5 212T440-162Zm276-102q41-45 62.5-100.5T800-480q0-98-54.5-179T600-776v16q0 33-23.5 56.5T520-680h-80v80q0 17-11.5 28.5T400-560h-80v80h240q17 0 28.5 11.5T600-440v120h40q26 0 47 15.5t29 40.5Z"
            />
          </span>
          <time>{post.timestamp}</time>
        </a>
      </div>
      <div>{post.content}</div>
      <div>
        {post.images.length > 0 &&
          post.images.map((image, index) => (
            <img key={index} src={image} className="full-content-image" />
          ))}
      </div>
      <div>
        {post.hashtags.map((hashtag, index) => (
          <button key={index} className="hashtag-buttons">
            {hashtag}
          </button>
        ))}
      </div>
      <ActionBar post={post} />
    </div>
  );
}
export default PostCard;
