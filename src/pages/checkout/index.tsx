// import React from "react";
import BgImage from "../../assets/images/Rectangle1.png";
import BgImageLogo from "../../assets/images/Meubel House_Logos-05.svg";
import { useLocation } from "react-router-dom";
const CheckOut = () => {
  const location = useLocation();
  const product = location?.state?.product || [];
  const productName = product?.name || "";
  const productPrice = product?.price || 0;
  return (
    <div className="popp box-border">
      {/* first */}
      <div
        className="h-[50vh] flex flex-col justify-center text-center box-border"
        style={{ backgroundImage: `url(${BgImage})` }}
      >
        <div className="leading-none p-0 m-0">
          <img className="mx-auto" src={BgImageLogo} alt="" />
        </div>
        <p className="font-medium text-5xl">checkout</p>
        <div className="flex gap-1 justify-center pt-2.5">
          <p className="font-medium text-[16px]">Home</p>
          <p className="font-medium">&gt;</p>
          <p className="font-light text-[16px]">Checkout</p>
        </div>
      </div>
      {/* second */}
      <div className="flex justify-center py-16 px-20">
        {/* leftDiv */}
        <div className="w-1/2 px-20 box-border">
          <p className="font-semibold text-4xl pb-7">Billing details</p>

          <div className="py-2 flex w-full gap-2.5">
            <div className="flex-1">
              <label className="font-medium text-[16px]">First Name</label>
              <input
                className="w-full box-border border border-[#9F9F9F] p-2.5 rounded-[10px] mt-2.5"
                type="text"
              />
            </div>
            <div className="flex-1">
              <label className="font-medium text-[16px] pb-2.5">
                Last Name
              </label>
              <input
                className="w-full box-border border border-[#9F9F9F] p-2.5 rounded-[10px] mt-2.5"
                type="text"
              />
            </div>
          </div>

          <div className="py-2 flex flex-col">
            <label className="font-medium text-[16px]">
              Company Name (Optional)
            </label>
            <input
              className="w-full border border-[#9F9F9F] p-2.5 rounded-[10px] mt-2.5"
              type="text"
            />
          </div>

          <div className="py-2 flex flex-col">
            <label className="font-medium text-[16px]">Country / Region</label>
            <select className="w-full border border-[#9F9F9F] p-2.5 rounded-[10px] mt-2.5">
              <option value="">Select Province</option>
              <option value="">Punjab</option>
              <option value="">Sindh</option>
              <option value="">Khyber Pakhtunkhwa</option>
              <option value="">Gilgit Baltistan</option>
              <option value="">Azad Jammu & Kashmir</option>
            </select>
          </div>

          <div className="py-2 flex flex-col">
            <label className="font-medium text-[16px]">Street address</label>
            <input
              className="w-full border border-[#9F9F9F] p-2.5 rounded-[10px] mt-2.5"
              type="text"
            />
          </div>

          <div className="py-2 flex flex-col">
            <label className="font-medium text-[16px]">Town / City</label>
            <input
              className="w-full border border-[#9F9F9F] p-2.5 rounded-[10px] mt-2.5"
              type="text"
            />
          </div>

          <div className="py-2 flex flex-col">
            <label className="font-medium text-[16px]">Province</label>
            <select className="w-full border border-[#9F9F9F] p-2.5 rounded-[10px] mt-2.5">
              <option value="">Select Country</option>
              <option value="">Punjab</option>
              <option value="">Afghanistan</option>
              <option value="">Algeria</option>
              <option value="">Azerbaijan</option>
              <option value="">Bahrain</option>
              <option value="">Canada</option>
              <option value="">Iceland</option>
              <option value="">Libya</option>
              <option value="">Mexico</option>
            </select>
          </div>

          <div className="py-2 flex flex-col">
            <label className="font-medium text-[16px]">ZIP Code</label>
            <input
              className="w-full border border-[#9F9F9F] p-2.5 rounded-[10px] mt-2.5"
              type="text"
            />
          </div>

          <div className="py-2 flex flex-col">
            <label className="font-medium text-[16px]">Phone</label>
            <input
              className="w-full border border-[#9F9F9F] p-2.5 rounded-[10px] mt-2.5"
              type="text"
            />
          </div>

          <div className="py-2 flex flex-col">
            <label className="font-medium text-[16px]">Email address</label>
            <input
              className="w-full border border-[#9F9F9F] p-2.5 rounded-[10px] mt-2.5"
              type="text"
            />
          </div>

          <div className="py-2 flex flex-col">
            <input
              className="w-full border border-[#9F9F9F] p-2.5 rounded-[10px] mt-2.5"
              type="text"
              placeholder="Additional Information"
            />
          </div>
        </div>
        {/* right Div */}
        <div className="w-1/2 px-20 py-2.5">
          <div className="border-b border-b-[#D9D9D9]">
            <div className="flex justify-between py-2.5 font-medium text-2xl">
              <p>Product</p>
              <p>Subtotal</p>
            </div>
            <div className="flex justify-between py-2.5 gap-6">
              <p className="font-normal text-[16px] text-[#9F9F9F]">
                {productName}
              </p>
              <p className="font-light text-[16px] whitespace-nowrap pr-1">
                {productPrice}
              </p>
            </div>
            <div className="flex justify-between py-2.5 gap-6">
              <p className="font-normal text-[16px]">Subtotal</p>
              <p className="font-light text-[16px] pr-1">{productPrice}</p>
            </div>
            <div className="flex justify-between py-2.5 gap-6">
              <p className="font-normal text-[16px]">Total</p>
              <p className="font-bold text-2xl text-[#B88E2F] ">
                {productPrice}
              </p>
            </div>
          </div>
          <div className="py-4">
            <div>
              <input id="directBank" type="radio" className="cursor-pointer" />
              <label
                htmlFor="directBank"
                className="font-normal pl-2.5 cursor-pointer"
              >
                Direct Bank Transfer
              </label>
            </div>

            <p className="font-light text-[#9F9F9F]">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>
            <div className="pt-2.5 pb-1.5 ">
              <input
                id="bank"
                name="payment"
                type="radio"
                className="cursor-pointer"
              />
              <label
                htmlFor="bank"
                className="font-medium pl-2.5 text-[#9F9F9F] cursor-pointer"
              >
                Direct Bank Transfer
              </label>
            </div>
            <div className="pb-2.5 pt-1.5">
              <input
                id="cash"
                name="payment"
                type="radio"
                className="cursor-pointer"
              />
              <label
                htmlFor="cash"
                className="font-medium pl-2.5 text-[#9F9F9F] cursor-pointer"
              >
                Cash On Delivery
              </label>
            </div>
            <p className="font-light">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our
              <span className="font-semibold"> privacy policy.</span>
            </p>
          </div>
          <div className="py-2.5 flex">
            <button className="border font-normal text-[20px] rounded-[10px] py-1.5 px-7 mx-auto cursor-pointer">
              Place Order
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
  );
};

export default CheckOut;
