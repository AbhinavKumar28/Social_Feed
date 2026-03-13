import type { JSX } from "react";
import type { People } from "../types/components";
import "../App.css";
function PeopleCard({ people }: { people: People }): JSX.Element {
  return (
    <div className="grid-view">
      <div className="column-one">{people.popular}</div>

      <div className="column-two">
        <img src={people.avatar} className="people-image" alt="" />
      </div>
      <div className="column-one">
        <div>{people.name}</div>
        <div>{people.handle}</div>
      </div>
      <button className="explore-suggestions-card__dismiss-button icon-button column-three">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
          className="icon icon-close"
        >
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"></path>
        </svg>
      </button>

      <button className="column-four">Follow</button>
    </div>
  );
}
export default PeopleCard;
