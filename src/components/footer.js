import React from "react";

const Footer = () => {
  const arrayAddresses = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div className="footer">
      <h5>Contact us</h5>
      <ul className="footerUL">
        {arrayAddresses.map((address, index) => (
          <li key={index}> {address} </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
