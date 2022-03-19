import React from "react";
import { Link } from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer";

const Item = ({ producto }) => {
  return (
    <>
      <div className="row">
        <div className="col-lg-4">
          <div className="card cardEduardo">
            <div className="card-body">
              <h2 className="card-title">{producto.titulo}</h2>
              <p>{producto.descripcion}</p>
              <img src={producto.img} className="imagenMezclador"></img>
              <h4>{producto.precio} $</h4>

              <Link
                to={`/detail/${producto.id}`}
                element={<ItemDetailContainer />}
              >
                <button className="btn btn-dark">Detalle</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
{
  /*  */
}
