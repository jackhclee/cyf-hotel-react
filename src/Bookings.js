/* eslint no-unused-vars: "off" */

import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import { SearchResults } from "./SearchResults.js";
import CustomerProfile from "./CustomerProfile";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
    if (searchVal !== "") {
      let filteredBookings = bookings.filter(booking => {
        if (booking.firstName === searchVal || booking.surname === searchVal) {
          return true;
        } else {
          return false;
        }
      });
      setBookings(filteredBookings);
    }
  };

  let [bookings, setBookings] = useState([]);

  let [selectedProfile, setSelectedProfile] = useState(null);

  const handleProfileSelection = id => {
    console.log(`ShowProfile ${id} clicked`);
    setSelectedProfile(id);
  };

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
        <SearchResults
          results={bookings}
          profileSelectionCB={handleProfileSelection}
        />
        <CustomerProfile id={selectedProfile} />
      </div>
    </div>
  );
};

export default Bookings;
