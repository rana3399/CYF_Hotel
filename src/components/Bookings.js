import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import FakeBookings from "../data/fakeBookings.json";
import CustomerProfile from "./CustomerProfile.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [customerProfileId, setCustomerProfileId] = useState();

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(data => {
        const bookings = searchVal
          ? data.filter(
              value =>
                value.firstName === searchVal || value.surname === searchVal
            )
          : data;
        setBookings(bookings);
      });
  }, [searchVal]);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={setSearchVal} />
        <SearchResults
          results={bookings}
          onShowCustomerProfile={setCustomerProfileId}
        />

        {customerProfileId && <CustomerProfile id={customerProfileId} />}
      </div>
    </div>
  );
};

export default Bookings;

// -------------------------
