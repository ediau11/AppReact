import React from "react";
import { db } from "../../utils/firebase";
import { addDoc, Timestamp, collection } from "firebase/firestore";
import swal from "sweetalert";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
const Formulario = () => {
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
    swal({
      title: "Muchas gracias por tu compra",
      text: `Tu numero identificador es: ${refOrder.id}`,
      icon: "success",
      timer: 3000,
    });
  };
  return (
    <>
      <div className=" container containerFormulario text-center">
        <form className="contenedorFormulario" onSubmit={sendOrder} role="form">
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
            Enviar Orden!
          </button>
        </form>
      </div>
    </>
  );
};

export default Formulario;
