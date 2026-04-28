import { useState } from "react";
import "./Cart.css";

const Cart = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Gold Necklace",
      price: 5000,
      image: "https://via.placeholder.com/100",
      qty: 1,
    },
  ]);

  const increaseQty = (id) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    ));
  };

  const decreaseQty = (id) => {
    setCart(cart.map(item =>
      item.id === id && item.qty > 1
        ? { ...item, qty: item.qty - 1 }
        : item
    ));
  };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>

      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt="" />

          <div>
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>

            <div className="qty">
              <button onClick={() => decreaseQty(item.id)}>-</button>
              <span>{item.qty}</span>
              <button onClick={() => increaseQty(item.id)}>+</button>
            </div>
          </div>

          <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>
    </div>
  );
};

export default Cart;