import React from "react";
import { Routes, Route } from "react-router-dom";
import Shop from "./pages/shop/intex";
import MyAccount from "./pages/myAccount";
import CheckOut from "./pages/checkout";
import Cart from "./pages/cart";
import Contact from "./pages/contact";
import Home from "./pages/home";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/shop" element={<Shop />}></Route>
      <Route path="/my-account" element={<MyAccount />}></Route>
      <Route path="/checkout" element={<CheckOut />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
  );
};

export default AppRoutes;
