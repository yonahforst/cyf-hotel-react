import React from "react";

import TouristInfoCard from "./TouristInfoCard";

const TouristInfoCards = () => {
  return (
    <div className="cardContainer">
      <TouristInfoCard
        linkUrl="http://peoplemakeglasgow.com"
        imgSrc="https://images.pexels.com/photos/3061345/pexels-photo-3061345.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      />
      <TouristInfoCard
        linkUrl="http://visitmanchester.com"
        imgSrc="https://images.pexels.com/photos/396036/pexels-photo-396036.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      />
      <TouristInfoCard
        linkUrl="http://visitlondon.com"
        imgSrc="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      />
    </div>
  );
};

export default TouristInfoCards;
