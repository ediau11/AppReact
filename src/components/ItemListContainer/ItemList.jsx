import React from "react";
import Item from "../ItemListContainer/Item";

function ItemList({ lista }) {
  return (
    <div className=" d-flex flex-wrap fondoCart">
      {lista.map((producto) => (
        <Item producto={producto} key={producto.id} />
      ))}
    </div>
  );
}

export default ItemList;
