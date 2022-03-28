import React from "react";
import { useState } from "react";

const Restaurant = () => {
  let [orders, setOrders] = useState(0);

  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {orders} <button className="btn btn-primary">Add</button>
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
