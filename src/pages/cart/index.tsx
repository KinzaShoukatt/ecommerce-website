// import React from "react";
import BgImage from "../../assets/images/Rectangle1.png";
import BgImageLogo from "../../assets/images/Meubel House_Logos-05.svg";
import TableImage from "../../assets/images/Asgaard-sofa.png";
import DeleteIcon from "../../assets/icons/ant-design_delete-filled.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

type Product = {
  id?: number;
  name: string;
  price: string | number;
  image: string;
  quantity?: number;
  subtotal: number;
};

const Cart = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const myProduct = location?.state?.thisProduct || [];
  const [cartItems, setCartItems] = useState<Product[]>(myProduct);

  const removeItem = (id?: number) => {
    if (!id) return;
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  const subtotal = cartItems.reduce((total, item) => {
    const price = Number(String(item.price).replace(/[^0-9]/g, ""));
    return total + price * (item.quantity || 1);
  }, 0);

  return (
    <>
      <div className="popp box-border overflow-x-hidden">
        {/* first */}
        <div
          className="py-14 w-full flex flex-col justify-center text-center box-border md:py-20"
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
                </tr>
              </thead>
              <tbody>
                {cartItems.length > 0 ? (
                  cartItems.map((item) => {
                    const price = Number(
                      String(item.price).replace(/[^0-9]/g, "")
                    );
                    return (
                      <tr key={item.id}>
                        <td className="py-5">
                          <img
                            className="size-20 md:size-35"
                            src={item.image}
                            alt=""
                          />
                        </td>
                        <td className="font-normal text-[16px] text-[#9F9F9F] py-5">
                          {item.name}
                        </td>
                        <td className="font-normal text-[16px] text-[#9F9F9F] py-5">
                          {item.price}
                        </td>
                        <td className="py-5">
                          <span className="border border-[#9F9F9F] py-1 px-2.5 rounded-[5px]">
                            {item.quantity || 1}
                          </span>
                        </td>
                        <td className="font-normal text-[16px] py-5">
                          {price * (item.quantity || 1)}
                        </td>
                        <td className="py-5">
                          <img
                            className="cursor-pointer w-5"
                            src={DeleteIcon}
                            alt="delete"
                            onClick={() => removeItem(item.id)}
                          />
                        </td>
                      </tr>
                    );
                  })
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
                        // onClick={() => setCartItems(false)}
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
          <div className="box-border bg-[#FFF9EF] px-5 pt-3.5 pb-8 w-full max-h-fit rounded-[5px] md:w-1/4 max-w-full">
            <p className="font-semibold text-2xl pb-2.5 whitespace-nowrap md:w-3xl md:pb-5">
              Cart Totals
            </p>
            <div className="flex justify-between gap-1.5 py-1.5">
              <p className="font-medium text-[16px]">Subtotal</p>
              <p className="font-normal whitespace-nowrap">
                Rs. {subtotal ? subtotal : "250,000.00"}
              </p>
            </div>
            <div className="flex justify-between gap-1.5 py-1.5 items-center">
              <p className="font-medium text-[16px]">Total</p>
              <p className="font-medium text-[20px] text-[#B88E2F] whitespace-nowrap">
                Rs. {subtotal ? subtotal : "250,000.00"}
              </p>
            </div>
            <div className="pt-3  flex">
              <button
                className="border font-normal text-[20px] rounded-[10px] py-1.5 px-7 mx-auto cursor-pointer whitespace-nowrap"
                onClick={() =>
                  navigate("/checkout", {
                    state: { thisProduct: myProduct, subtotal: subtotal },
                  })
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
