import React from "react";
export type clicked = "posts" | "hashtags" | "people" | "news";
export type MenuProps = {
  clicked: clicked;
  setClicked: React.Dispatch<React.SetStateAction<clicked>>;
};
export type Clicked = {
  clicked: clicked;
};
export type left =
  | "favourites"
  | "bookmarks"
  | "private"
  | "new_posts"
  | "hashtags"
  | "trending"
  | "profile"
  | "home"
  | "lists"
  | "notification";
export type Leftmenu = {
  left: left;
};
export type Rightmenu = {
  left: left;
  setLeft: React.Dispatch<React.SetStateAction<left>>;
};
