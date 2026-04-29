import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(data);
  }, []);

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
console.log("TOKEN CHECK:", token);

    try {
      await axios.post(
        "http://localhost:5000/api/order/create",
        { items: cart, total },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      localStorage.removeItem("cart");

      navigate("/success");
    } catch (err) {
      alert("Error placing order");
    }
  };

  return (
    <div className="checkout-container">

      {/* LEFT FORM */}
      <div className="checkout-left">
        <h1>Checkout</h1>

        <form onSubmit={handleSubmit}>
          <input placeholder="Full Name" required />
          <input placeholder="Email" required />
          <input placeholder="Phone Number" required />
          <input placeholder="Address" required />

          <button type="submit">Place Order</button>
        </form>
      </div>

      {/* RIGHT SUMMARY */}
      <div className="checkout-right">
        <h2>Order Summary</h2>

        {cart.map(item => (
          <div key={item._id + item.selectedSize} className="summary-item">
            <img src={item.image} alt="" />

            <div>
              <p>{item.name}</p>
              <p>Size: {item.selectedSize}</p>
              <p>Qty: {item.quantity}</p>
            </div>

            <span>₹{item.price * item.quantity}</span>
          </div>
        ))}

        <div className="total">
          <h3>Total</h3>
          <h3>₹{total}</h3>
        </div>
      </div>

    </div>
  );
};

export default Checkout;