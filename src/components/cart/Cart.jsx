import { useContext } from "react";
import { CartContext } from "./../../context/CartContex";

export const Cart = () => {
  const carritoContex = useContext(CartContext);
  const productoCarrito = carritoContex.productoCarrito;
  console.log("producto carrito", productoCarrito);

  return (
    <>
      <p>Hola</p>
    </>
  );
};
