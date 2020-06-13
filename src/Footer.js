import React from "react";

const Footer = props => {
  return (
    <div className="footer">
      <ul>
        {props.contactInfoArray.map((contactInfo, index) => (
          <li key={index}>{contactInfo}</li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
