// import { useState } from "react";
import "../App.css";

function Search() {
//   const [count, setCount] = useState(0);

  return (
    <>
    <div className="pady">
      <div className="border">
        <a className="search-icon" href="https://www.flaticon.com/free-icons/seo" title="seo icons">
          <img
    src="../assets/search.png"
    
    width="20"
  />
        </a>
        <span>Search or paste URL</span>
      </div>
    </div>
    </>
  );
}

export default Search;
