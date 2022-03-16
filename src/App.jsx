import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route, navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
        </Routes>

        <Routes>
          <Route path="ItemDetailContainer" element={<ItemDetailContainer />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
