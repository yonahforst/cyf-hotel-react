import React, { useState } from "react";
import SearchResultsRow from "./SearchResultsRow";
import CustomerProfile from "./CustomerProfile";

const TableHeader = ({ sort, setSort, name, id }) => {
  const handleClick = () => {
    setSort({
      column: id,
      asc: sort.column == id ? !sort.asc : true
    });
  };
  return (
    <th scope="col" onClick={handleClick}>
      {sort.column == id ? <i>{name}</i> : name}
    </th>
  );
};

const SearchResults = props => {
  const [customerProfileId, setCustomerProfileId] = useState();
  const [sort, setSort] = useState({
    column: "id",
    asc: true
  });

  const sortedBookings = props.results.sort((a, b) => {
    if (a[sort.column] > b[sort.column]) {
      return sort.asc ? 1 : -1;
    } else {
      return sort.asc ? -1 : 1;
    }
  });

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <TableHeader id="id" name="Id" sort={sort} setSort={setSort} />
            <TableHeader
              id="title"
              name="Title"
              sort={sort}
              setSort={setSort}
            />
            <TableHeader
              id="firstName"
              name="First"
              sort={sort}
              setSort={setSort}
            />
            <TableHeader
              id="surname"
              name="Surname"
              sort={sort}
              setSort={setSort}
            />
            <TableHeader
              id="email"
              name="Email"
              sort={sort}
              setSort={setSort}
            />
            <TableHeader
              id="roomId"
              name="Room"
              sort={sort}
              setSort={setSort}
            />
            <TableHeader
              id="checkInDate"
              name="CheckIn"
              sort={sort}
              setSort={setSort}
            />
            <TableHeader
              id="checkOutDate"
              name="CheckOut"
              sort={sort}
              setSort={setSort}
            />
            <th scope="col">Nights</th>
            <th scope="col" />
          </tr>
        </thead>
        <tbody>
          {sortedBookings.map((data, index) => (
            <SearchResultsRow
              key={index}
              data={data}
              setCustomerProfile={setCustomerProfileId}
            />
          ))}
        </tbody>
      </table>
      {customerProfileId && <CustomerProfile id={customerProfileId} />}
    </div>
  );
};

export default SearchResults;
