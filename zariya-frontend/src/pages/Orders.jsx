import { useEffect, useState } from "react";
import axios from "axios";
import "./Orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const token = localStorage.getItem("token");

    const res = await axios.get(
      "http://localhost:5000/api/order",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setOrders(res.data.orders);
  };

  return (
    <div className="orders-page">

      <h1>Your Orders</h1>

      {orders.map(order => (
        <div key={order._id} className="order-card">

          <div className="order-header">
            <p>Status: {order.status}</p>
            <p>Total: ₹{order.total}</p>
          </div>

          {order.items.map(item => (
            <div
              key={item.name + item.selectedSize}
              className="order-item"
            >
              <img src={item.image} alt="" />

              <div>
                <p>{item.name}</p>
                <p>Size: {item.selectedSize}</p>
                <p>Qty: {item.quantity}</p>
              </div>
            </div>
          ))}

        </div>
      ))}

    </div>
  );
};

export default Orders;