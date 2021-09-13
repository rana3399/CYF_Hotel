import React from "react";

const TouristInfoCard = props => (
  <div>
    <div className="card">
      <div className="card-body">
        <img className="Header-Img" src={props.imgLink} alt="Heading" />
        <h5 className="card-title">{props.cityName}</h5>
        <p className="card-text"> {props.cityText}</p>
        <a href={props.url} className="btn btn-primary my-card-btn">
          Read more..
        </a>
      </div>
    </div>
  </div>
);

const TouristInfoCards = () => {
  return (
    <div className="cards-container">
      <TouristInfoCard
        cityName="Glasgow"
        cityText="Get into the Colosseum, Palatine Hill, and Roman Forum in central Rome through the fast track entrance with a combined package. Enjoy a hassle-free experience at your own pace. Marvel at the remains of some of the greatest monuments of the Roman Republic."
        imgLink="https://images.unsplash.com/photo-1611605877189-b9743c2ef324?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
        url="peoplemakeglasgow.com"
      />
      <TouristInfoCard
        cityName="London"
        cityText=" See the sights of London along the banks of the River Thames on a sightseeing cruise from Westminster Pier to Embankment Pier, Festival Pier, Bankside Pier, and Tower Bridge Quay."
        imgLink="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        url="visitlondon.com"
      />
      <TouristInfoCard
        cityName="Manchester"
        cityText="Enjoy 1 or 2 days full access to Versailles' whole domain, including the palace, Trianon, Marie Antoinette's Estate and gardens. Benefit from an audio guide in the palace. Upgrade and see the famous Musical Gardens or Fountain Show."
        imgLink="https://images.unsplash.com/photo-1515586838455-8f8f940d6853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=684&q=80"
        url="visitmanchester.com"
      />
    </div>
  );
};

export default TouristInfoCards;
