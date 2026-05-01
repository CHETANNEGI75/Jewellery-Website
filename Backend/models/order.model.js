import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    productName: String,
    customerName: String,
    total: Number,
    status: {
      type: String,
      enum: ["DELIVERED", "PENDING", "SHIPPED"],
      default: "PENDING",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);