import React from "react";
import ItemCount from "./ItemCount";
import { useState } from "react";

function ItemDetail({ lista1 }) {
  const [contador, setContador] = useState(1);
  const {
    id,
    stock,
    titulo,
    logoMarca,
    precio,
    imagenDetalle1,
    imagenDetalle2,
    definicion,
    descripcion,
  } = lista1;

  const handleAgregar = () => {
    const itemTocart = {
      id: id,
      titulo: titulo,
      precio: precio,
      descripcion: descripcion,
      stock: stock,
    };
    console.log(itemTocart);
  };

  return (
    <>
      <img className=" mx-auto d-block" src={logoMarca} />

      <div className="container">
        <h1 className="tituloDetail">{titulo}</h1>
        <p className="parrafoDetail">{definicion}</p>
        <img className="imagenDetalle1 rounded " src={imagenDetalle1}></img>
        <img className="imagenDetalle1 rounded " src={imagenDetalle2}></img>
        <h3 className="centradoPrecio">{precio}$</h3>
      </div>
      <ItemCount
        stock={stock}
        initial={1}
        contador={contador}
        setContador={setContador}
        handleAgregar={handleAgregar}
        lista1={lista1}
      />

      <div></div>
    </>
  );
}
export default ItemDetail;
