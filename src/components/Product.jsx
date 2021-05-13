import React from "react";
import { useStateValue } from "../StateProvider";
import "./styles/product.css";

function Product({ key, title, description, image, price }) {
  const [{ cart }, dispatch] = useStateValue();

  const addToCart = () => {
    //dispatch to data layer
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: key,
        title: title,
        image: image,
        price: price,
        description: description,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <h3>{title}</h3>
        <p>
          {description.length > 80
            ? description.substring(0, 80) + "..."
            : description}
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

      <button onClick={addToCart}>Add To Cart</button>
    </div>
  );
}

export default Product;
