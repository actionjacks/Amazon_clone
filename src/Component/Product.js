import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

export default function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    //add item to basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>PLN</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <span>🙉</span>
            ))}
        </div>
      </div>

      <img src={image} alt="" />
      <button onClick={addToBasket}>add to basket</button>
    </div>
  );
}
