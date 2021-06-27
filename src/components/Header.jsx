import React from "react";
import "./styles/header.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
import Logo from '../img/logo.png';

function Header() {
  const [{ cart, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src={Logo}
          alt="logo"
        />
      </Link>

      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__option__lineOne">
              Hello {user?.email ? user.email : "Guest"}
            </span>
            <span className="header__option__lineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

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
