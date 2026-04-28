import express from "express";
import {
  addProduct,
  getProductsByCategory,
  getAllProducts,
} from "../controllers/product.controller.js";

const router = express.Router();

router.post("/add", addProduct);
console.log("Product routes loaded");

// 🔥 category wise
router.get("/category/:name", getProductsByCategory);

// 🔥 all products (for /shop)
router.get("/", getAllProducts);

export default router;