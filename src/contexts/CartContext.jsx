import React, { createContext, useContext } from "react";

const cartContext = createContext();

function CartContext() {
  return useContext(cartContext);
}

const initState = {
  cart: {
    products: [],
  },
};

export default CartContext;
