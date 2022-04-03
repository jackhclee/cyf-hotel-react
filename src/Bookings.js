/* eslint no-unused-vars: "off" */

import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import { SearchResults } from "./SearchResults.js";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  let [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(data => setBookings(data))
      .catch(error => setBookings([]));
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
