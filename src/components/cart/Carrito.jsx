import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CartItem } from "./CartItem";

export const Carrito = () => {
  const carritoContext = useContext(CartContext);
  const cart = carritoContext.cart;
  console.log(carritoContext);

  return (
    <>
      <p></p>
      {cart.map((producto) => (
        <CartItem key={producto.item.id} productoProp={producto} />
      ))}
      <button onClick={carritoContext.clear}>Vaciar Carrito</button>
    </>
  );
};
