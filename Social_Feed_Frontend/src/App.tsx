import { useState } from "react";
import "./App.css";
import type { JSX } from "react";
// import MainComponent from "./components/MainComponent";
import Rout from "./routes/routes";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App(): JSX.Element {
  // const [count, setCount] = useState(0);
  const [left, setLeft] = useState<
    | "favourites"
    | "bookmarks"
    | "private"
    | "new_posts"
    | "trending"
    | "hashtags"
    | "profile"
    | "home"
    | "notification"
    | "lists"
  >("trending");

  return (
    <>
      {/* <Router>
        <Routes>
          <Route 
            path= 
          />

          
        </Routes>
      </Router> */}
      <Rout left={left} setLeft={setLeft} />
    </>
  );
}

export default App;
