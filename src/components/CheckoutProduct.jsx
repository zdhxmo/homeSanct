import React from 'react'
import { useStateValue } from "../StateProvider";
import './styles/checkoutProduct.css'

function CheckoutProduct({ id, image, title, price}) {
    const [{ }, dispatch] = useStateValue();

    // dispatch remove from cart
    const removeFromCart = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id
        })
    }
    return (
      <div className="checkoutProduct">
        <img class="checkoutProduct__image" src={image} alt="" />

        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>
          <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>

          <button onClick={removeFromCart} className="checkoutProduct__remove">Remove from Cart</button>
        </div>
      </div>
    );
}

export default CheckoutProduct
