import React from "react";
import { Link } from "react-router-dom";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";

const Item = ({ producto }) => {
  return (
    <>
      <div className="fondoCart">
        <div className="color">
          <div className="row">
            <div className="col-sm-3 p-3 ">
              <div className="card cardEduardo">
                <div className="card-body">
                  <h2 className="card-title textoCompra">{producto.titulo}</h2>
                  <p className="textoCompra"> {producto.descripcion}</p>
                  <img src={producto.img} className="imagenMezclador"></img>
                  <h4 className="textoCompra">{producto.precio} $</h4>

                  <Link
                    to={`/detail/${producto.id}`}
                    element={<ItemDetailContainer />}
                  >
                    <button className="botonAnimationContainer textoCompra">
                      Detalles
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
{
}
