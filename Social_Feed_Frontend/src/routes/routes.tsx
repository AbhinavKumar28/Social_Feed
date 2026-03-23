import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { type JSX } from "react";
import MainComponent from "../components/MainComponent";
import type { Rightmenu } from "../types/components";

function Rout({ left, setLeft }: Rightmenu): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/:section" element={<MainComponent left={left} setLeft={setLeft} />} />
        <Route path="/" element={<MainComponent left={left} setLeft={setLeft} />} />
      </Routes>
    </Router>
  );
}
export default Rout;
