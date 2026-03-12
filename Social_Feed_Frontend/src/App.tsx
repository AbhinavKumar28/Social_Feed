// import { useState } from "react";
import "./App.css";
import type { JSX } from "react";
import MainComponent from "./components/MainComponent";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App(): JSX.Element {
  // const [count, setCount] = useState(0);

  return (
    <>
      {/* <Router>
        <Routes>
          <Route 
            path= 
          />

          
        </Routes>
      </Router> */}
      <MainComponent />
    </>
  );
}

export default App;
