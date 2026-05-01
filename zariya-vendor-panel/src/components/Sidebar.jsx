import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div>
        <h2 className="logo">Zariya</h2>
        <p className="sub">ATELIER PORTAL</p>

        <ul className="menu">
          <li className="active">Dashboard</li>
          <li>Products</li>
          <li>Orders</li>
          <li>Analytics</li>
          <li>Settings</li>
        </ul>
      </div>

      <div className="support">Support</div>
    </div>
  );
};

export default Sidebar;