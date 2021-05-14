import React from "react";
import "./styles/header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from '../firebase'

function Header() {
  const [{ cart, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }
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
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__option__lineOne">Hello {user?.email ? user.email : "Guest"}</span>
            <span className="header__option__lineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

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
          <span className="header__option__lineTwo header__cartCount">
            {cart?.length}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
