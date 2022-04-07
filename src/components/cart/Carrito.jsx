import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CartItem } from "./CartItem";
import { db } from "../../utils/firebase";
import { addDoc, Timestamp, collection, getDoc, doc } from "firebase/firestore";
export const Carrito = () => {
  const carritoContext = useContext(CartContext);
  const cart = carritoContext.cart;
  console.log(carritoContext);

  const sendOrder = async (e) => {
    e.preventDefault();
    console.log("evento formulario", e);
    const nombre = e.target[0].value;
    const telefono = e.target[1].value;
    const email = e.target[2].value;
    // ////////
    const newObj = {
      buyer: {
        name: nombre,
        phone: telefono,
        email,
      },
      Items: cart,
      total: carritoContext.getTotalPrice(),
      date: Timestamp.fromDate(new Date()),
    };

    const ordenColeccion = collection(db, "orders");
    const docReference = await addDoc(ordenColeccion, newObj);
    console.log(docReference, "referencia creada");
  };
  const updateProducto = async () => {
    const docReference = doc(db, "Items", "1");
    const docData = await getDoc(docReference);
  };
  return (
    <>
      {cart.map((producto) => (
        <CartItem key={producto.item} productoProp={producto} />
      ))}

      {cart.length >= 1 && (
        <div className="container text-center">
          <button
            className="btn btn-dark mx float-start "
            onClick={carritoContext.clear}
          >
            Vaciar Carrito
          </button>
        </div>
      )}
      {cart.length >= 1 && (
        <div className="container text-center">
          <h6 className="float-end">
            El precio final por su compra es: {carritoContext.getTotalPrice()}$
          </h6>
        </div>
      )}

      {cart.length >= 1 && (
        <form className="estilosFormulario" onSubmit={sendOrder}>
          <input className="inputFormulario" type="text" placeholder="nombre" />
          <input type="text" placeholder="phone" />
          <input type="email" placeholder="email" />
          <button className="btn btn-dark" type="submit">
            Enviar Orden
          </button>
        </form>
      )}

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
