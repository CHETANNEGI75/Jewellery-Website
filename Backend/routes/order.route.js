import express from "express";
import {
  createOrder,
  getOrders,
  getSingleOrder,
  updateOrderStatus,
} from "../controllers/order.controller.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.post("/create", protect, createOrder);
router.get("/", protect, getOrders);
router.get("/:id", protect, getSingleOrder);
router.put("/:id", protect, updateOrderStatus);

export default router;