import React from "react";
import Heading from "./components/Heading";
import TouristInfoCards from "./components/TouristInfoCards";
import Footer from "./components/footer.js";
import NewBookingForm from "./NewBookingForm";
import Restaurant from "./components/Restaurant";
//import CustomerProfile from "./components/CustomerProfile";

import Bookings from "./components/Bookings";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <NewBookingForm />
      <Footer />
    </div>
  );
};

export default App;
