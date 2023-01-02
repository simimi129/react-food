import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCart.module.css";

function HeaderCart() {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
}

export default HeaderCart;
