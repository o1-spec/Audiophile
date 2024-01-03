import React from "react";
import { Link } from "react-router-dom";

function ProductDisplayTwo({category, product }) {
  return (
    <div className="product-cont">
      <div className="prodd-info">
        <h4 className="prodd-head">{product.name}</h4>
        <p className="prod-text">{product.description}</p>
        <Link className="prodd-btn" to={`/${product.category}/${product.name}`}>
          See Product
        </Link>
      </div>
      <div>
        <img src={product.imageUrl} alt="" />
      </div>
    </div>
  );
}

export default ProductDisplayTwo;