import React, { useEffect } from "react";
import { useStateValue } from "../StateProvider";
import "./styles/product.css";

function Product({ id, title, description, image, price }) {
  const [{ cart }, dispatch] = useStateValue();

  const addToCart = () => {
    //dispatch to data layer
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
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
        <h3>{title.length > 30 ? title.substring(0, 30) + "..." : title}</h3>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>

      <img src={image} alt="" />

      <button onClick={addToCart}>Add To Cart</button>
    </div>
  );
}

export default Product;
