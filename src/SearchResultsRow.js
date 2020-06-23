import React, { useState } from "react";

import moment from "moment";

const SearchResultsRow = props => {
  const data = props.data;
  const checkIn = moment(data.checkInDate);
  const checkOut = moment(data.checkOutDate);

  const [isSelected, setIsSelected] = useState();

  const flipIt = () => {
    setIsSelected(!isSelected);
  };

  return (
    <tr className={isSelected && "highlightedRow"} onClick={flipIt}>
      <th scope="row">{data.id}</th>
      <td>{data.title}</td>
      <td>{data.firstName}</td>
      <td>{data.surname}</td>
      <td>{data.email}</td>
      <td>{data.roomId}</td>
      <td>{data.checkInDate}</td>
      <td>{data.checkOutDate}</td>
      <td>{checkOut.diff(checkIn, "days")}</td>
    </tr>
  );
};

export default SearchResultsRow;
