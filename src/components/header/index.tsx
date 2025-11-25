// import React from "react";
import AccountAlert from "../../assets/images/account-alert-icon.svg";
import SearchIcon from "../../assets/images/search-icon.svg";
import HeartIcon from "../../assets/images/heart-icon.svg";
import CartIcon from "../../assets/images/cart-icon.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const isHome = location.pathname === "/";
  const [menuIcons, setMenuIcons] = useState(false);
  return (
    <>
      <div
        className={`flex gap-2.5 box-border text-text py-4 items-center sticky top-0 shadow-2xs z-10  ${
          isHome ? "bg-[#FBEBB5]" : "bg-white"
        }`}
      >
        <div className="w-max lg:w-3/4">
          <ul className="popp font-medium text-[14px] flex gap-6 items-center pl-2.5 sm:text-[16px] sm:gap-10 sm:pl-5 lg:justify-end lg:pr-40 lg:gap-15">
            <li onClick={() => navigate("/")} className="cursor-pointer">
              Home
            </li>
            <li onClick={() => navigate("/shop")} className="cursor-pointer">
              Shop
            </li>
            <li onClick={() => navigate("/blog")} className="cursor-pointer">
              About
            </li>
            <li onClick={() => navigate("/contact")} className="cursor-pointer">
              Contact
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex gap-12 items-center w-3/12 justify-center">
          <img
            onClick={() => navigate("/my-account")}
            className="h-6 cursor-pointer"
            src={AccountAlert}
            alt=""
          />
          <img className="h-6 cursor-pointer" src={SearchIcon} alt="" />
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
        <div className="absolute right-2.5 md:right-10 lg:hidden">
          <GiHamburgerMenu
            size={18}
            onClick={() => setMenuIcons(true)}
            className="cursor-pointer"
          />
        </div>
        {menuIcons && (
          <div className="bg-white absolute top-12 right-2.5 rounded-lg items-center py-5 px-14 shadow-2xl">
            <div className="flex flex-col gap-2.5">
              <img
                onClick={() => {
                  setMenuIcons(false);
                  navigate("/my-account");
                }}
                className="h-6 cursor-pointer"
                src={AccountAlert}
                alt=""
              />
              <img className="h-6 cursor-pointer" src={SearchIcon} alt="" />
              <img
                onClick={() => {
                  setMenuIcons(false);
                  navigate("/cart");
                }}
                className="h-6 cursor-pointer"
                src={HeartIcon}
                alt=""
              />
              <img
                onClick={() => {
                  setMenuIcons(false);
                  navigate("/checkout");
                }}
                className="h-6 cursor-pointer"
                src={CartIcon}
                alt=""
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
