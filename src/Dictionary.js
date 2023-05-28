import React, { useState } from "react";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(" ");
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }
  function handleChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <form onSubmit={search}>
      <span className="search-bar">
        <input
          type="search"
          placeholder="Type a word"
          onChange={handleChange}
        />
        <span className="submit-button">
          <input type="submit" className="btn btn-primary" value="Translate" />
        </span>
      </span>
    </form>
  );
}
