    import express from "express";
    import cors from "cors";
    import dotenv from "dotenv";
    import { connectDB } from "./config/db.js";
    import authRoutes from "./routes/auth.routes.js";
    import fileUpload from "express-fileupload";
    import productRoutes from "./routes/product.route.js";
    import orderRoutes from "./routes/order.route.js";

    dotenv.config();

    const app = express();
    const PORT = process.env.PORT || 5000;

    // DB connect
    connectDB();

    // Middleware
    app.use(cors());
    app.use(express.json());
    app.use(fileUpload({
      useTempFiles: true
    }));

    // Routes
    

app.use("/api/orders", orderRoutes);
    app.use("/api/auth", authRoutes);
    app.use("/api/product", productRoutes);

    // Server start
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });