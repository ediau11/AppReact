import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CartItem } from "./CartItem";

import { Link } from "react-router-dom";
export const Carrito = () => {
  const carritoContext = useContext(CartContext);
  const cart = carritoContext.cart;
  console.log(carritoContext);

  return (
    <>
      {cart.map((producto) => (
        <CartItem key={producto.item} productoProp={producto} />
      ))}

      {cart.length >= 1 && (
        <div className="btn-group">
          <div>
            <button
              className="botonAnimationCarrito textoCompra"
              onClick={carritoContext.clear}
            >
              Vaciar Carrito
            </button>
          </div>
          <Link to="/Formulario">
            <button className="botonAnimationCarrito textoCompra">
              Terminar Compra
            </button>
          </Link>
        </div>
      )}

      {cart.length >= 1 && (
        <div>
          <h5 className="float-end textoCompra">
            El precio final por su compra es: {carritoContext.getTotalPrice()}$
          </h5>
        </div>
      )}

      {cart.length === 0 && (
        <div className="fondoCarritoVacio">
          <h1 className="text-center textoCarritoVacio">
            No agregaste Ningun Producto al Carrito :(
          </h1>
        </div>
      )}
    </>
  );
};
