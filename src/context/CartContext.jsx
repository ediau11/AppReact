import { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addItem = (item, quantity) => {
    const NewProduct = {
      item: item,
      quantity: quantity,
    };

    // const newCart = this.isInCart(item.idMeal)
    //   ? this.updateItem(item.idMeal, item.quantity + 1)
    //   : [...cart, item];
    // setCart(newCart);

    console.log("new product", NewProduct);
    setCart((prev) => [...prev, { item, quantity }]);
  };
  const removeItem = (itemId) => {
    const nuevosProductos = cart.filter(
      (producto) => producto.item.id !== itemId
    );
    setCart(nuevosProductos);
    console.log(nuevosProductos, "nuevosProd");
  };

  const clear = () => {
    setCart([]);
  };
  // const total = (itemId) => {
  //   const totalCompras = cart(
  //     (producto) => producto.precio * producto.nombre !== itemId
  //   );
  // };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
