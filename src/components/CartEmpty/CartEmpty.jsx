import React from "react";
import { Link } from "react-router-dom";

const CartEmpty = () => {
  return (
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
  );
};

export default CartEmpty;
