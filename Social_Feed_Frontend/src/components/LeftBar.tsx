// import { useState } from "react";
import "../App.css";
import Menu from "./Menu";
// import Content from "./Content";
import Trending from "./Trending";
import { useEffect, useRef, useState, type JSX } from "react";
import TrendingCard from "./TrendingCard";
import type { Leftmenu } from "../types/components";
import Search from "./Search";
import Home from "./Home";
import menuOf from "../data/menu-tabs.json";
import ProfileCard from "./ProfileCard";
import NewPost from "./NewPost";
import Notification from "./Notification";
import Lists from "./Lists";
import Hash from "./Hash";
import Favourites from "./Favourite";
import Bookmarks from "./Bookmarks";
import Privates from "./Private";
const trend: string[] = menuOf.clicked;

function Left({ left }: Leftmenu): JSX.Element {
  //   const [count, setCount] = useState(0);
  const [clicked, setClicked] = useState<string>("posts");
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
      {left === "trending" && (
        <>
          <Trending />
          <Search />
          <Menu items={trend} active={clicked} setActive={setClicked} />
          <TrendingCard clicked={clicked} />
        </>
      )}
      {left === "profile" && <ProfileCard />}

      {left === "new_posts" && <NewPost />}
      {left === "home" && (
        <>
          <Home />
          <TrendingCard clicked={clicked} />
        </>
      )}
      {left === "notification" && <Notification />}
      {left === "lists" && <Lists />}
      {left === "hashtags" && <Hash />}
      {left === "favourites" && <Favourites />}
      {left === "bookmarks" && <Bookmarks />}
      {left === "private" && <Privates />}
    </>
  );
}

export default Left;
