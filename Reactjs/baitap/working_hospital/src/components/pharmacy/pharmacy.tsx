import React from "react";
import "./pharmacy.css";
import { TfiViewListAlt, TfiViewGrid } from "react-icons/tfi";
import { LuPhoneCall } from "react-icons/lu";
import { SlClock } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";
import { Order } from "../../type/type";
import { ordersData } from "../../data/data";
const Pharmacy = () => {
  function addAddress(item: string) {
    const orderDetail: Order[] = [...ordersData];
    orderDetail[0].address = item;
    console.log(orderDetail);
  }
  return (
    <div className="pharmacy">
      <div className="pharmacyShowBtn">
        <button>
          <TfiViewGrid />
        </button>
        <button>
          <TfiViewListAlt />
        </button>
      </div>
      <div className="pharmacyMap">
        <div
          className="pharmacyMapDetail"
          onClick={() => {
            addAddress("1 building, 1 street, 1 city");
          }}
        >
          <h2>
            <b>Pharmacy A</b>
          </h2>
          <div className="locationDetail">
            <p>
              <SlClock /> Mon - Sat: 8am - 7pm
            </p>
            <p>
              <LuPhoneCall /> 123-456-7890
            </p>
            <p>
              <CiLocationOn />1 building, 1 street, 1 city
            </p>
          </div>
          <img src="Asset/map/Mapsicle Map.png" alt="" />
        </div>
        <div
          className="pharmacyMapDetail"
          onClick={() => {
            addAddress("2 building, 2 street, 3 city");
          }}
        >
          <h2>
            <b>Pharmacy B</b>
          </h2>
          <div className="locationDetail">
            <p>
              <SlClock /> Mon - Sat: 8am - 7pm
            </p>
            <p>
              <LuPhoneCall /> 123-456-7890
            </p>
            <p>
              <CiLocationOn />2 building, 2 street, 2 city
            </p>
          </div>
          <img src="Asset/map/Mapsicle Map.png" alt="" />
        </div>
        <div
          className="pharmacyMapDetail"
          onClick={() => {
            addAddress("3 building, 3 street, 3 city");
          }}
        >
          <h2>
            <b>Pharmacy C</b>
          </h2>
          <div className="locationDetail">
            <p>
              <SlClock /> Mon - Sat: 8am - 7pm
            </p>
            <p>
              <LuPhoneCall /> 123-456-7890
            </p>
            <p>
              <CiLocationOn />3 building, 3 street, x3xx city
            </p>
          </div>
          <img src="Asset/map/Mapsicle Map.png" alt="" />
        </div>
        <div
          className="pharmacyMapDetail"
          onClick={() => {
            addAddress("4 building, 4 street, 4 city");
          }}
        >
          <h2>
            <b>Pharmacy D</b>
          </h2>
          <div className="locationDetail">
            <p>
              <SlClock /> Mon - Sat: 8am - 7pm
            </p>
            <p>
              <LuPhoneCall /> 123-456-7890
            </p>
            <p>
              <CiLocationOn />4 building, 4 street, 4 city
            </p>
          </div>
          <img src="Asset/map/Mapsicle Map.png" alt="" />
        </div>
        <div
          className="pharmacyMapDetail"
          onClick={() => {
            addAddress("5 building, 5 street, 5 city");
          }}
        >
          <h2>
            <b>Pharmacy E</b>
          </h2>
          <div className="locationDetail">
            <p>
              <SlClock /> Mon - Sat: 8am - 7pm
            </p>
            <p>
              <LuPhoneCall /> 123-456-7890
            </p>
            <p>
              <CiLocationOn />5 building, 5 street, 5 city
            </p>
          </div>
          <img src="Asset/map/Mapsicle Map.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Pharmacy;
