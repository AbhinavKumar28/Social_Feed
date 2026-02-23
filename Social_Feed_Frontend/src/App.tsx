// import { useState } from "react";
import "./App.css";
import type { JSX } from "react";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";

function App(): JSX.Element {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="top-container">
        <div>
          <LeftBar />
        </div>
        <div>
          <RightBar />
        </div>
      </div>
    </>
  );
}

export default App;
