import React, { useState } from "react";

const NewBookingForm = props => {
  return (
    <form onSubmit={props.handleSubmit} className="form">
      <input
        onChange={props.newBookName}
        //value={props.bookings}

        type="text"
        id="First-name"
        className="form-control"
        placeholder="First name"
      />

      <input
        onChange={props.newBookLastName}
        //value={props.bookings}

        type="text"
        id="last-name"
        className="form-control"
        placeholder="Last name"
      />

      <input
        onChange={props.newEmail}
        //value={props.bookings}

        type="email"
        id="email"
        className="form-control"
        placeholder="email"
      />

      <input
        onChange={props.newCheckIn}
        //value={props.bookings}

        type="date"
        id="check-in-date"
        className="form-control"
        placeholder="check-in-date"
      />

      <input
        onChange={props.newCheckOut}
        //value={props.bookings}

        type="date"
        id="check-in-date"
        className="form-control"
        placeholder="check-in-date"
      />

      <button className="btn btn-success m-3">Submit</button>
    </form>
  );
};

export default NewBookingForm;
