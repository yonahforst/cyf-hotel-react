import React from "react";
import "./App.css";

import TouristInfoCards from "./TouristInfoCards";
import Heading from "./Heading";
import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import Footer from "./Footer";

const App = () => {
  const contactInfoArray = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <Footer contactInfoArray={contactInfoArray} />
    </div>
  );
};

export default App;
