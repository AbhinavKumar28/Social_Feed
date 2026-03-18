import type { JSX } from "react";
import "../App.css";
import type { Clicked, Hashtag, News, People, Post } from "../types/components";
import PostCard from "./PostCard";
import postsOf from "../data/trending-posts.json";
const posts: Post[] = postsOf;
import hashtagsOf from "../data/trending-hashtags.json";
import HashtagCard from "./HashtagCard";
const hashtags: Hashtag[] = hashtagsOf;
import peopleOf from "../data/trending-people.json";
import PeopleCard from "./PeopleCard";
const persons: People[] = peopleOf;
import newsOf from "../data/trending-news.json";
import NewsCard from "./NewsCard";
const newspaper: News[] = newsOf;

function TrendingCard({ clicked }: Clicked): JSX.Element {
  //   const [count, setCount] = useState(0);
  return (
    <>
      {clicked === "posts" && posts.map((post: Post) => <PostCard key={post.id} post={post} />)}
      {clicked === "hashtags" &&
        hashtags.map((hashtag: Hashtag) => <HashtagCard key={hashtag.id} hashtag={hashtag} />)}
      {clicked === "people" &&
        persons.map((people: People) => <PeopleCard key={people.id} people={people} />)}

      {clicked === "news" && newspaper.map((news: News) => <NewsCard key={news.id} news={news} />)}
    </>
  );
}

export default TrendingCard;
