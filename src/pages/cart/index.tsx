// import React from "react";
import BgImage from "../../assets/images/Rectangle1.png";
import BgImageLogo from "../../assets/images/Meubel House_Logos-05.svg";
import SofaImage from "../../assets/images/Group-137.png";
import DeleteIcon from "../../assets/icons/ant-design_delete-filled.svg";

const Cart = () => {
  return (
    <>
      <div className="popp box-border">
        {/* first */}
        <div
          className="h-[50vh] flex flex-col justify-center text-center box-border"
          style={{ backgroundImage: `url(${BgImage})` }}
        >
          <div className="leading-none p-0 m-0">
            <img className="mx-auto" src={BgImageLogo} alt="" />
          </div>
          <p className="font-medium text-5xl">Cart</p>
          <div className="flex gap-1 justify-center pt-2.5">
            <p className="font-medium text-[16px]">Home</p>
            <p className="font-medium">&gt;</p>
            <p className="font-light text-[16px]">Cart</p>
          </div>
        </div>
        {/* second */}
        <div className="flex py-16 px-16 gap-5">
          {/* left */}
          <div className="w-10/12">
            <table className="w-full">
              <thead>
                <tr className="font-medium text-[16px] bg-[#FFF9E5] text-left">
                  <th className="py-3.5"></th>
                  <th className="py-3.5">Product</th>
                  <th className="py-3.5">Price</th>
                  <th className="py-3.5">Quantity</th>
                  <th className="py-3.5">Subtotal</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-10">
                    <img src={SofaImage} alt="" />
                  </td>
                  <td className="font-normal text-[16px] text-[#9F9F9F] py-10">
                    Asgaard sofa
                  </td>
                  <td className="font-normal text-[16px] text-[#9F9F9F] py-10">
                    Rs. 250,000.00
                  </td>
                  <td className="py-10">
                    <span className="border border-[#9F9F9F] py-1 px-2.5 rounded-[5px]">
                      1
                    </span>
                  </td>
                  <td className="font-normal text-[16px] py-10">
                    Rs. 250,000.00
                  </td>
                  <td className="py-10">
                    <img src={DeleteIcon} alt="" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* right */}
          <div className="bg-[#FFF9EF] px-7 py-3.5 w-fit">
            <p className="font-semibold text-3xl pb-5">Cart Totals</p>
            <div className="flex justify-between gap-2.5 py-1.5">
              <p className="font-medium text-[16px]">Subtotal</p>
              <p className="font-normal whitespace-nowrap">Rs. 250,000.00</p>
            </div>
            <div className="flex justify-between gap-2.5 py-1.5 items-center">
              <p className="font-medium text-[16px]">Total</p>
              <p className="font-medium text-[20px] text-[#B88E2F] whitespace-nowrap">
                Rs. 250,000.00
              </p>
            </div>
            <div className="pt-3 pb-8 flex">
              <button className="border font-normal text-[20px] rounded-[10px] py-1.5 px-7 mx-auto">
                Check Out
              </button>
            </div>
          </div>
        </div>
        {/* third */}
        <div className="bg-[#FAF4F4] flex justify-between py-20 px-20">
          <div>
            <p className="font-medium text-3xl">Free Delivery</p>
            <p className="font-normal text-[20px] text-[#9F9F9F]">
              For all oders over $50, consectetur <br /> adipim scing elit.
            </p>
          </div>
          <div>
            <p className="font-medium text-3xl">90 Days Return</p>
            <p className="font-normal text-[20px] text-[#9F9F9F]">
              If goods have problems, consectetur <br /> adipim scing elit.
            </p>
          </div>
          <div>
            <p className="font-medium text-3xl">Secure Payment</p>
            <p className="font-normal text-[20px] text-[#9F9F9F]">
              100% secure payment, consectetur <br /> adipim scing elit.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
