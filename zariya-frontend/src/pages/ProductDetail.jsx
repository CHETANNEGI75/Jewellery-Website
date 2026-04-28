import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/product/${id}`
      );
      setProduct(res.data.product);
    } catch (err) {
      console.log(err);
    }
  };

  if (!product) return <h2 className="loading">Loading...</h2>;

  return (
    <div className="detail-container">

      {/* 🔥 HEADER (NEW) */}
      <div className="product-header">
        <p className="breadcrumb">
          COLLECTIONS • FINE JEWELLERY • {product.name}
        </p>
      </div>

      {/* 🔥 MAIN */}
      <div className="detail-page">

        {/* IMAGE */}
        <div className="left">
          <img src={product.image} alt="" />
        </div>

        {/* INFO */}
        <div className="right">

          <p className="tag">CERTIFIED ★★★★★</p>

          <h1 className="title">{product.name}</h1>

          <div className="price-row">
            <span className="price">₹{product.price}</span>
            <span className="old-price">₹60000</span>
            <span className="discount">SAVE 15%</span>
          </div>

          {/* DESCRIPTION */}
          <p className="desc">
            This exquisite piece of jewellery is a perfect blend of tradition
            and modern elegance. Crafted with precision and passion, this design
            reflects timeless artistry that celebrates luxury and heritage.
            <br /><br />
            Every detail is carefully curated to enhance brilliance and
            uniqueness. The smooth finish, intricate patterns, and premium
            craftsmanship make it ideal for both special occasions and everyday
            elegance.
            <br /><br />
            Designed for those who appreciate fine jewellery, this piece adds a
            refined touch to your personality and style.
          </p>

          {/* SIZE */}
          <p className="size-label">SELECT LENGTH</p>

          <div className="sizes">
            <button>16 INCH</button>
            <button>18 INCH</button>
            <button>20 INCH</button>
          </div>

          {/* BUTTONS */}
          <div className="actions">
            <button className="add-btn">ADD TO BAG</button>
            <button className="wishlist">♡</button>
          </div>

          {/* BRAND BOX */}
          <div className="brand-box">
            <div>
              <h4>House of Zariya</h4>
              <p>Master Vendor • 98% Positive</p>
            </div>
            <button>VIEW ATELIER</button>
          </div>

        </div>
      </div>

    </div>
  );
};

export default ProductDetail;