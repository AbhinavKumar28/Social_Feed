import { type JSX } from "react";
import "../App.css";
import Svg from "./Svg";
import type { left, NavProps } from "../types/components";
import { useNavigate } from "react-router-dom";

function NavbarLink({ item, className = "icon", path }: NavProps): JSX.Element {
  const navigate = useNavigate();
  const handleMenuChange = (menu: left): undefined => {
    void navigate(`/${menu}`);
  };
  return (
    <a onClick={() => handleMenuChange(item)} className="column-link column-link--transparent">
      <Svg path={path} className={className} />
      <span className="nav-capitalize">{item}</span>
    </a>
  );
}

export default NavbarLink;
