import React, { useState } from "react";

const NewBookingForm = () => {
  const [input, setInput] = useState("");

  const handleSearchInput = event => {
    console.log(event.target.value);
    setInput(event.target.value);
  };

  const handleSubmit = e => {
    //props.search(searchInput);
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="customerName">New Customer Booking Details</label>
      <div className="search-row">
        <input
          onChange={handleSearchInput}
          value={input}
          type="text"
          id="First-name"
          className="form-control"
          placeholder="First name"
        />

        {/* <input
           //onChange={formSurNameChange}
        value={}
          type="text"
          id="Surname"
          className="form-control"
          placeholder="Surname"
        /> */}
        {/* <input
           onChange={handleSearchInput}
        //   value={searchInput}
          type="text"
          id="title"
          className="form-control"
          placeholder="title"
        /> */}
      </div>
    </form>
  );
};

export default NewBookingForm;
