import React, { useState } from "react";
import moment from "moment";
import NewBookingForm from "./NewBookingForm.js";

const daysBetweenDates = (a, b) => {
  const firstMoment = moment(a);
  const secondMoment = moment(b);

  return firstMoment.diff(secondMoment, "days");
};

const TableRow = props => {
  const [selected, setSetSelected] = useState();

  const highlight = () => {
    setSetSelected(!selected);
  };
  // const clicked = id => {
  //   console.log(props.booking.id);
  //   setCustomerProfileId(props.booking.id);
  // };

  return (
    <tr className={selected ? "row-highlight" : undefined} onClick={highlight}>
      <td scope="col">{props.booking.id}</td>
      <td scope="col">{props.booking.title}</td>
      <td scope="col">{props.booking.firstName}</td>
      <td scope="col">{props.booking.surname}</td>
      <td scope="col">{props.booking.email}</td>
      <td scope="col">{props.booking.roomId}</td>
      <td scope="col">{props.booking.checkInDate}</td>
      <td scope="col">{props.booking.checkOutDate}</td>
      <td scope="col" />
      <td scope="col">
        {daysBetweenDates(
          props.booking.checkOutDate,
          props.booking.checkInDate
        )}
      </td>
      <td scope="col">
        <button onClick={() => props.profile(props.booking.id)}>
          Show Profile
        </button>
      </td>
    </tr>
  );
};

const SearchResults = props => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room Id</th>
          <th scope="col">Check in Date</th>
          <th scope="col">Check Out Date</th>
          <th scope="col">Nights</th>
          <th scope="col">Display</th>
          <th scope="col" />
        </tr>
      </thead>
      <tbody>
        {props.results.map((booking, index) => (
          <TableRow
            key={index}
            booking={booking}
            profile={val => props.onShowCustomerProfile(val)}
          />
        ))}
      </tbody>
      <NewBookingForm />
    </table>
  );
};

export default SearchResults;

// -------------------------------
// const newBookingInfo = event => {
//   console.log(event.target.value);
//   setBooking(event.target.value);
// };

// const handleSubmit = e => {
//   e.preventDefault();
// setBooking(event.target.value);
//   alert(`The name you entered was: ${input}`);
// };
