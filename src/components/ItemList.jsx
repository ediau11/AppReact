import React from "react";

function ItemList({ lista }) {
  return (
    <div>
      {lista.map((productos, i) => (
        <h1 key={i}>{productos.name}</h1>
      ))}
    </div>
  );
}

export default ItemList;
