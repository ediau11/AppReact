import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className=" container text-center contenedor404 fondoCart">
        <h1 className="mt-5 text-center textoError404">
          Lo sentimos, la pagina que buscas no existe
        </h1>
        <h1 className="logo404">404</h1>
        <h3>Page Not Found</h3>

        <Link to="/">
          <button className="botonAnimationContainer textoError404">
            Volver al inicio
          </button>
        </Link>
      </div>
    </>
  );
};

export default Error;
