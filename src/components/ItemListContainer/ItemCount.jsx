import React from "react";
import { Link } from "react-router-dom";

export const ItemCount = ({
  stock,
  contador,
  setContador,
  handleAgregar,
  lista1,
  compra,
}) => {
  const { precio, titulo, logoMarca, imagenDetalle1 } = lista1;

  const sumar = () => {
    if (contador === stock) {
    }
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <>
      <div className="offcanvas offcanvas-start" id="demo">
        <div className="offcanvas-header">
          <img src={logoMarca} className=" mx-auto d-block" />
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>

        <div className="offcanvas-body">
          <h3 className="text-center tituloItemCount">{titulo}</h3>

          <img
            className="imgContador mx-auto d-block"
            src={imagenDetalle1}
            alt=""
          />
          <p className="text-center parrafoDetail">{precio}$</p>
          {!compra && (
            <div className="botonesSumarRestar">
              <button onClick={restar} className="btn btn-dark" type="button">
                -
              </button>

              <span className="mx-3">{contador}</span>
              <button onClick={sumar} className="btn btn-dark" type="button">
                +
              </button>
            </div>
          )}
          <br />

          <div className="botonComprar">
            {!compra && (
              <button onClick={handleAgregar} className="btn btn-dark my-2 ">
                Comprar
              </button>
            )}
          </div>
          {compra && (
            <div className="btn-group botonesUnidos ">
              <Link to="/carrito">
                <button type="button" className="btn btn-dark   ">
                  Ver Carrito
                </button>
              </Link>

              <Link to="/productos">
                <button type="button" className="btn btn-dark  ">
                  Seguir Comprando
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="container-fluid mt-3">
        <h3></h3>

        <button
          className="btn btn-dark botonDetalle1"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#demo"
        >
          Comprar!
        </button>
      </div>
    </>
  );
};

export default ItemCount;
