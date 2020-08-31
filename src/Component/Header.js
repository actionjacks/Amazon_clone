import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "firebase";

function Header() {
  const [{ basket, user }] = useStateValue();
  console.log(basket);
  const login = () => {
    if (user) {
      auth.signOut();
    }
  };
  //
  return (
    <>
      <nav className="header">
        <Link to="/">
          <img
            className="header__logo"
            src="https://i.pinimg.com/originals/08/e0/61/08e061b2c8603415bc0980039bb20e0b.png"
            alt="skull logo"
          />
        </Link>
        <div className="header__search">
          {/* search input */}
          <input type="text" className="header__searchInput" />
          <SearchIcon className="header__searchIcon" />
        </div>
        {/* 3 links */}
        <div className="header__nav">
          {/* 1s link */}
          <Link to={!user && "/login"} className="header__link">
            <div onClick={login} className="header__option">
              <span className="header__optionLineOne">Hello {user?.email}</span>
              <span className="header__optionLineTwo">
                {user ? "Sign Out" : "Sign in"}
              </span>
            </div>
          </Link>
          {/* 2s link */}
          <Link to="/" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Return</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>
          {/* 3s link */}
          <Link to="/" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">your</span>
              <span className="header__optionLineTwo">prime</span>
            </div>
          </Link>
          {/* 4s link */}
          <Link to="/checkout" className="header__link">
            <div className="header__optionBasket">
              <ShoppingBasketIcon className="header__optionLineOne basket__count" />
              <span className="header__optionLineTwo">
                {Object.keys(basket).length}
              </span>
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Header;
