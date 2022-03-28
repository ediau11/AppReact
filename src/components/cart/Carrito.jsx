import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CartItem } from "./CartItem";

export const Carrito = () => {
  const carritoContex = useContext(CartContext);
  const cart = carritoContex.cart;
  console.log(carritoContex);

  return (
    <>
      <p></p>
      {cart.map((producto) => (
        <CartItem key={producto.item.id} productoProp={producto} />
      ))}
    </>
  );
};
