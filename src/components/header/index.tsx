// import React from "react";
import AccountAlert from "../../assets/images/account-alert-icon.svg";
import SearchIcon from "../../assets/images/search-icon.svg";
import HeartIcon from "../../assets/images/heart-icon.svg";
import CartIcon from "../../assets/images/cart-icon.svg";
import { useLocation, useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const isHome = location.pathname === "/";
  return (
    <>
      <div
        className={`flex box-border text-text justify-end px-20 py-4 items-center ${
          isHome ? "bg-[#FBEBB5]" : "bg-white"
        }`}
      >
        <div className="me-40">
          <ul className="popp font-medium text-[16px] flex gap-15 items-center">
            <li onClick={() => navigate("/")} className="cursor-pointer">
              Home
            </li>
            <li onClick={() => navigate("/shop")} className="cursor-pointer">
              Shop
            </li>
            <li>About</li>
            <li onClick={() => navigate("/contact")} className="cursor-pointer">
              Contact
            </li>
          </ul>
        </div>
        <div className="flex gap-12 items-center ">
          <img
            onClick={() => navigate("/my-account")}
            className="h-6 cursor-pointer"
            src={AccountAlert}
            alt=""
          />
          <img className="h-6" src={SearchIcon} alt="" />
          <img
            onClick={() => navigate("/cart")}
            className="h-6 cursor-pointer"
            src={HeartIcon}
            alt=""
          />
          <img
            onClick={() => navigate("/checkout")}
            className="h-6 cursor-pointer"
            src={CartIcon}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Header;
