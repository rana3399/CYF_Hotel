import React from "react";

const Footer = () => {
  const addresses = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 flex justify-contect-center">
          <h5>Contact us</h5>

          <div className="footer-list">
            <ul className="list-unstyled">
              {addresses.map((address, index) => (
                <li key={index}> {address} </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
