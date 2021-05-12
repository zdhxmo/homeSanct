import React from "react";
import "./styles/product.css";

function Product({ title, description, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <h3>{title}</h3>
        <p>
          {description.length > 100
            ? description.substring(0, 100) + "..."
            : description
          }
        </p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        {/*         <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div> */}
      </div>

      <img src={image} alt="" />

      <button>Add To Cart</button>
    </div>
  );
}

export default Product;
