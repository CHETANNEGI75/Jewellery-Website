import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  image: String,
  Description: String,
});

export default mongoose.model("Product", productSchema);