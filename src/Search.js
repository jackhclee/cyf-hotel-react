import React, { useState } from "react";
import { SearchButton } from "./SearchButton";

const Search = props => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = evt => {
    let customerName = evt.target.value;
    console.log(customerName);
    setSearchInput(customerName);
    console.log(searchInput);
  };

  const handleFormSubmit = evt => {
    console.log(`form is submitted and searchInput is ${searchInput}`);
    // Call the search function passed by Bookings component
    props.search(searchInput);
    evt.preventDefault();
  };

  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form
            className="form-group search-box"
            onSubmit={evt => handleFormSubmit(evt)}
          >
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
                onChange={handleSearchInput}
              />
              <SearchButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
