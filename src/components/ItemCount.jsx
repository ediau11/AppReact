import React, { useState } from "react";
import ItemDetail from "./ItemDetailContainer/ItemDetail";

export const ItemCount = ({
  stock,
  onAdd,
  contador,
  setContador,
  handleAgregar,
  lista1,
}) => {
  const { img, precio, titulo, descripcion, logoMarca, imagenDetalle1 } =
    lista1;

  const sumar = () => {
    if (contador === stock) {
    }
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <>
      <div className="offcanvas offcanvas-end" id="demo">
        <div className="offcanvas-header">
          <img src={logoMarca} className=" mx-auto d-block" />
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>

        <div className="offcanvas-body">
          <h3 className="text-center tituloItemCount">{titulo}</h3>
          <p>{descripcion}</p>
          <img
            className="imgContador mx-auto d-block"
            src={imagenDetalle1}
            alt=""
          />
          <p className="text-center parrafoDetail">{precio}$</p>
          <div className="botonesSumarRestar">
            <button onClick={restar} className="btn btn-dark" type="button">
              -
            </button>

            <span className="mx-3">{contador}</span>
            <button onClick={sumar} className="btn btn-darkS" type="button">
              +
            </button>
          </div>
          <br />
          <div className="botonComprar">
            <button onClick={handleAgregar} className="btn btn-dark my-2 ">
              Comprar
            </button>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-3">
        <h3></h3>

        <button
          className="btn btn-dark botonDetalle1"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#demo"
        >
          Comprar!
        </button>
      </div>
    </>
  );
};

export default ItemCount;

// https://stackblitz.com/edit/react-uyod7j?file=src%2FContador.js
