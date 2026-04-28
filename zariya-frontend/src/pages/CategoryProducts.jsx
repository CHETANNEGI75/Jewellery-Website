import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./CategoryProducts.css";

const CategoryProducts = () => {
  const { name } = useParams();
  const navigate = useNavigate(); // ✅ FIX

  const [products, setProducts] = useState([]);

  const title = name ? name.toUpperCase() : "ALL COLLECTIONS";

  useEffect(() => {
    fetchProducts();
  }, [name]);

  const fetchProducts = async () => {
    try {
      const url = name
        ? `http://localhost:5000/api/product/category/${name}`
        : `http://localhost:5000/api/product/`;

      const res = await axios.get(url);
      setProducts(res.data.products);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="collection-page">

      {/* HEADER */}
      <div className="collection-header">
        <p className="subtitle">EXQUISITE CRAFTSMANSHIP</p>

        <h1 className="main-heading">
          {name ? `${title} COLLECTION` : "ALL COLLECTIONS"}
        </h1>

        <div className="divider"></div>
      </div>

      {/* GRID */}
      <div className="product-grid">
        {products.map((item) => (
          <div
            key={item._id}
            className="product-card"
            onClick={() => navigate(`/product/${item._id}`)}
          >
            <img src={item.image} alt="" />

            <div className="info">
              <p className="brand">Zariya Collection</p>
              <h3>{item.name}</h3>
              <p className="price">₹{item.price}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default CategoryProducts;