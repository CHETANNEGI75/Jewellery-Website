import "./Signup.css";
import necklace from "../assets/SignUp.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();

  // 🔥 STATE
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "customer",
  });

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 🔐 SIGNUP FUNCTION
  const handleSignup = async () => {
    try {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match");
        return;
      }

      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );

      // ✅ SAVE LOGIN STATE
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Signup Successful!");

      // ✅ REDIRECT
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
      alert("Signup Failed");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">

        {/* LEFT IMAGE */}
        <div className="signup-left">
          <img src={necklace} alt="jewellery" />

          <div className="overlay-text">
            <h2>The Vault</h2>
            <p>
              Curating the world's most exquisite boutique pieces
              for the discerning collector.
            </p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="signup-right">

          <h1>Join the Boutique</h1>
          <p className="subtitle">
            Enter your details to create an account at ZARIYA.
          </p>

          <label>FULL NAME</label>
          <input
            type="text"
            name="name"
            placeholder="Evelyn Thorne"
            onChange={handleChange}
          />

          <label>EMAIL ADDRESS</label>
          <input
            type="email"
            name="email"
            placeholder="evelyn@boutique.com"
            onChange={handleChange}
          />

          <div className="row">
            <div>
              <label>PASSWORD</label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                onChange={handleChange}
              />
            </div>

            <div>
              <label>CONFIRM PASSWORD</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="••••••••"
                onChange={handleChange}
              />
            </div>
          </div>

          <label>ACCOUNT TYPE</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="role"
                value="customer"
                onChange={handleChange}
                checked={formData.role === "customer"}
              />
              Customer
            </label>

            <label>
              <input
                type="radio"
                name="role"
                value="vendor"
                onChange={handleChange}
                checked={formData.role === "vendor"}
              />
              Artisan Vendor
            </label>
          </div>

          <button onClick={handleSignup}>Create Account</button>

          {/* NAVIGATION */}
          <p className="signin">
            Already a member?{" "}
            <span onClick={() => navigate("/login")}>Sign In</span>
          </p>

        </div>

      </div>

      {/* FOOTER */}
      <div className="footer">
        <span>ZARIYA</span>
        <span>© 2024 ZARIYA JEWELS. EXCLUSIVITY DEFINED.</span>
        <span>PRIVACY POLICY &nbsp; TERMS &nbsp; CONTACT BOUTIQUE</span>
      </div>
    </div>
  );
};

export default Signup;