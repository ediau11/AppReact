import React from "react";

function ItemDetail({ lista1 }) {
  const {
    id,
    titulo,
    precio,
    img,
    descripcion,
    definicion,
    imagenDetalle1,
    imagenDetalle2,
    logoMarca,
  } = lista1;
  return (
    <>
      <img className=" mx-auto d-block" src={logoMarca} />

      <div className="container">
        <h1 className="tituloDetail">{titulo}</h1>
        <p className="parrafoDetail">{definicion}</p>
        <img className="imagenDetalle1 rounded " src={imagenDetalle1}></img>
        <img className="imagenDetalle1 rounded " src={imagenDetalle2}></img>
      </div>

      <div></div>
    </>
  );
}
export default ItemDetail;
