import type { JSX } from "react";
import "../App.css";
import type { SvgProps } from "../types/components";
function Svg({ className, path, size = "24" }: SvgProps): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      viewBox="0 -960 960 960"
      width={size}
      className={className}
    >
      <path d={path}></path>
    </svg>
  );
}
export default Svg;
