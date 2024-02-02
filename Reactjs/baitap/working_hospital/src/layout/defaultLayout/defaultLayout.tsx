import React from "react";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import "./defaultLayout.css";
import { Order } from "../../type/type";
interface Props {
  webContent: JSX.Element;
  orders: Order[];
}

export default function DefaultLayout(props: Props) {
  return (
    <div className="wrapper-layout">
      <div className="header-layout">
        <Header />
      </div>
      <div className="sidebar-layout">
        <Sidebar />
      </div>
      <div className="content-layout">{props.webContent}</div>
    </div>
  );
}
