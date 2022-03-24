import React from "react";
import Carrito from "./Navbar/Logos/CarritoCompra.png";

const CartWidget = () => {
  return (
    <>
      <div>
        <img src={Carrito} className="navbar-brand" />
      </div>
    </>
  );
};

export default CartWidget;
