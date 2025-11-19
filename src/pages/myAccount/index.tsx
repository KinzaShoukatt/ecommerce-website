// import React from "react";
import BgImage from "../../assets/images/Rectangle1.png";
import BgImageLogo from "../../assets/images/Meubel House_Logos-05.svg";
const MyAccount = () => {
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
          <p className="font-medium text-5xl">My Account</p>
          <div className="flex gap-1 justify-center pt-2.5">
            <p className="font-medium text-[16px]">Home</p>
            <p className="font-medium">&gt;</p>
            <p className="font-light text-[16px]">My account</p>
          </div>
        </div>
        {/* second */}
        <div className="flex justify-center py-16 px-20">
          <div className="w-1/2 px-20">
            <p className="font-semibold text-4xl pb-7">Log In</p>
            <div className="py-2.5">
              <p className="font-medium text-[16px] pb-2.5">
                Username or email address
              </p>
              <input
                className="border border-[#9F9F9F] p-2.5 rounded-[10px] w-[25vw]"
                type="text"
              />
            </div>
            <div className="py-3">
              <p className="font-medium text-[16px] pb-2.5">Password</p>
              <input
                className="border border-[#9F9F9F] p-2.5 rounded-[10px] w-[25vw]"
                type="text"
              />
            </div>
            <div className="flex gap-2.5 py-5 items-center">
              <input type="checkbox" className="size-4" />
              <label className="font-normal text-[16px]">Remember me</label>
            </div>
            <div className="flex items-center gap-2.5">
              <button className="border font-normal text-[20px] rounded-[10px] py-1.5 px-6 cursor-pointer">
                Log In
              </button>
              <p className="font-light">Lost Your Password?</p>
            </div>
          </div>
          <div className="w-1/2 px-20">
            <p className="font-semibold text-4xl pb-7">Register</p>
            <div className="py-2.5">
              <p className="font-medium text-[16px] pb-2.5">Email address</p>
              <input
                className="border border-[#9F9F9F] p-2.5 rounded-[10px] w-[25vw]"
                type="text"
              />
            </div>
            <div className=" py-2.5 ">
              <p className="font-light">
                A link to set a new password will be sent to your email <br />{" "}
                address.
              </p>
              <p className="font-light">
                Your personal data will be used to support your <br />
                experience throughout this website, to manage access to your
                account, and for other purposes described in our
                <span className="font-semibold"> privacy policy.</span>
              </p>
            </div>
            <div className="py-2.5">
              <button className="border font-normal text-[20px] rounded-[10px] py-1.5 px-6 cursor-pointer">
                Register
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

export default MyAccount;
