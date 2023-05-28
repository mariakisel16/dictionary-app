import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  let [word, setKeyword] = useState(" ");
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${word}`);
    let apiKey = "b4be794bfoac1c2738445da7t5a6b03f";
    let url = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
    axios.get(url).then(showTranslate);
  }

  function showTranslate(response) {
    console.log(response.data[0]);
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
