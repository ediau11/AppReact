import React from "react";
import { useNavigate } from "react-router-dom";

const OrdenConfirm = (refOrder) => {
  const navigate = useNavigate();
  return (
    <>
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
    </>
  );
};

export default OrdenConfirm;
