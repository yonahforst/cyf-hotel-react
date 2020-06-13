import React from "react";

const TouristInfoCard = props => (
  <div className="card">
    <img alt="" src={props.imgSrc} className="card-img-top" />
    <div className="card-body">
      <a href={props.linkUrl} className="btn btn-primary">
        Go somewhere
      </a>
    </div>
  </div>
);

export default TouristInfoCard;
