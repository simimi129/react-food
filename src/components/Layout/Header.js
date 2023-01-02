import React from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";

function Header() {
  return (
    <>
      <header className={classes.header}>
        <h1>React Food Order App</h1>
        <button>Cart</button>
      </header>
      <div className={classes.image}>
        <img src={mealsImage} alt="meals" />
      </div>
    </>
  );
}

export default Header;
