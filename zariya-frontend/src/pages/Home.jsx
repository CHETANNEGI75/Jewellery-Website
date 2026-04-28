import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

// IMAGES
import homeImg from "../assets/Home.jpg";
import ringImg from "../assets/Ring.jpg";
import necklaceImg from "../assets/Necklace.jpg";
import earringImg from "../assets/Earring.jpg";
import braceletImg from "../assets/Braclett.jpg";
import trend1 from "../assets/Trend1.jpg";
import trend2 from "../assets/Trend2.jpg";
import legacyImg from "../assets/legacy.jpg";

// ICONS
import { FaTruck, FaLock, FaGem, FaUndo } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  const handleProtectedClick = (path) => {
    if (user) navigate(path);
    else navigate("/signup");
  };

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    navigate("/");
  };

  return (
    <div className="home">

      {/* 🔥 NAVBAR */}
      <div className="navbar">
        <div className="nav-left">⌕</div>
        <div className="nav-center">ZARIYA</div>

        <div className="nav-right">
          <button className="cart-btn" onClick={() => navigate("/cart")}>
            Cart 🛒
          </button>

          {user ? (
            <div className="profile">
              <span onClick={() => navigate("/dashboard")}>
                👤 {user.name}
              </span>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <>
              <button onClick={() => navigate("/login")}>Login</button>
              <button onClick={() => navigate("/signup")}>Register</button>
            </>
          )}
        </div>
      </div>

      {/* 🔥 HERO */}
      <div
        className="hero"
        style={{ backgroundImage: `url(${homeImg})` }}
      >
        <div className="overlay">
          <h1>Timeless Elegance</h1>
          <p>Crafted for moments that matter</p>

          <button
            className="explore-btn"
            onClick={() => handleProtectedClick("/category/ring")}
          >
            Explore Now
          </button>
        </div>
      </div>

      {/* CATEGORY */}
      <div className="section">
        <h2>Shop By Category</h2>

        <div className="grid">
          {[
            { img: ringImg, name: "ring" },
            { img: necklaceImg, name: "necklace" },
            { img: earringImg, name: "earrings" },
            { img: braceletImg, name: "bracelet" },
          ].map((item, i) => (
            <div
              key={i}
              className="card"
              onClick={() =>
                handleProtectedClick(`/category/${item.name}`)
              }
            >
              <img src={item.img} alt="" />
              <p>{item.name.toUpperCase()}</p>
            </div>
          ))}
        </div>
      </div>

      {/* TRENDING */}
      <div className="section">
        <h2>Trending Now</h2>

        <div className="grid">
          {[
            { img: trend1, name: "bracelet" },
            { img: trend2, name: "ring" },
            { img: earringImg, name: "earrings" },
            { img: necklaceImg, name: "necklace" },
          ].map((item, i) => (
            <div
              key={i}
              className="card"
              onClick={() =>
                handleProtectedClick(`/category/${item.name}`)
              }
            >
              <img src={item.img} alt="" />
              <p>{item.name.toUpperCase()}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURES */}
      <div className="features">
        <h2>Why Choose Us</h2>

        <div className="features-grid">
          <div className="feature-card">
            <FaTruck />
            <h3>Free Shipping</h3>
            <p>On orders above ₹999</p>
          </div>

          <div className="feature-card">
            <FaLock />
            <h3>Secure Payment</h3>
            <p>100% safe checkout</p>
          </div>

          <div className="feature-card">
            <FaGem />
            <h3>Premium Quality</h3>
            <p>Crafted with care</p>
          </div>

          <div className="feature-card">
            <FaUndo />
            <h3>Easy Returns</h3>
            <p>7-day return policy</p>
          </div>
        </div>
      </div>

      {/* LEGACY */}
      <div className="legacy">
        <div className="legacy-left">
          <img src={legacyImg} alt="" />
          <div className="legacy-badge">Est. 1924</div>
        </div>

        <div className="legacy-right">
          <p className="small-title">OUR HERITAGE</p>
          <h2>A Legacy of Indian Craftsmanship</h2>

          <p className="desc">
            Zariya connects tradition with modern elegance.
          </p>

          <p className="desc">
            Crafted with passion, worn with pride.
          </p>

          <button onClick={() => handleProtectedClick("/shop")}>
            Our Story
          </button>
        </div>
      </div>

    </div>
  );
};

export default Home;