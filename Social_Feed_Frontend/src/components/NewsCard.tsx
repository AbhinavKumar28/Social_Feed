import type { JSX } from "react";
import type { News } from "../types/components";
import "../App.css";
function NewsCard({ news }: { news: News }): JSX.Element {
  return (
    <>
      <div className="news-card">
        <div className="news-card-content">
          <div>
            {news.source} · {news.time}
          </div>
          <div>{news.title}</div>
          <div className="posts-news">
            {news.author && <div>By {news.author}</div>}
            <div className="margin-left">{news.posts} posts</div>
          </div>
        </div>
        <div>
          <img className="news-image" src={news.image} alt="" />
        </div>
      </div>
    </>
  );
}
export default NewsCard;
