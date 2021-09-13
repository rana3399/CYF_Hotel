import React, { useState } from "react";

const Restaurant = () => {
  let [orders, setOrders] = useState(0); // useState()

  let OrderOne = () => {
    return setOrders(orders + 1);
  };

  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {orders}
          <RestaurantButton orderCountBTN={OrderOne} />
        </li>
      </ul>
    </div>
  );
};

const RestaurantButton = props => {
  return (
    <button onClick={props.orderCountBTN} className="btn btn-primary">
      Add
    </button>
  );
};

export default Restaurant;
