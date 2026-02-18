// import { useState } from "react";
import "../App.css";
import Account from "./Account";
import Items from "./Items";
import Search from "./Search";

function RightBar() {
//   const [count, setCount] = useState(0);

  return (
    <>
    <Search />
    <Account />
    <Items />
    </>
  );
}

export default RightBar;
