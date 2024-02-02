import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layout/defaultLayout/defaultLayout";
import Booking from "./components/booking/booking";
import { Home } from "./components/home/home";
import { Order } from "./type/type";
import BookingFinal from "./components/bookingFinal/book";

function App() {
  const [orders, setOrder] = useState<Order[]>([]);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<DefaultLayout webContent={<Home />} orders={orders} />}
        />
        <Route
          path="/Booking"
          element={<DefaultLayout webContent={<Booking />} orders={orders} />}
        />
        <Route
          path="/Appointments"
          element={
            <DefaultLayout webContent={<BookingFinal />} orders={orders} />
          }
        />
        <Route
          path="/*"
          element={<DefaultLayout webContent={<Home />} orders={orders} />}
        />
      </Routes>
    </div>
  );
}

export default App;
