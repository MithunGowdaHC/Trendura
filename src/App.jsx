import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ABout from "./pages/ABout";
import Cart from "./pages/Cart";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import Orders from "./pages/Orders";
import PlaceOrder from "./pages/PlaceOrder";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] ">
      <Navbar/>      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element = {<ABout/>}/>
        <Route path="/cart" element={<Cart/>} />
        <Route path="/collection" element={<Collection/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/place-order" element={<PlaceOrder/>}/>
        <Route path="/product:ProductId" element={<Product/>}/>
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
