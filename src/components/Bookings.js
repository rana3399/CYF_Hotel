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

  const handleSubmit = e => {
    e.preventDefault();

    let num = 5;
    let sum = ++num;
    console.log(sum);

    setBookings([
      ...bookings,
      {
        id: sum,
        title: "Mr",
        firstName: newName,
        surname: lastName,
        email: email,
        checkInDate: checkIn,
        checkOutDate: checkOut
      }
    ]);
  };

  console.log(bookings);

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
    <div className="App-content container">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10 col-md-10">
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

          {customerProfileId && <CustomerProfile id={customerProfileId} />}
          <div className="booking-form">
            <NewBookingForm
              newBookName={event => setNewName(event.target.value)}
              newBookLastName={event => setLastName(event.target.value)}
              newEmail={event => setEmail(event.target.value)}
              newCheckIn={event => setCheckIn(event.target.value)}
              newCheckOut={event => setCheckOut(event.target.value)}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
