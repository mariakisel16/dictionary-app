import React, { useState } from "react";
import axios from "axios";
import Response from "./Response";
import Photos from "./Photos";

export default function Dictionary() {
  let [word, setKeyword] = useState(" ");
  let [result, setResult] = useState(null);
  let [photos, setPhotos] = useState(null);

  function search(event) {
    event.preventDefault();

    let apiKey = "b4be794bfoac1c2738445da7t5a6b03f";
    let url = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
    axios.get(url).then(showTranslate);

    let sheCodesApiKey = "b4be794bfoac1c2738445da7t5a6b03f";

    let sheCodesApiUrl = `https://api.shecodes.io/images/v1/search?query=${word}&key=${sheCodesApiKey}`;

    axios.get(sheCodesApiUrl).then(handlePexelsResponse);
  }

  function showTranslate(response) {
    setResult(response.data);
  }
  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div>
      <form onSubmit={search}>
        <span className="search-bar">
          <span className="search-line input-group-lg">
            <input
              type="search"
              placeholder="Type a word"
              onChange={handleChange}
            />
          </span>
          <span className="submit-button">
            <input type="submit" className="button" value="Translate" />
          </span>
        </span>
      </form>

      <Response result={result} />
      <Photos photos={photos} />
    </div>
  );
}
