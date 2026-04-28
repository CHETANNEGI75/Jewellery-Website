import { Routes, Route, Navigate } from "react-router-dom";
import CategoryProducts from "../pages/CategoryProducts";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import ProductDetail from "../pages/ProductDetail";

const AppRoutes = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* 🔥 SHOP (all products) */}
      <Route path="/shop" element={<CategoryProducts />} />

      {/* 🔥 CATEGORY */}
      <Route path="/category/:name" element={<CategoryProducts />} />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
<Route path="/product/:id" element={<ProductDetail />} />
      <Route
        path="/dashboard"
        element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
      />
    </Routes>

  );
};

export default AppRoutes;