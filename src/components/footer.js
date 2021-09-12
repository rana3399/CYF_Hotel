import React from "react";

const Footer = () => {
  const arrayAdresses = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div className="footer">
      <p>This is a footer!</p>
      <ul>
        {arrayAdresses.map((address, index) => (
          <li key={index}> {address} </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
