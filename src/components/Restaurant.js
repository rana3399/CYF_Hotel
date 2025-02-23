import React, { useState } from "react";

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType=" Pizzas" />
        <Order orderType=" Salads" />
        <Order orderType=" Chocolate cake" />
      </ul>
    </div>
  );
};

const RestaurantButton = props => {
  return (
    <span className="btn-container">
      <button
        onClick={props.orderCountBTN}
        className="btn btn-primary my-order-btn"
      >
        Add
      </button>
    </span>
  );
};

const Order = props => {
  let [orders, setOrders] = useState(0); // useState()

  let OrderOne = () => {
    return setOrders(orders + 1);
  };

  return (
    <li>
      {props.orderType} : {orders}
      <RestaurantButton orderCountBTN={OrderOne} />
    </li>
  );
};

export default Restaurant;
