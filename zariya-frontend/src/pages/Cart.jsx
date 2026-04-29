import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  const updateQty = (id, size, type) => {
    let updated = cart.map(item => {
      if (item._id === id && item.selectedSize === size) {
        if (type === "inc") item.quantity++;
        if (type === "dec" && item.quantity > 1) item.quantity--;
      }
      return item;
    });

    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const removeItem = (id, size) => {
    let updated = cart.filter(
      item => !(item._id === id && item.selectedSize === size)
    );

    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">

      <h1>Your Cart</h1>

      {cart.map(item => (
        <div key={item._id + item.selectedSize} className="item">

          <img src={item.image} />

          <div>
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <p>Size: {item.selectedSize}</p>

            <div className="qty">
              <button onClick={() => updateQty(item._id, item.selectedSize, "dec")}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQty(item._id, item.selectedSize, "inc")}>+</button>
            </div>

            <button onClick={() => removeItem(item._id, item.selectedSize)}>
              Remove
            </button>

          </div>
        </div>
      ))}

      <h2>Total: ₹{total}</h2>

      <button onClick={() => navigate("/checkout")}>
        Checkout
      </button>
    </div>
  );
};

export default Cart;