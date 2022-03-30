import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartItem = ({ productoProp, totalProp }) => {
  const carritoContex = useContext(CartContext);
  return (
    <>
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
            onClick={() => carritoContex.removeItem(productoProp.item.id)}
            className="btn btn-dark"
          >
            Eliminar Producto
          </button>
        </div>
      </div>
      <p>total:$ {totalProp}</p>
    </>
  );
};
