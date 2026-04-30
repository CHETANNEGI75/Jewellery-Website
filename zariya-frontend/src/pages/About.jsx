import "./About.css";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about">

      {/* HERO */}
      <section className="about-hero">
        <div className="overlay">
          <h1>The Story of Zariya</h1>
          <p>Where heritage meets modern elegance</p>
        </div>
      </section>

      {/* STORY */}
      <section className="about-section">
        <p className="small">OUR STORY</p>
        <h2>Crafted with Legacy</h2>

        <p className="desc">
          Zariya is more than just jewellery — it is a journey through time.
          Rooted in the rich traditions of Indian craftsmanship, each piece
          reflects the delicate artistry passed down through generations.
          <br /><br />
          Our designs are inspired by heritage, yet shaped for the modern
          world — where every detail speaks of elegance, emotion, and identity.
        </p>
      </section>

      {/* IMAGE + TEXT */}
      <section className="about-split">

        <div className="left">
          <img src="/src/assets/Home.jpg" alt="about" />
        </div>

        <div className="right">
          <p className="small">OUR PHILOSOPHY</p>
          <h2>Timeless by Design</h2>

          <p>
            We believe luxury is not loud — it is felt.
            Every Zariya creation is handcrafted with precision,
            blending minimal aesthetics with intricate detailing.
            <br /><br />
            Our mission is to create jewellery that becomes a part
            of your story — not just an accessory, but an emotion.
          </p>

          <button onClick={() => navigate("/shop")}>
            Explore Collection
          </button>
        </div>

      </section>

      {/* VALUES */}
      <section className="about-values">

        <div>
          <h3>Authenticity</h3>
          <p>True craftsmanship rooted in tradition</p>
        </div>

        <div>
          <h3>Elegance</h3>
          <p>Minimal, timeless and refined designs</p>
        </div>

        <div>
          <h3>Quality</h3>
          <p>Only the finest materials and finishes</p>
        </div>

      </section>

    </div>
  );
};

export default About;