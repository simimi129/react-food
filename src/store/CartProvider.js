import React from "react";
import CartContext from "./cart-context";

function CartProvider({ children }) {
  function addItemToCartHandler(item) {}

  function removeItemFromCartHandler(id) {}

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
