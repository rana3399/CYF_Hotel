import React, { useState, useEffect } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";
import CustomerProfile from "./CustomerProfile";
import NewBookingForm from "./NewBookingForm";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [customerProfileId, setCustomerProfileId] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  // --------NEW BOOKING state------------

  const [newName, setNewName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  // -------------------------------
  console.log(bookings);

  const newBookName = event => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const newBookLastName = event => {
    setLastName(event.target.value);
  };

  const newEmail = event => {
    setEmail(event.target.value);
  };

  const newCheckIn = event => {
    setCheckIn(event.target.value);
  };

  const newCheckOut = event => {
    setCheckOut(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    setBookings([
      ...bookings,
      {
        firstName: newName,
        surname: lastName,
        email: email,
        checkInDate: checkIn,
        checkOutDate: checkOut
      }
    ]);
  };

  useEffect(() => {
    setIsLoading(true);

    fetch("https://cyf-react.glitch.me/")
      .then(res => res.json())
      .then(data => {
        if (data.error) throw new Error(data.error);

        const bookings = searchVal
          ? data.filter(
              value =>
                value.firstName === searchVal || value.surname === searchVal
            )
          : data;

        setBookings(bookings);
        setIsLoading(false);
      })
      .catch(e => {
        setError(e.message);
        setIsLoading(false);
      });
  }, [searchVal]);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={setSearchVal} />
        {error && <p>{error}</p>}
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <SearchResults
            results={bookings}
            onShowCustomerProfile={setCustomerProfileId}
          />
        )}

        {/* // --------NEW BOOKING component------------ */}
        <NewBookingForm
          newBookName={newBookName}
          newBookLastName={newBookLastName}
          newEmail={newEmail}
          newCheckIn={newCheckIn}
          newCheckOut={newCheckOut}
          handleSubmit={handleSubmit}
        />
        {customerProfileId && <CustomerProfile id={customerProfileId} />}
      </div>
    </div>
  );
};

export default Bookings;
