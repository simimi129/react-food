import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

function MealItem({ id, name, description, price }) {
  const cartCtx = useContext(CartContext);

  const formattedPrice = `$${price.toFixed(2)}`;

  function addToCartHandler(amount) {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
    });
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{formattedPrice}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}

export default MealItem;
