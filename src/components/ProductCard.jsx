import "./ProductCard.css";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-img" />
      <h2 className="product-title">{product.title}</h2>
      <p className="product-price">₹{product.price}</p>
    </div>
  );
}
