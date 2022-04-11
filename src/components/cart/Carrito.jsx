import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CartItem } from "./CartItem";
import { db } from "../../utils/firebase";
import { addDoc, Timestamp, collection } from "firebase/firestore";
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

    const orderCollection = collection(db, "orders");
    const newOrder = {
      buyer: {
        nombre,
        telefono,
        email,
      },
      Items: cart,
      total: carritoContext.getTotalPrice(),
      date: Timestamp.fromDate(new Date()),
    };

    console.log(newOrder);
    const refOrder = await addDoc(orderCollection, newOrder);
    alert(`gracias por compra, tu numero identifacador es: ${refOrder.id}`);
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
        <div className=" container containerFormulario text-center">
          <form
            className="contenedorFormulario"
            onSubmit={sendOrder}
            role="form"
          >
            <div class="form-group">
              <label for="text">Nombre:</label>
              <input type="text" className="form-control" id="email" />
            </div>
            <div class="form-group">
              <label for="pwd">Telefono:</label>
              <input type="text" className="form-control" id="pwd" />
            </div>
            <div class="form-group">
              <label for="pwd">Email:</label>
              <input type="email" className="form-control" id="pwd" />
            </div>
            <button type="submit" className="btn btn-dark">
              Submit
            </button>
          </form>
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
