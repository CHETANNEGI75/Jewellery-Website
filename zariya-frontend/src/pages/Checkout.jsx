import "./Checkout.css";

const Checkout = () => {
  return (
    <div className="checkout">
      <h2>Checkout</h2>

      <form>
        <input type="text" placeholder="Full Name" />
        <input type="text" placeholder="Address" />
        <input type="text" placeholder="City" />
        <input type="text" placeholder="Pincode" />

        <select>
          <option>Cash on Delivery</option>
          <option>UPI</option>
          <option>Card</option>
        </select>

        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;