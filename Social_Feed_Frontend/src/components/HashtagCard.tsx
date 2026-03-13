import type { JSX } from "react";
import type { Hashtag } from "../types/components";
import "../App.css";
function HashtagCard({ hashtag }: { hashtag: Hashtag }): JSX.Element {
  return (
    <div className="pad-bor">
      <div className="bold">#{hashtag.hashtag}</div>
      <div>
        {hashtag.people} people in the past {hashtag.days} days
      </div>
    </div>
  );
}
export default HashtagCard;
