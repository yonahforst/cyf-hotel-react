import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import BookingForm from "./BookingForm.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [error, setError] = useState();

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(res => {
        if (res.status == 200) {
          return res.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then(data => setBookings(data))
      .catch(e => setError(e.message));
  }, []);

  const filteredBookings = bookings.filter(
    booking =>
      booking.firstName == searchValue || booking.surname == searchValue
  );

  if (error) {
    return <p>Error {error}</p>;
  }

  if (bookings.length == 0) {
    return <p>Loading...</p>;
  }

  function handleSubmitBooking(booking) {
    setBookings([...bookings, booking]);
  }

  return (
    <div className="App-content">
      <div className="container">
        <BookingForm submitBooking={handleSubmitBooking} />
        <Search search={setSearchValue} />
        <SearchResults results={searchValue ? filteredBookings : bookings} />
      </div>
    </div>
  );
};

export default Bookings;
