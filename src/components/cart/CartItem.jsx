import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartItem = ({ productoProp }) => {
  const carritoContext = useContext(CartContext);
  return (
    <>
      <div className="contenedorCarrito">
        <div className="cart">
          <div className="productoCarrito">
            <p>Producto:{productoProp.item.titulo}</p>
            <img
              className="imagenMezclador"
              src={productoProp.item.imagenDetalle1}
              alt="descripccion carrito"
            />
            <p>Precio:{productoProp.item.precio}</p>
            <p>Cantidad:{productoProp.quantity}</p>

            <button
              onClick={() => carritoContext.removeItem(productoProp.item.id)}
              className="btn btn-dark"
            >
              Eliminar Producto
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
