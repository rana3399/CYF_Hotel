import React from "react";

export default function Card({ cityName, cityText, imgLink, url }) {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <img className="Header-Img" src={imgLink} alt="Heading" />
          <h5 className="card-title">{cityName}</h5>
          <p className="card-text"> {cityText}</p>
          <a href={url} className="btn btn-primary my-card-btn">
            Read more..
          </a>
        </div>
      </div>
    </div>
  );
}
