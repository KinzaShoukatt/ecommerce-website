// import React from "react";
import BgImage from "../../assets/images/Rectangle1.png";
import BgImageLogo from "../../assets/images/Meubel House_Logos-05.svg";
import TableImage from "../../assets/images/Asgaard-sofa.png";
import DeleteIcon from "../../assets/icons/ant-design_delete-filled.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const Cart = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const myProduct = location?.state?.thisProduct;
  const [cartItem, setCartItem] = useState(myProduct);
  return (
    <>
      <div className="popp box-border overflow-x-hidden">
        {/* first */}
        <div
          className="h-[50vh] w-full flex flex-col justify-center text-center box-border"
          style={{ backgroundImage: `url(${BgImage})` }}
        >
          <div className="leading-none p-0 m-0">
            <img className="mx-auto" src={BgImageLogo} alt="" />
          </div>
          <p className="font-medium  text-3xl md:text-5xl">Cart</p>
          <div className="flex gap-1 justify-center pt-2.5">
            <p className="font-medium text-[16px]">Home</p>
            <p className="font-medium">&gt;</p>
            <p className="font-light text-[16px]">Cart</p>
          </div>
        </div>
        {/* second */}
        <div className="w-full flex flex-col gap-2.5 py-10 px-5 md:flex-row md:px-10 md:py-16">
          {/* left */}
          <div className="w-full overflow-x-auto md:w-3/4 ">
            <table className="w-full table-auto min-w-[600px]">
              {/* <table className="w-full table-fixed"> */}
              <thead>
                <tr className="font-medium text-[16px] bg-[#FFF9E5] text-left">
                  <th className="w-[120px] py-3.5"></th>
                  <th className="w-[120px] py-3.5">Product</th>
                  <th className="w-[120px] py-3.5">Price</th>
                  <th className="w-[120px] py-3.5">Quantity</th>
                  <th className="w-[140px] py-3.5">Subtotal</th>
                  <th className="w-[60px] py-3.5"></th>
                  {/* <th className="w-2/12 py-3.5"></th>
                  <th className="min-w-[200px] py-3.5">Product</th>
                  <th className="w-2/12 py-3.5">Price</th>
                  <th className="w-2/12 py-3.5">Quantity</th>
                  <th className="w-2/12 py-3.5">Subtotal</th>
                  <th className="w-1/12 py-3.5"></th> */}
                </tr>
              </thead>
              <tbody>
                {cartItem ? (
                  <tr>
                    <td className="py-10">
                      <img
                        className="size-20 md:size-35"
                        src={cartItem.image}
                        alt=""
                      />
                    </td>
                    <td className="font-normal text-[16px] text-[#9F9F9F] py-10">
                      {cartItem.name}
                    </td>
                    <td className="font-normal text-[16px] text-[#9F9F9F] py-10">
                      {cartItem.price}
                    </td>
                    <td className="py-10 ">
                      <span className="border border-[#9F9F9F] py-1 px-2.5 rounded-[5px]">
                        1
                      </span>
                    </td>
                    <td className="font-normal text-[16px] py-10">
                      {cartItem.price}
                    </td>
                    <td className="py-10">
                      <img
                        className="cursor-pointer"
                        onClick={() => setCartItem(null)}
                        src={DeleteIcon}
                        alt=""
                      />
                    </td>
                  </tr>
                ) : (
                  <tr>
                    <td className="py-10">
                      <img
                        className="size-20 md:size-35"
                        src={TableImage}
                        alt=""
                      />
                    </td>
                    <td className="font-normal text-[16px] text-[#9F9F9F] py-10">
                      Asgaard Sofa
                    </td>
                    <td className="font-normal text-[16px] text-[#9F9F9F] py-10">
                      Rs. 250,000.00
                    </td>
                    <td className="py-10 ">
                      <span className="border border-[#9F9F9F] py-1 px-2.5 rounded-[5px]">
                        1
                      </span>
                    </td>
                    <td className="font-normal text-[16px] py-10">
                      Rs. 250,000.00
                    </td>
                    <td className="py-10">
                      <img
                        className="cursor-pointer"
                        onClick={() => setCartItem(null)}
                        src={DeleteIcon}
                        alt=""
                      />
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          {/* right */}
          <div className="box-border bg-[#FFF9EF] px-5 py-3.5 w-full md:w-1/4 max-w-full">
            <p className="font-semibold text-2xl pb-2.5 whitespace-nowrap md:w-3xl md:pb-5">
              Cart Totals
            </p>
            <div className="flex justify-between gap-1.5 py-1.5">
              <p className="font-medium text-[16px]">Subtotal</p>
              <p className="font-normal whitespace-nowrap">
                {cartItem ? cartItem.price : "Rs. 250,000.00"}
              </p>
            </div>
            <div className="flex justify-between gap-1.5 py-1.5 items-center">
              <p className="font-medium text-[16px]">Total</p>
              <p className="font-medium text-[20px] text-[#B88E2F] whitespace-nowrap">
                {cartItem ? cartItem.price : " Rs. 250,000.00"}
              </p>
            </div>
            <div className="pt-3  flex">
              <button
                className="border font-normal text-[20px] rounded-[10px] py-1.5 px-7 mx-auto cursor-pointer whitespace-nowrap"
                onClick={() =>
                  navigate("/checkout", { state: { product: myProduct } })
                }
              >
                Check Out
              </button>
            </div>
          </div>
        </div>
        {/* third */}
        <div className="bg-[#FAF4F4] justify-between gap-2.5 py-20 px-5 lg:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-medium text-2xl md:text-3xl">Free Delivery</p>
            <p className="font-normal text-[16px] text-[#9F9F9F] md:text-xl">
              For all oders over $50, consectetur <br /> adipim scing elit.
            </p>
          </div>
          <div>
            <p className="font-medium text-2xl md:text-3xl">90 Days Return</p>
            <p className="font-normal text-[16px] text-[#9F9F9F] md:text-xl">
              If goods have problems, consectetur <br /> adipim scing elit.
            </p>
          </div>
          <div>
            <p className="font-medium text-2xl md:text-3xl">Secure Payment</p>
            <p className="font-normal text-[16px] text-[#9F9F9F] md:text-xl">
              100% secure payment, consectetur adipim scing elit.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
