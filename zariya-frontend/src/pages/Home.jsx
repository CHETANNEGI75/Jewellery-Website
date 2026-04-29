import { useNavigate } from "react-router-dom";
import "./Home.css";

// IMAGES
import homeImg from "../assets/Home.jpg";
import ringImg from "../assets/Ring.jpg";
import necklaceImg from "../assets/Necklace.jpg";
import earringImg from "../assets/Earring.jpg";
import braceletImg from "../assets/Braclett.jpg";
import legacyImg from "../assets/legacy.jpg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">

      {/* 🔥 HERO */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${homeImg})` }}
      >
        <div className="overlay">
          <h1>Timeless Elegance</h1>
          <p>Crafted for moments that matter</p>

          <button onClick={() => navigate("/category")}>
            Explore Now
          </button>
        </div>
      </section>

      {/* 🔥 CATEGORY */}
      <section className="section">
        <p className="sub">EXQUISITE CRAFTSMANSHIP</p>
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
              onClick={() => navigate(`/category/${item.name}`)}
            >
              <img src={item.img} alt={item.name} />
              <p>{item.name.toUpperCase()}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔥 WHY CHOOSE US */}
      <section className="why">
        <h2>Why Choose Us</h2>

        <div className="why-grid">

          <div className="why-card">
            <span>🚚</span>
            <h3>Free Shipping</h3>
            <p>On orders above ₹999</p>
          </div>

          <div className="why-card">
            <span>🔒</span>
            <h3>Secure Payment</h3>
            <p>100% safe checkout</p>
          </div>

          <div className="why-card">
            <span>💎</span>
            <h3>Premium Quality</h3>
            <p>Crafted with care</p>
          </div>

          <div className="why-card">
            <span>↩️</span>
            <h3>Easy Returns</h3>
            <p>7-day return policy</p>
          </div>

        </div>
      </section>

      {/* 🔥 LEGACY */}
      <section className="legacy">
        <div className="legacy-left">
          <img src={legacyImg} alt="legacy" />
        </div>

        <div className="legacy-right">
          <p className="small">OUR HERITAGE</p>

          <h2>A Legacy of Indian Craftsmanship</h2>

          <p>
            Zariya stands where tradition meets modern elegance. Every piece
            reflects a story of heritage, passion, and timeless beauty crafted
            for generations.
          </p>

          <button onClick={() => navigate("/about")}>
            Our Story
          </button>
        </div>
      </section>

    </div>
  );
};

export default Home;