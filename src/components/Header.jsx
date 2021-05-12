import React from "react";
import './styles/header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"


function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="https://clipartcraft.com/images/amazon-smile-logo-transparent-background-7.png"
      />

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

      <div className="header-optionCart">
          <ShoppingCartIcon className="header__cart" />
          <span className="header__option__lineTwo header__cartCount">0</span>
      </div>
    </div>
  );
}

export default Header;
