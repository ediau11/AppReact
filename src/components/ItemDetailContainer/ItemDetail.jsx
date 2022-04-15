import React from "react";
import ItemCount from "../ItemListContainer/ItemCount";
import { useState } from "react";
import { useCart } from "../../context/CartContext";

function ItemDetail({ lista1 }) {
  const { addItem, RemoveItem } = useCart();
  const [compra, setCompra] = useState(false);
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
    addItem(lista1, contador);
    setCompra(true);
  };

  return (
    <>
      <div className="fondoCart">
        <img className=" mx-auto d-block" src={logoMarca} />

        <div className="container">
          <h1 className="tituloDetail textoCompra">{titulo}</h1>
          <p className="parrafoDetail textoCompra">{definicion}</p>
          <img className="imagenDetalle1 rounded " src={imagenDetalle1}></img>
          <img className="imagenDetalle1 rounded " src={imagenDetalle2}></img>
          <h3 className="centradoPrecio textoCompra">{precio}$</h3>
        </div>
        <ItemCount
          stock={stock}
          initial={1}
          contador={contador}
          setContador={setContador}
          handleAgregar={handleAgregar}
          lista1={lista1}
          compra={compra}
        />
      </div>
    </>
  );
}
export default ItemDetail;
