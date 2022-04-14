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
        <h4 className="textoCompra">
          Su producto escogido fue: {productoProp.item.titulo}
        </h4>
        <h5 className="textoCompra">Cantidad: {productoProp.quantity}</h5>
        <h6 className="textoCompra">Precio: {productoProp.item.precio}</h6>

        <button
          onClick={() => carritoContext.removeItem(productoProp.item.id)}
          className="botonAnimationCarrito textoCompra "
        >
          Eliminar Producto
        </button>
      </div>
    </>
  );
};
