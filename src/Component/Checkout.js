import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import Subtotal from "./Subtotal";
// react-currency-format

function Checkout() {
  //for remove item from basket use dispatch
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://ostatniatawerna.pl/wp-content/uploads/2020/06/to-the-max-comic-series.jpg"
          alt=""
          className="checkout__ad"
        />
        {Object.keys(basket).length === 0 ? (
          <div>
            <h2>EMPTY BASKET</h2>
            <p> no items in basket add something ur bastard</p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title"> BASKET</h2>
            {/* list all product */}
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {Object.keys(basket).length > 0 && (
        <div className="checkout__right">
          {/* react-currency-format */}
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
