import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useRef, useState, type JSX } from "react";
import MainComponent from "../components/MainComponent";
import type { Post } from "../types/components";
import TrendingCard from "../components/TrendingCard";
import Trending from "../components/Trending";
import Search from "../components/Search";
import Menu from "../components/Menu";
import menuOf from "../data/menu-tabs.json";
import Home from "../components/Home";
import NewPost from "../components/NewPost";
import ProfileCard from "../components/ProfileCard";
const trend: string[] = menuOf.clicked;
import postsOf from "../data/trending-posts.json";
const posts: Post[] = postsOf;
import Notification from "../components/Notification";
import Lists from "../components/Lists";
import Hash from "../components/Hash";
import Favourites from "../components/Favourite";
import Bookmarks from "../components/Bookmarks";
import Privates from "../components/Private";
function Rout(): JSX.Element {
  const [clicked, setClicked] = useState<string>("posts");
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [poststate, setPostState] = useState<Post[]>(posts);
  useEffect(() => {
    const el = inputRef.current;
    if (!el) return;

    el.addEventListener("input", () => {
      el.style.height = "74px";
      el.style.height = el.scrollHeight + "px";
    });
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainComponent />}>
          <Route
            path="trending"
            element={
              <>
                <Trending />
                <Search />
                <Menu items={trend} active={clicked} setActive={setClicked} />
                <TrendingCard clicked={clicked} poststate={poststate} />
              </>
            }
          />
          <Route path="profile" element={<ProfileCard />} />
          <Route path="new_posts" element={<NewPost setPostState={setPostState} />} />
          <Route
            path="home"
            element={
              <>
                <Home />
                <TrendingCard clicked={clicked} poststate={poststate} />
              </>
            }
          />
          <Route path="notification" element={<Notification />} />
          <Route path="lists" element={<Lists />} />
          <Route path="hashtags" element={<Hash />} />
          <Route path="favourites" element={<Favourites />} />
          <Route path="bookmarks" element={<Bookmarks />} />
          <Route path="private" element={<Privates />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default Rout;
