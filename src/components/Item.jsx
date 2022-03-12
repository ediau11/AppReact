import React from "react";

const Item = ({ producto }) => {
  return (
    <div>
      <div class="row">
        <div class="col-sm-3">
          <div className="card cardEduardo">
            <div className="card-body">
              <h2 className="card-title">{producto.titulo}</h2>
              <p>{producto.descripcion}</p>
              <img src={producto.img} className="imagenMezclador"></img>
              <h4>{producto.precio} $</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
