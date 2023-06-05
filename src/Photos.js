import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-6" key={index}>
                <img
                  src={photo.src.landscape}
                  alt="dictionary"
                  className="img-fluid"
                />
                ;
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
