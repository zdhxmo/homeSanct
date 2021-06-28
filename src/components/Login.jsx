import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./styles/login.css";
import { auth, provider } from "../firebase";
import Logo from "../img/logo.png";
import { useStateValue } from "../StateProvider";

function Login() {
  const [{ user }, dispatch] = useStateValue();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithPopup(provider)
      .then((auth) => {
        dispatch({
          type: "SET_USER",
          user: auth.user,
        });
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      
      <div className="login__container">
      <Link to="/">
        <img className="login__logo" src={Logo} alt="logo" />
      </Link>
        <form action="">
          <button
            onClick={signIn}
            type="submit"
            className="login__signInButton"
          >
            Sign In With Google
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
