import React from "react";

export default function Meanings(props) {
  //console.log(props.meaning);
  return (
    <div className="meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div>
        {props.meaning.definition}
        {props.meaning.example}
      </div>
    </div>
  );
}
