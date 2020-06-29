import React, { useEffect, useState } from "react";

const CustomerProfile = props => {
  const [customerProfile, setCustomerProfile] = useState();

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(result => result.json())
      .then(data => setCustomerProfile(data));
  }, [props.id]);

  if (!customerProfile) {
    return "Loading...";
  }

  return (
    <ul>
      <li>ID: {customerProfile.id}</li>
      <li>Email: {customerProfile.email}</li>
      <li>VIP: {customerProfile.vip ? "Yes" : "No"}</li>
      <li>Phone: {customerProfile.phoneNumber}</li>
    </ul>
  );
};

export default CustomerProfile;
