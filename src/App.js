import React from "react";

import Bookings from "./Bookings";
import "./App.css";
import { Footer } from "./Footer";
import { Heading } from "./Heading";
import { TouristInfoCards } from "./TouristInfoCards";
import Restaurant from "./Restaurant";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <Footer
        addressArray={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;
