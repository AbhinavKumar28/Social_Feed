import React from "react";
export type MenuProps = {
  items: string[];
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
};
export type Clicked = {
  clicked: string;
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
export type Post = {
  id: number;
  author: { name: string; handle: string; avatar: string };
  content: string;
  images: string[];
  hashtags: string[];
  stats: { replies: number; boosts: number; favourites: number };
  timestamp: string;
};
export type Hashtag = {
  id: number;
  hashtag: string;
  people: number;
  days: number;
};
export type People = {
  id: number;
  popular: string;
  name: string;
  handle: string;
  avatar: string;
  follow: boolean;
};
export type News = {
  id: number;
  source: string;
  time: string;
  title: string;
  author: string;
  posts: number;
  image: string;
};
export type SvgProps = {
  className: string;
  path: string;
};
