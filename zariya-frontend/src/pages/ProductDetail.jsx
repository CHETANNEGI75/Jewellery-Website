import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get(`http://localhost:5000/api/product/${id}`);
      setProduct(res.data.product);
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select size");
      return;
    }

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find(
      item => item._id === product._id && item.selectedSize === selectedSize
    );

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({
        ...product,
        quantity: 1,
        selectedSize
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to Cart 🛒");
  };

  if (!product) return <h2>Loading...</h2>;

  return (
    <div className="detail-container">

      <p className="breadcrumb">
        COLLECTIONS • FINE JEWELLERY • {product.name}
      </p>

      <div className="detail-page">

        <div className="left">
          <img src={product.image} alt="" />
        </div>

        <div className="right">
          <h1>{product.name}</h1>
          <h2 className="price">₹{product.price}</h2>

          <p className="desc">
            Crafted with timeless elegance and precision, this jewellery piece
            blends tradition with modern luxury. Perfect for weddings,
            celebrations, and daily wear.
          </p>

          <p className="size-label">SELECT SIZE</p>

          <div className="sizes">
            {["16", "18", "20"].map(size => (
              <button
                key={size}
                className={selectedSize === size ? "active" : ""}
                onClick={() => setSelectedSize(size)}
              >
                {size} INCH
              </button>
            ))}
          </div>

          <button className="add-btn" onClick={handleAddToCart}>
            ADD TO BAG
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;