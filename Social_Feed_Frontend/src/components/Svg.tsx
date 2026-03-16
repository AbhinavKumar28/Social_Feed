import type { JSX } from "react";
import "../App.css";
function Svg({ classname, path }: { classname: string; path: string }): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
      className={classname}
    >
      <path d={path}></path>
    </svg>
  );
}
export default Svg;
