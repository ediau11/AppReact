import React, { useState } from "react";
import ImagenMezclador from "./ImagenCard/ImagenMezclador.png";

export const ItemCount = ({ stock, initial, onAdd }) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    if (contador === stock) {
      alert("Usted alcanzo el limite de productos");
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
      <div className="card cardEduardo">
        <div className="card-body">
          <h4 className="card-title">DJM-S7</h4>
          <img src={ImagenMezclador} className="imagenMezclador"></img>
          <p className="card-text">Ingrese cantidad (5Max).</p>
          <h2>{contador}</h2>
        </div>
      </div>
    </>
  );
};

export default ItemCount;

// https://stackblitz.com/edit/react-uyod7j?file=src%2FContador.js
