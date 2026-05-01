import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { getOrders } from "../services/orderService";

const Dashboard = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await getOrders();
setOrders(res.data.orders);    } catch (err) {

      console.log("Error fetching orders:", err);
    }
  };

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main">
        {/* Topbar */}
        <div className="topbar">
          <input placeholder="Search orders..." />

          <div className="profile">
            <div className="avatar">ZA</div>
            <div className="profile-info">
              <span className="brand">Zariya Atelier</span>
              <span className="role">Vendor</span>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="header-block">
          <h2>Overview</h2>
          <p>
            A curated look at your store’s performance — insights that shape your growth.
          </p>
        </div>

        {/* Stats (static for now) */}
        <div className="stats">
          <div className="card clickable">
            <p>REVENUE</p>
            <h2>$124,592</h2>
            <span className="green">+12.5%</span>
          </div>

          <div className="card clickable">
            <p>TOTAL ORDERS</p>
            <h2>{orders.length}</h2>
            <span className="green">Live</span>
          </div>

          <div className="card clickable">
            <p>AVG VALUE</p>
            <h2>$97.03</h2>
            <span>No change</span>
          </div>

          <div className="card clickable">
            <p>CONVERSION</p>
            <h2>3.4%</h2>
            <span className="red">-0.4%</span>
          </div>
        </div>

        {/* Orders Table */}
        <div className="table-box">
          <h3>Recent Activity</h3>

          <div className="table-row header">
            <span>ITEM</span>
            <span>CUSTOMER</span>
            <span>TOTAL</span>
            <span>STATUS</span>
          </div>

          {orders.map((o) => (
            <div key={o._id} className="table-row">
              <span>{o.productName}</span>
<span>{o.customerName}</span>
              <span>₹{o.totalPrice || o.total}</span>
              <span className={o.status.toLowerCase()}>
                {o.status}
              </span>
            </div>
          ))}
        </div>

        <button className="fab">+</button>
      </div>
    </div>
  );
};

export default Dashboard;