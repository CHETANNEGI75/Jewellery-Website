import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="dashboard">

      {/* NAVBAR */}
      <div className="dash-navbar">
        <h2>ZARIYA</h2>

        <div className="dash-user">
          <span>👤 {user?.name}</span>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="dash-content">

        <h1>Welcome, {user?.name} 👋</h1>
        <p>Your personal jewellery space</p>

        <div className="cards">

          <div className="card">
            <h3>🛍 Orders</h3>
            <p>View your recent purchases</p>
          </div>

          <div className="card">
            <h3>💎 Wishlist</h3>
            <p>Your saved collections</p>
          </div>

          <div className="card">
            <h3>⚙ Profile</h3>
            <p>Manage your account</p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;