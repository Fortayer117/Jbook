import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Login from "./pages/Login";
import Manga from "./pages/Manga";
import Packs from "./pages/Packs";
import Tshirt from "./pages/Tshirt";
import Fegurines from "./pages/Fegurines";
import Basket from "./pages/Basket";
import SingleProduct from "./components/SingleProduct";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Signin />} />
        <Route path="/cart" element={<Basket />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<SingleProduct/>} />
        <Route path="/manga" element={<Manga />} />
        <Route path="/packs" element={<Packs />} />
        <Route path="/tshirt" element={<Tshirt />} />
        <Route path="/fegurines" element={<Fegurines />} />
      </Routes>
    </>
  );
}

export default App;
