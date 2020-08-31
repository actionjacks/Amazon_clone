import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <>
      <div className="home">
        <img className="home__image" src="./baner.jpg" alt="" />
      </div>
      {/* product id, title, price, rating, image */}
      <div className="home__row">
        {" "}
        <Product
          id="12"
          title="sandalu meskie"
          price={12.2}
          rating={11}
          image="https://www.ministerstwogadzetow.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/s/k/skarpetki_sandaly.jpg"
        />
        <Product
          id="12"
          title="sandalu meskie"
          price={12.2}
          rating={1}
          image="https://www.ministerstwogadzetow.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/s/k/skarpetki_sandaly.jpg"
        />{" "}
        <Product
          id="12"
          title="sandalu meskie"
          price={12.2}
          rating={2}
          image="https://www.ministerstwogadzetow.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/s/k/skarpetki_sandaly.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12"
          title="sandalu meskie"
          price={12.2}
          rating={6}
          image="https://www.ministerstwogadzetow.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/s/k/skarpetki_sandaly.jpg"
        />
        <Product
          id="12"
          title="sandalu meskie"
          price={12.2}
          rating={2}
          image="https://www.ministerstwogadzetow.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/s/k/skarpetki_sandaly.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12"
          title="sandalu meskie"
          price={12.2}
          rating={1}
          image="https://www.ministerstwogadzetow.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/s/k/skarpetki_sandaly.jpg"
        />
      </div>
    </>
  );
}

export default Home;
