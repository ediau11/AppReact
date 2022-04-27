import React from "react";
import Carrito from "../../components/Navbar/Logos/CarritoCompra.png";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const carritoContext = useContext(CartContext);

  return (
    <>
      <div>
        <Link to="Carrito">
          <img src={Carrito} className="navbar-brand" />
        </Link>
      </div>
      {carritoContext.getTotalCount() > 0 && (
        <span className="badge bg-secondary">
          {carritoContext.getTotalCount()}
        </span>
      )}
    </>
  );
};

export default CartWidget;
