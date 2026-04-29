import { useNavigate } from "react-router-dom";
import "./Success.css";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="success">

      <div className="success-card">
        <div className="tick">✔</div>

        <h1>Order Placed Successfully</h1>
        <p>Your jewellery is on its way ✨</p>

        <button onClick={() => navigate("/")}>
          Continue Shopping
        </button>

        <button onClick={() => navigate("/orders")}>
          View Orders
        </button>
      </div>

    </div>
  );
};

export default Success;