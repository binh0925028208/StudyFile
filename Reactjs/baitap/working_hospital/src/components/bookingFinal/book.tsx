import React, { useState } from "react";
import "./book.css";
import { Dentists, Order } from "../../type/type";
import { dentistsData, ordersData } from "../../data/data";

const BookingFinal: React.FC = () => {
  const [orderDetail, setOrderDetail] = useState<Order[]>([...ordersData]);
  const dentistList: Dentists[] = [...dentistsData];
  const dentistPerson =
    orderDetail.length > 0
      ? dentistList.find(
          (item) => item.name === orderDetail[0].dentist && item.status === 1
        )
      : null;

  const handleCancelOrder = (index: number) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Are you sure you want to cancel ?")) {
      const updatedOrders = [...orderDetail];
      updatedOrders.splice(index, 1);
      setOrderDetail(updatedOrders);
    }
  };
  return (
    <main>
      <div className="navBtn">
        <button className="navBtnDetail">Upcoming</button>
        <button className="navBtnDetail">History</button>
      </div>
      <div className="appoBox">
        {orderDetail.map((item: Order, index: number) => {
          if (item.address !== "") {
            return (
              <div className="appoBoxDetail" key={index}>
                <div className="appoDentist">
                  <div className="dentistAvatar">
                    <img src={dentistPerson?.image} alt="" />
                  </div>
                  <div className="appoData">
                    <h3>{dentistPerson?.name}</h3>
                    <p>{dentistPerson?.job}</p>
                    <p>{item.address}</p>
                    <div className="appoTime">
                      <p>{item.date}</p>
                    </div>
                  </div>
                </div>
                <div className="appoBtn">
                  <button
                    className="cancelBtn"
                    onClick={() => handleCancelOrder(index)}
                  >
                    Cancel Appointment
                  </button>
                  <button className="RescheduleBtn">Reschedule</button>
                </div>
              </div>
            );
          }
        })}
      </div>
    </main>
  );
};

export default BookingFinal;
