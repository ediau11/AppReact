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
          <h3 className="text-center  textoCompra ">{titulo}</h3>

          <img
            className="imgContador mx-auto d-block"
            src={imagenDetalle1}
            alt=""
          />
          <p className="text-center parrafoDetail textoCompra">{precio}$</p>
          {!compra && (
            <div className="botonesSumarRestar">
              <button onClick={restar} className="sumar" type="button">
                -
              </button>

              <span className="mx-3">{contador}</span>
              <button onClick={sumar} className="sumar" type="button">
                +
              </button>
            </div>
          )}
          <br />

          <div className="textoCompra ">
            {!compra && (
              <button
                onClick={handleAgregar}
                className="textoCompra botonAnimation margenBotonModal "
              >
                Comprar
              </button>
            )}
          </div>
          {compra && (
            <div className="btn-group margenBotones">
              <div className=" ">
                <Link to="/carrito">
                  <button
                    type="button"
                    className="  botonAnimationCarrito textoCompra "
                  >
                    Ver Carrito
                  </button>
                </Link>

                <Link to="/productos">
                  <button
                    type="button"
                    className=" botonAnimationCarrito textoCompra "
                  >
                    Seguir Comprando
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="container text-center">
        <button
          className="botonAnimationContainer  textoCompra"
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
