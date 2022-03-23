import React, { useState } from "react";
import ItemDetail from "./ItemDetail";

export const ItemCount = ({
  stock,
  onAdd,
  lista1,
  contador,
  setContador,
  handleAgregar,
}) => {
  const { img, precio, titulo } = lista1;

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
          <h1 className="offcanvas-title text-center">Finalizar Compra!</h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>
        <div className="offcanvas-body">
          <h1 className="text-center">{titulo}</h1>
          <img className="imgContador mx-auto d-block" src={img} alt="" />
          <p className="text-center">{precio}$</p>
          <button onClick={restar} class="btn btn-secondary" type="button">
            -
          </button>

          <span className="mx-3">{contador}</span>
          <button onClick={sumar} class="btn btn-secondary" type="button">
            +
          </button>
          <br />
          <button onClick={lista1} className="btn btn-dark my-2">
            Comprar
          </button>
        </div>
      </div>

      <div className="container-fluid mt-3">
        <h3></h3>

        <button
          className="btn btn-dark"
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
