import React from "react";
import Meanings from "./Meanings";

export default function Response(props) {
  console.log(props.result);
  if (props.result) {
    return (
      <div className="result">
        <h2>{props.result.word}</h2>
        {props.result.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meanings meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
