import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ClipLoader from "react-spinners/ClipLoader";
import "./Products.css";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="products-container">
      <input
        type="text"
        placeholder=" Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      {loading ? (
        <div className="loading">
          <ClipLoader color="#2508e4ff" size={50} />
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="no-products"> No products found</div>
      ) : (
        <div className="products-list">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
