import React from "react";

export default function Card({ cityName, cityText, imgLink, url }) {
  return (
    <div className="col-lg-4 col-md-6 col-10 ">
      <div className="card tour_card my-3 ">
        <div className="card-body">
          <img className="card-img-top" src={imgLink} alt="Heading" />
          <div className="row my-2">
            <div className="col-12 card_item">
              <h5 className="card-title">{cityName}</h5>
              <p className="card-text"> {cityText}</p>
            </div>
          </div>
          <div className="row ">
            <div className="col-12 card_button card-footer ">
              <a href={url} className="btn btn-primary my-card-btn ">
                Read more..
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
