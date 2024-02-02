import React, { useState } from "react";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import { Alert, Calendar } from "antd";
import { ordersData } from "../../data/data";
import { Order } from "../../type/type";

const CalendarBooking: React.FC = () => {
  const [value, setValue] = useState(() => dayjs("2023-12-15"));
  const [selectedValue, setSelectedValue] = useState(() => dayjs(""));
  function addDate() {
    const orderDetail: Order[] = [...ordersData];
    orderDetail[0].date = selectedValue?.format("YYYY-MM-DD");
    console.log(orderDetail);
  }
  addDate();
  const onSelect = (newValue: Dayjs) => {
    setValue(newValue);
    setSelectedValue(newValue);
  };

  const onPanelChange = (newValue: Dayjs) => {
    setValue(newValue);
  };

  return (
    <>
      <Alert
        message={`You selected date: ${selectedValue?.format("YYYY-MM-DD")}`}
      />
      <Calendar
        value={value}
        onSelect={onSelect}
        onPanelChange={onPanelChange}
        style={{ padding: "30px 100px" }}
      />
    </>
  );
};

export default CalendarBooking;
