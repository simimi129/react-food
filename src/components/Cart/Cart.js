import React, { useContext, useState } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout";

function Cart({ onClose }) {
  const [isCheckout, setIsCheckout] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  function cartItemAddHandler(item) {
    cartCtx.addItem({ ...item, amount: 1 });
  }

  function cartItemRemoveHandler(id) {
    cartCtx.removeItem(id);
  }

  function orderHandler() {
    setIsCheckout(true);
  }

  return (
    <Modal onClose={onClose}>
      <ul className={classes.items}>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onAdd={cartItemAddHandler.bind(null, item)}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
          />
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && <Checkout onCancel={onClose} />}
      {!isCheckout && (
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={onClose}>
            Close
          </button>
          {hasItems && (
            <button className={classes.button} onClick={orderHandler}>
              Order
            </button>
          )}
        </div>
      )}
    </Modal>
  );
}

export default Cart;
