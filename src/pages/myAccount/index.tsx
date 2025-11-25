// import React from "react";
import BgImage from "../../assets/images/Rectangle1.png";
import BgImageLogo from "../../assets/images/Meubel House_Logos-05.svg";
const MyAccount = () => {
  return (
    <>
      <div className="popp box-border">
        {/* first */}
        <div
          className="py-14 w-full flex flex-col justify-center text-center box-border md:py-20"
          style={{ backgroundImage: `url(${BgImage})` }}
        >
          <div className="leading-none p-0 m-0">
            <img className="mx-auto" src={BgImageLogo} alt="" />
          </div>
          <p className="font-medium text-3xl md:text-5xl">My Account</p>
          <div className="flex gap-1 justify-center pt-2.5">
            <p className="font-medium text-[16px]">Home</p>
            <p className="font-medium">&gt;</p>
            <p className="font-light text-[16px]">My account</p>
          </div>
        </div>
        {/* second */}
        <div className="flex flex-col justify-center py-10 px-2.5 sm:flex-row sm:gap-5 sm:px-2.5 lg:py-16px lg:px-20">
          {/* left */}
          <div className="px-2.5 sm:w-1/2 lg:px-20">
            <form>
              <p className="font-semibold text-3xl pb-2.5 md:text-4xl lg:pb-7">
                Log In
              </p>
              <div className="py-2.5 flex flex-col">
                <label className="font-medium text-[16px] pb-2.5">
                  Username or email address
                </label>
                <input
                  className="border border-[#9F9F9F] p-2.5 rounded-[10px] lg:w-[25vw]"
                  type="text"
                />
              </div>
              <div className="py-2.5 flex flex-col">
                <label className="font-medium text-[16px] pb-2.5">
                  Password
                </label>
                <input
                  className="border border-[#9F9F9F] p-2.5 rounded-[10px] lg:w-[25vw] flex flex-col"
                  type="text"
                />
              </div>
              <div className="flex gap-2.5 py-3 items-center md:py-5">
                <input type="checkbox" className="size-4" />
                <label className="font-normal text-[16px]">Remember me</label>
              </div>
              <div className="flex items-center gap-2.5">
                <button className="border font-normal text-[20px] rounded-[10px] py-1.5 px-6 cursor-pointer">
                  Log In
                </button>
                <p className="font-light">Lost Your Password?</p>
              </div>
            </form>
          </div>
          {/* right */}
          <div className="px-2.5 pt-10 sm:w-1/2 lg:px-20 sm:pt-0">
            <form className="">
              <p className="font-semibold text-3xl pb-2.5 md:text-4xl lg:pb-7">
                Register
              </p>
              <div className="py-2.5 flex flex-col">
                <label className="font-medium text-[16px] pb-2.5">
                  Email address
                </label>
                <input
                  className="border border-[#9F9F9F] p-2.5 rounded-[10px] lg:w-[25vw]"
                  type="text"
                />
              </div>
              <div className="py-2.5 ">
                <p className="font-light">
                  A link to set a new password will be sent to your email
                  address.
                </p>
                <p className="font-light">
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our
                  <span className="font-semibold"> privacy policy.</span>
                </p>
              </div>
              <div className="py-2.5">
                <button className="border font-normal text-[20px] rounded-[10px] py-1.5 px-6 cursor-pointer">
                  Register
                </button>
              </div>
            </form>
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

export default MyAccount;
