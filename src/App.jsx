import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Footer from "./components/Footer/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route, navigate } from "react-router-dom";
import Inicio from "./components/Inicio.jsx";
import { CartProvider } from "./context/CartContext";
import { Carrito } from "./././components/cart/Carrito";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />

          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/Productos" element={<ItemListContainer />} />
            <Route
              path="/Productos/:categoryId"
              element={<ItemListContainer />}
            />

            <Route
              path="/Productos/:categoryId/:OtroParam"
              element={<ItemListContainer />}
            />
            <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
            <Route path="/Carrito" element={<Carrito />} />
          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
