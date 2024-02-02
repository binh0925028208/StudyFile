import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import { LuHome } from "react-icons/lu";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="list">
        <li className="list-item">
          <Link to={"/"} className="list-item-detail">
            <LuHome style={{ width: 24, height: 24 }} />
            Home
          </Link>
        </li>
        <li className="list-item">
          <Link to={"/booking"} className="list-item-detail">
            <LuHome style={{ width: 24, height: 24 }} />
            Booking
          </Link>
        </li>
        <li className="list-item">
          <Link to={"/Appointments"} className="list-item-detail">
            <LuHome style={{ width: 24, height: 24 }} />
            Appointments
          </Link>
        </li>
        <li className="list-item">
          <Link to={"/"} className="list-item-detail">
            <LuHome style={{ width: 24, height: 24 }} />
            Messages
          </Link>
        </li>
        <li className="list-item">
          <Link to={"/"} className="list-item-detail">
            <LuHome style={{ width: 24, height: 24 }} />
            Settings
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
