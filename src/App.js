import React from "react";

import Bookings from "./Bookings";
import "./App.css";
import { Footer } from "./Footer";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">CYF Hotel - jackhclee</header>
      <Bookings />
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
