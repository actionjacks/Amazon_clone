import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Component/Header";
import Home from "./Component/Home";
import Checkout from "./Component/Checkout";
import Login from "./Component/Login";
import { useStateValue } from "./Component/StateProvider";
import { auth } from "./Firebase";

function App() {
  const [{ basket }, dispatch] = useStateValue();
  //
  useEffect(() => {
    //nasluchuje czy urzytkownik sie zalogowal czy wylogowal
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      //any cleanup operation go in here...
      unsubscribe();
    };
  }, []);
  //
  return (
    <Router>
      <div className="app">
        <Switch>
          {/*  */}
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
