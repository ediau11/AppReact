import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartItem = ({ productoProp }) => {
  const carritoContext = useContext(CartContext);
  return (
    <>
      <div class="container contenedorCarrito text-center">
        <img
          className="imagenMezclador"
          src={productoProp.item.imagenDetalle1}
          alt=""
        />
        <h4>Su producto escogido fue: {productoProp.item.titulo}</h4>
        <h5>Cantidad: {productoProp.quantity}</h5>
        <h6>Precio: {productoProp.item.precio}</h6>

        <button
          onClick={() => carritoContext.removeItem(productoProp.item.id)}
          className="btn btn-dark "
        >
          Eliminar Producto
        </button>
      </div>
    </>
  );
};
