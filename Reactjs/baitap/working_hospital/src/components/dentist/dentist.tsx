import React from "react";
import "./dentist.css";
import { Dentists, Order } from "../../type/type";
import { dentistsData, ordersData } from "../../data/data";

const Dentist: React.FC = () => {
  function addDentistName(item: string) {
    const orderDetail: Order[] = [...ordersData];
    orderDetail[0].dentist = item;
    console.log(orderDetail);
  }
  const dentistList: Dentists[] = [...dentistsData];
  const dentistPerson = dentistList.filter(
    (item) => item.job === "dentist" && item.status === 1
  );
  const dentalPerson = dentistList.filter(
    (item) => item.job === "dental" && item.status === 1
  );
  return (
    <main className="dentist">
      <div className="dentistList">
        <h3>
          <b>Dentist</b>
        </h3>
        <div className="dentistListDetail">
          {dentistPerson.map((item: Dentists, index: number) => {
            return (
              <div
                className="dentistPerson"
                onClick={() => {
                  addDentistName(item.name);
                }}
              >
                <img src={item.image} alt="" />
                <p className="dentistName">{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="dentistList">
        <h3>
          <b>Dental Hygienist</b>
        </h3>
        <div className="dentistListDetail">
          {dentalPerson.map((item: Dentists, index: number) => {
            return (
              <div
                className="dentistPerson"
                onClick={() => {
                  addDentistName(item.name);
                }}
              >
                <img src={item.image} alt="" />
                <p className="dentistName">{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Dentist;
