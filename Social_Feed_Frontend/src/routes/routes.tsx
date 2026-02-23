import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { type JSX } from "react";
import MainComponent from "../components/MainComponent";

function Rout(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/:id" element={<MainComponent />} />
      </Routes>
    </Router>
  );
}
export default Rout;
