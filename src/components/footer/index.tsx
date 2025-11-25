// import React from 'react'

import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="popp py-5 box-border px-2.5 md:px-5 lg:px-20">
        <div className="flex flex-col justify-between gap-10 py-10 px-2.5 border-b md:flex-row md:px-10">
          <div className="font-normal text-[16px] text-[#9F9F9F] flex items-center">
            400 University Drive Suite 200 Coral <br /> Gables, <br /> FL 33134
            USA
          </div>
          <div className="font-medium">
            <p className=" text-[#9F9F9F]">Links</p>
            <ul className="leading-10 pt-2.5">
              <li onClick={() => navigate("/")} className="cursor-pointer">
                Home
              </li>
              <li onClick={() => navigate("shop")} className="cursor-pointer">
                Shop
              </li>
              <li onClick={() => navigate("/blog")} className="cursor-pointer">
                About{" "}
              </li>
              <li
                onClick={() => navigate("/contact")}
                className="cursor-pointer"
              >
                Contact
              </li>
            </ul>
          </div>
          <div className="font-medium">
            <p className=" text-[#9F9F9F]">Help</p>
            <ul className="leading-10 pt-2.5 whitespace-nowrap">
              <li>Payment Options</li>
              <li>Returns</li>
              <li>Privacy Policies</li>
            </ul>
          </div>
          <div className="font-medium">
            <p className=" text-[#9F9F9F]">Newsletter</p>
            <div className="leading-10 pt-2.5 flex flex-col gap-2.5 sm:flex-row">
              <input
                className="border-b text-[14px] outline-none"
                type="email"
                placeholder="Enter Your Email Address "
              />
              <button className=" text-[14px] text-left cursor-pointer">
                <span className="border-b pb-2.5">SUBSCRIBE</span>
              </button>
            </div>
          </div>
        </div>

        <div className="popp font-normal text-[14px] pt-5 sm:text-[16px]">
          2022 Meubel House. All rights reverved
        </div>
      </div>
    </>
  );
};

export default Footer;
