import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { register } from "./../serviceWorker";
import { auth } from "../Firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //
  const login = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // redirect to home page
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  //
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // redirect to home page
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  //
  return (
    <div className="login">
      <img
        src="https://img.freepik.com/darmowe-wektory/ilustracja-koncepcja-logowania_114360-739.jpg?size=338&ext=jpg"
        alt=""
        className="login__logo"
      />
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
          <h5>Password</h5>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
          />
          <button onClick={login} type="submit" className="login__signInButton">
            Sign In
          </button>
        </form>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet saepe
          qui in opt
        </p>
        <button onClick={register} className="login__registerButton">
          Create your Account
        </button>
      </div>
    </div>
  );
}

export default Login;
