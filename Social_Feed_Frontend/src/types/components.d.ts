import React from "react";
export type clicked = "posts" | "hashtags" | "people" | "news";
export type MenuProps = {
  clicked: clicked;
  setClicked: React.Dispatch<React.SetStateAction<clicked>>;
};
export type Clicked = {
  clicked: clicked;
};
