import "./LoginForm.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const handleLogin = async () => {
  try {
    const res = await axios.post(
      "http://localhost:5000/api/auth/login",
      form
    );

    console.log("LOGIN RESPONSE:", res.data);

    // ✅ SAVE DATA
    localStorage.setItem("user", JSON.stringify(res.data.user));
    localStorage.setItem("token", res.data.token);

    const role = res.data.user.role;

    // 🔥 YAHI PAR LAGANA HAI (EXACT SPOT)
    if (role === "vendor") {
      window.location.href = "http://localhost:5174"; // vendor panel
    } else {
      navigate("/"); // normal user → home
    }

  } catch (err) {
    alert("Invalid credentials");
  }
};

  return (
    <div className="form-container">

      <h1>ZARIYA</h1>
      <p className="subtitle">Welcome back to The Vault</p>

      <input
        type="email"
        name="email"
        placeholder="Enter email"
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Enter password"
        onChange={handleChange}
      />

      <button onClick={handleLogin}>LOGIN</button>

      <p>
        Don’t have an account?{" "}
        <span onClick={() => navigate("/signup")}>Signup</span>
      </p>

    </div>
  );
};

export default LoginForm;