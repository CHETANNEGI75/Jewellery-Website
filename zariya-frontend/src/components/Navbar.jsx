import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("token");

  return (
    <div className="navbar">

      {/* LEFT LOGO */}
      <div className="nav-logo" onClick={() => navigate("/")}>
        ZARIYA
      </div>

      {/* CENTER LINKS */}
      <div className="nav-links">
        <span onClick={() => navigate("/shop")}>Collections</span>
        <span onClick={() => navigate("/customize")}>Customize</span>
        <span onClick={() => navigate("/about")}>About</span>
      </div>

      {/* RIGHT ICONS */}
      <div className="nav-icons">
        <span onClick={() => navigate("/cart")}>🛍</span>
        <span onClick={() => navigate(isLoggedIn ? "/orders" : "/login")}>
          👤
        </span>
      </div>

    </div>
  );
};

export default Navbar;