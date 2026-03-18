// import { useState } from "react";
import { useState, type JSX } from "react";
import "../App.css";
import Svg from "./Svg";
import elephant from "../assets/elephant.png";
import Menu from "./Menu";
import menuOf from "../data/menu-tabs.json";
const prof: string[] = menuOf.profile;
import postsOf from "../data/trending-posts.json";
import type { Post } from "../types/components";
const posts: Post[] = postsOf;
import PostCard from "./PostCard";

function ProfileCard(): JSX.Element {
  //   const [count, setCount] = useState(0);
  const [profile, setProfile] = useState<string>("featured");

  return (
    <>
      <button className="column-back-button">
        <Svg
          className="icon"
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
            className="icon"
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
      <Menu items={prof} active={profile} setActive={setProfile} />
      {profile === "featured" && (
        <div className="profile-card">
          You have not featured anything yet. Did you know that you can feature your hashtags you
          use the most, and even your friend&apos;s accounts on your profile?
        </div>
      )}
      {profile === "posts" && <div className="profile-card">No posts here!</div>}
      {profile === "media" && <div className="profile-card"></div>}
      {profile === "posts and replies" &&
        posts.map((post: Post) => <PostCard key={post.id} post={post} />)}
    </>
  );
}

export default ProfileCard;
