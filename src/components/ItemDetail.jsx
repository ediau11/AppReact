import React from "react";

function ItemDetail({ id, titulo, precio, img, descripcion, categoria }) {
  return (
    <div className=" d-flex flex-wrap">
      <h2>{titulo}</h2>
      <p>{precio}</p>
    </div>
  );
}
export default ItemDetail;
