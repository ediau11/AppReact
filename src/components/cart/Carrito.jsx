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
        <div className="container text-center mt-5">
          <div className="btn-group fondoCart">
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
          <h5 className="textoPrecioFinal fondoCart text-center ">
            El precio final por su compra es: {carritoContext.getTotalPrice()}$
          </h5>
        </div>
      )}

      {cart.length === 0 && (
        <div className="fondoCart">
          <div className="fondoCarritoVacio fondoCart">
            <h1 className="text-center textoCarritoVacio mt-5">
              No agregaste ningun producto al carrito :(
            </h1>
            <h3 className="text-center textoCarritoVacio mt-5">
              ¿No sabes que Comprar? Te invitamos a ver nuestra variedad de
              productos!
            </h3>

            <Link to={"/productos"}>
              <div className="container text-center">
                <button className="botonAnimationContainer textoCompra mt-5  ">
                  Ver Productos
                </button>
              </div>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
