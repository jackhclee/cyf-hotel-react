import React from "react";
import { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  let [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders(order => order + 1);
  };

  return (
    <li>
      {props.orderType}: {orders} <RestaurantButton clickHandler={orderOne} />
    </li>
  );
};

export default Order;
