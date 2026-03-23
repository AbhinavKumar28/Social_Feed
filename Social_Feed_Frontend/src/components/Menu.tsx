import { type JSX } from "react";
import "../App.css";
import type { MenuProps } from "../types/components";
function Menu({ items, active, setActive }: MenuProps): JSX.Element {
  return (
    <div className="border-bottom">
      {items.map((item: string, index: number) => (
        <div key={index} className="menu-items">
          <a className={active === item ? "active" : ""} onClick={() => setActive(item)}>
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </a>
        </div>
      ))}
    </div>
  );
}

export default Menu;
