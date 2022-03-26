import React from "react";
import Carrito from "./Navbar/Logos/CarritoCompra.png";

const CartWidget = () => {
  return (
    <>
      <div>
        <img src={Carrito} className="navbar-brand" />
      </div>
      <h6>
        <span className="badge bg-secondary">0</span>
      </h6>
    </>
  );
};

export default CartWidget;
