// import { useState } from "react";
import "../App.css";
import Menu from "./Menu";
import Content from "./Content";
import Search from "./Search";
import Trending from "./Trending";
function LeftBar() {
  //   const [count, setCount] = useState(0);

  return (
    <>
      <Trending />
      <Search />
      <Menu />
      <Content />
    </>
  );
}

export default LeftBar;
