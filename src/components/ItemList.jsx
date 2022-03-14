import React from "react";
import Item from "./Item";

function ItemList({ lista }) {
  return (
    <div className=" d-flex flex-wrap">
      {lista.map((producto) => (
        <Item producto={producto} key={producto.id} />
      ))}
    </div>
  );
}

export default ItemList;
