import Product from "../models/product.model.js";
import cloudinary from "../config/cloudinary.js";

// 🔥 ADD PRODUCT
export const addProduct = async (req, res) => {
  try {
    const file = req.files.image;

    const result = await cloudinary.uploader.upload(file.tempFilePath);

    const product = await Product.create({
      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
      description: req.body.description,
      image: result.secure_url,
    });

    res.json({
      success: true,
      product,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 🔥 GET BY CATEGORY
export const getProductsByCategory = async (req, res) => {
  try {
    const products = await Product.find({
      category: req.params.name,
    });

    res.json({
      success: true,
      products,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 🔥 GET ALL PRODUCTS (SHOP PAGE)
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.json({
      success: true,
      products,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export const getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.json({
      success: true,
      product,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};