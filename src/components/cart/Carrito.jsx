import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CartItem } from "./CartItem";
import { db } from "../../utils/firebase";
import {
  addDoc,
  Timestamp,
  collection,
  updateDoc,
  getDoc,
} from "firebase/firestore";
export const Carrito = () => {
  const carritoContext = useContext(CartContext);
  const cart = carritoContext.cart;
  console.log(carritoContext);

  return (
    <>
      {cart.map((producto) => (
        <CartItem key={producto.item} productoProp={producto} />
      ))}

      {cart.length > 1 && (
        <div className="container text-center">
          <button
            className="btn btn-dark mx float-start "
            onClick={carritoContext.clear}
          >
            Vaciar Carrito
          </button>
          <h6 className="float-end">
            El precio final por su compra es: {carritoContext.getTotalPrice()}$
          </h6>
        </div>
      )}

      {/* {carritoContext.getTotalCount() > 0 && ( */}
      {/* <span
          style={{
            backgroundColor: "white",
            borderRadius: "50%",
            width: "auto",
            heigth: "50px",
            padding: 10,
            color: "black",
            margin: "5px",
          }}
        >
          {carritoContext.getTotalCount()}
        </span>
      )} */}

      {cart.length === 0 && (
        <div className="fondoCarritoVacio">
          <h1 className="text-center">
            No agregaste Ningun Producto al Carrito :(
          </h1>
        </div>
      )}
    </>
  );
};
