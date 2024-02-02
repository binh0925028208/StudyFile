import { useState, useEffect, useMemo } from "react";
import "./booking.css";
import Dentist from "../dentist/dentist";
import Pharmacy from "../pharmacy/pharmacy";
import CalendarBooking from "../calendar/calender";
import { Order } from "../../type/type";
import { ordersData } from "../../data/data";
const Booking = () => {
  const [bookingInfo, setBookingInfo] = useState({});
  const [bookingType, setBookingType] = useState("Calendar");
  const orderDetail: Order[] = [...ordersData];

  // const orderDetail: Order[] = useMemo(() => {
  //   return [...ordersData];
  // }, []);

  useEffect(() => {
    if (
      orderDetail[0].date !== "Invalid Date" &&
      orderDetail[0].dentist === "unknown"
    ) {
      setBookingType("Dentist");
    } else if (orderDetail[0].dentist !== "unknown") {
      setBookingType("Pharmacy");
    } else {
      setBookingType("Calendar");
    }
  }, [orderDetail, bookingType]);

  const handleBooking = () => {
    const newBookingInfo = {
      type: bookingType,
    };
    setBookingInfo(newBookingInfo);
  };

  let bookingComponent;
  switch (bookingType) {
    case "Dentist":
      bookingComponent = <Dentist />;
      break;
    case "Pharmacy":
      bookingComponent = <Pharmacy />;
      break;
    default:
      bookingComponent = <CalendarBooking />;
      break;
  }
  return (
    <main>
      <div className="navBtn">
        <button className="navBtnDetail">Date</button>
        <button className="navBtnDetail">Dentist</button>
        <button className="navBtnDetail">Pharmacy</button>
      </div>
      {/* {bookingType === "Calendar" ? <CalendarBooking /> : null}
      {bookingType === "Dentist" ? <Dentist /> : null}
      {bookingType === "Pharmacy" ? <Pharmacy /> : null} */}
      {bookingComponent}
      <div className="bookNow">
        <button className="bookBtn" onClick={handleBooking}>
          Book Now
        </button>
      </div>
    </main>
  );
};

export default Booking;
