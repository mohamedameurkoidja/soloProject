import React, { useState } from "react";
const Search = (props) => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <input
        className="form__input"
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search"
      />

      <button
        onClick={() => props.getBook(search)}
        class="button-90"
        role="button"
      >
        Search
      </button>
    </div>
  );
};
export default Search;
