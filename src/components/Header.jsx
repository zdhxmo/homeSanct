import React from "react";
import "./styles/header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";

function Header() {
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://clipartcraft.com/images/amazon-smile-logo-transparent-background-7.png"
        />
      </Link>

      <div className="header_search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header_nav">
        <div className="header__option">
          <span className="header__option__lineOne">Hello Guest</span>
          <span className="header__option__lineTwo">Sign In</span>
        </div>

        <div className="header__option">
          <span className="header__option__lineOne">Returns</span>
          <span className="header__option__lineTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__option__lineOne">Your</span>
          <span className="header__option__lineTwo">Prime</span>
        </div>
      </div>

      <Link to="/checkout">
        <div className="header-optionCart">
          <ShoppingCartIcon className="header__cart" />
          <span className="header__option__lineTwo header__cartCount">{cart?.length}</span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
