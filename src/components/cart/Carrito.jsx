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

  // const sendOrder = async (e) => {
  //   e.preventDefault();
  //   // console.log("evento formulario", e);
  //   const nombre = e.target[0].value;
  //   const telefono = e.target[1].value;
  //   const email = e.target[2].value;
  //   // ////////
  //   const newObj = {
  //     bayer: {
  //       name: nombre,
  //       phone: telefono,
  //       email,
  //     },
  //     items: cart,
  //     date: Timestamp.fromDate(new Date()),
  //   };
  //   const ordenColeccion = collection(db, "orders");
  //   const docReference = await addDoc(ordenColeccion, newObj);
  //   console.log(docReference, "referencia creada");
  // };

  // const updateProducto = async () => {
  //   const docReference = doc(db, items, "1");
  //   const docData = await getDoc(docReference);
  // };
  return (
    <>
      {cart.map((producto) => (
        <CartItem key={producto.item} productoProp={producto} />
      ))}
      <button onClick={carritoContext.clear}>Vaciar Carrito</button>
      <p>El precio final por su compra es: {carritoContext.getTotalPrice()}$</p>
      {/* <div>
        <form onSubmit={sendOrder}>
          <input type="text" placeholder="nombre" />
          <input type="text" placeholder="telefono" />
          <input type="email" placeholder="email" />
          <button type="submit">Enviar orden</button>
        </form>
      </div>
      <button>onClick={updateProducto}</button>
       */}
      {/* {carritoContext.getTotalCount() > 0 && (
        <span
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
            {" "}
            No agregaste Ningun Producto al Carrito :(
          </h1>
        </div>
      )}
    </>
  );
};
