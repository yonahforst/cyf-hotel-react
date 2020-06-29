import React, { useState } from "react";

const initialValue = {
  firstName: "",
  surname: "",
  title: "",
  email: "",
  roomId: "",
  checkInDate: "",
  checkOutDate: ""
};

const BookingForm = props => {
  const [bookingData, setBookingData] = useState(initialValue);

  function handleOnChange(event) {
    const updatedBookingData = {
      ...bookingData,
      [event.target.name]: event.target.value
    };

    setBookingData(updatedBookingData);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.submitBooking(bookingData);
    setBookingData(initialValue);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        placeholder="First name"
        value={bookingData.firstName}
        onChange={handleOnChange}
      />
      <input
        type="text"
        name="surname"
        placeholder="surname"
        value={bookingData.surname}
        onChange={handleOnChange}
      />
      <input
        type="text"
        name="email"
        placeholder="email"
        value={bookingData.email}
        onChange={handleOnChange}
      />
      <input
        type="text"
        name="title"
        placeholder="title"
        value={bookingData.title}
        onChange={handleOnChange}
      />
      <input
        type="text"
        name="roomId"
        placeholder="roomId"
        value={bookingData.roomId}
        onChange={handleOnChange}
      />
      <input
        type="text"
        name="checkInDate"
        placeholder="checkInDate"
        value={bookingData.checkInDate}
        onChange={handleOnChange}
      />
      <input
        type="text"
        name="checkOutDate"
        placeholder="checkOutDate"
        value={bookingData.checkOutDate}
        onChange={handleOnChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default BookingForm;
