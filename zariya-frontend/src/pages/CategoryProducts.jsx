import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const CategoryProducts = () => {
  const { name } = useParams();

  const [products, setProducts] = useState([]);

  const title = name ? name.toUpperCase() : "ALL PRODUCTS";

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
    <div style={{ padding: "20px" }}>
      <h2>{title}</h2>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {products.map((item) => (
          <div key={item._id} style={{ border: "1px solid #ddd", padding: "10px" }}>
            <img src={item.image} width="150" />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;