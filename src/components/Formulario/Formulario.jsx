import React from "react";
import { db } from "../../utils/firebase";
import { addDoc, Timestamp, collection } from "firebase/firestore";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import OrdenConfirm from "../OrdenConfirm/OrdenConfirm";
import CartEmpty from "../CartEmpty/CartEmpty";
import { useNavigate } from "react-router-dom";

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

                <input type="text" className="form-control" id="email" />
              </div>

              <div className="form-group textoCompra">
                <label>Telefono:</label>

                <input type="text" className="form-control" id="pwd" />
              </div>

              <div className="form-group textoCompra">
                <label>Email:</label>

                <input type="email" className="form-control" id="pwd" />
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
      {/* 
      {refOrder && (
        <div className="text-center p-5 mt-5">
          <h1 className="textoCompra">Listo!</h1>

          <h3 className="textoCompra mt-5">Muchas gracias por su compra!</h3>

          <p className="textoCompra mt margenFormulario">
            Su orden {refOrder.id} esta siendo procesada
          </p>

          <button
            className="botonAnimationCarrito mt-5 textoCompra"
            onClick={() => navigate("/Productos")}
          >
            Volver a comprar
          </button>
        </div>
      )} */}
    </>
  );
};

export default Formulario;
