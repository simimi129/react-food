import React from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCart from "./HeaderCart";

function Header({ onShowCart }) {
  return (
    <>
      <header className={classes.header}>
        <h1>React Food Order App</h1>
        <HeaderCart onClick={onShowCart} />
      </header>
      <div className={classes.image}>
        <img src={mealsImage} alt="meals" />
      </div>
    </>
  );
}

export default Header;
