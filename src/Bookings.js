/* eslint no-unused-vars: "off" */

import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import { SearchResults } from "./SearchResults.js";
import CustomerProfile from "./CustomerProfile";
import "./Bookings.css";

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

  let [isWaiting, setIsWaiting] = useState(true);

  let [isGetDataError, setIsGetDataError] = useState(false);

  let [selectedProfile, setSelectedProfile] = useState(null);

  const handleProfileSelection = id => {
    console.log(`ShowProfile ${id} clicked`);
    setSelectedProfile(id);
  };

  useEffect(() => {
    // Change to "https://cyf-react.glitch.me/" to restore normal function
    fetch("https://cyf-react.glitch.me/errro")
      .then(response => {
        console.log(response);
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("Unknown error");
        }
      })
      .then(data => {
        setBookings(data);
        setIsWaiting(false);
      })
      .catch(error => {
        setIsGetDataError(true);
        setIsWaiting(false);
        setBookings([]);
      });
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults
          isWaiting={isWaiting}
          isGetDataError={isGetDataError}
          results={bookings}
          profileSelectionCB={handleProfileSelection}
        />
        <CustomerProfile id={selectedProfile} />
      </div>
    </div>
  );
};

export default Bookings;
