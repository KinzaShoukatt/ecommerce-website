import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Shop from "./pages/shop/intex";
import MyAccount from "./pages/myAccount";
import CheckOut from "./pages/checkout";
import Cart from "./pages/cart";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Blog from "./pages/blog";
import Review from "./pages/review";

const AppRoutes: React.FC = () => {
  const pathName = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName]);
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/shop" element={<Shop />}></Route>
      <Route path="/my-account" element={<MyAccount />}></Route>
      <Route path="/checkout" element={<CheckOut />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/blog" element={<Blog />}></Route>
      <Route path="/review" element={<Review />}></Route>
    </Routes>
  );
};

export default AppRoutes;
