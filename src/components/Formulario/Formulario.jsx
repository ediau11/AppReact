import React from "react";
import { db } from "../../utils/firebase";
import { addDoc, Timestamp, collection } from "firebase/firestore";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import OrdenConfirm from "../OrdenConfirm/OrdenConfirm";
import CartEmpty from "../CartEmpty/CartEmpty";

const Formulario = () => {
  const [refOrder, setRefOrder] = useState();
  const { clear, cart, getTotalPrice, getTotalCount } = useContext(CartContext);
  const sendOrder = async (e) => {
    e.preventDefault();
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
      total: getTotalPrice(),
      date: Timestamp.fromDate(new Date()),
    };

    console.log(newOrder);
    addDoc(orderCollection, newOrder)
      .then((res) => setRefOrder(res))

      .catch((error) => console.log(error))

      .finally(() => clear());
  };

  if (refOrder) {
    return <OrdenConfirm refOrder={refOrder} />;
  }

  return (
    <>
      {!refOrder && getTotalCount() < 1 ? (
        <CartEmpty />
      ) : (
        <div className="fondoCart container text-center">
          <h1 className="text-center textoCompra textoFormulario">
            Ingresa tus datos para finalizar tu compra
          </h1>
          <div className=" container containerFormulario text-center">
            <form
              className="contenedorFormulario"
              onSubmit={sendOrder}
              role="form"
            >
              <div className="form-group textoCompra">
                <label>Nombre:</label>

                <input
                  className="form-control"
                  id="email"
                  type="text"
                  pattern="[A-Z a-z]+"
                  minLength="1"
                  maxLength="40"
                  required
                  placeholder="Ingrese nombre"
                />
              </div>

              <div className="form-group textoCompra">
                <label>Telefono:</label>

                <input
                  minLength="8"
                  maxLength="10"
                  pattern="[0-9]+"
                  required
                  type="text"
                  className="form-control"
                  id="pwd"
                  placeholder="Ingrese telefono"
                />
              </div>

              <div className="form-group textoCompra">
                <label>Email:</label>

                <input
                  minLength="5"
                  maxLength="50"
                  pattern="[A-Za-z0-9 @.]+"
                  required
                  type="email"
                  className="form-control"
                  id="pwd"
                  placeholder="Ingrese correo electronico"
                />
              </div>

              <button
                type="submit"
                className="botonAnimationContainer botonForm"
              >
                Enviar Orden!
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Formulario;
