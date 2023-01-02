import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCart.module.css";

function HeaderCart({ onClick }) {
  return (
    <button className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
}

export default HeaderCart;
