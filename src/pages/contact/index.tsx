// import React from "react";
import BgImage from "../../assets/images/Rectangle1.png";
import BgImageLogo from "../../assets/images/Meubel House_Logos-05.svg";
import LocationIcon from "../../assets/icons/locationIcon.svg";
import PhoneIcon from "../../assets/icons/phoneIcon.svg";
import ClockIcon from "../../assets/icons/clockIcon.svg";

const Contact = () => {
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
          <p className="font-medium text-3xl md:text-5xl">Contact</p>
          <div className="flex gap-1 justify-center pt-2.5">
            <p className="font-medium text-[16px]">Home</p>
            <p className="font-medium">&gt;</p>
            <p className="font-light text-[16px]">Contact</p>
          </div>
        </div>
        {/* second */}
        <div className="pt-5 px-2.5 md:pt-20 md:px-25">
          <div className="flex flex-col items-center">
            <p className="font-semibold text-2xl md:text-4xl">
              Get In Touch With Us
            </p>
            <p className="font-normal text-[14px] md:text-[16px] text-[#9F9F9F] py-2.5 text-center">
              For More Information About Our Product & Services. Please Feel
              Free To Drop Us <br /> An Email. Our Staff Always Be There To Help
              You Out. Do Not Hesitate!
            </p>
          </div>
          <div className="flex flex-col py-5 md:py-16 md:flex-row">
            {/* left */}
            <div className="w-full px-5 md:px-25  md:w-1/2">
              <div className="flex py-2 gap-1 md:gap-4 md:py-5">
                <img className="size-4 md:size-5.5" src={LocationIcon} alt="" />
                <p className="font-normal text-[14px] md:text-[16px]">
                  <span className="font-medium text-xl md:text-2xl">
                    Address
                  </span>
                  <br />
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
              <div className="flex py-2 gap-1 md:gap-4 md:py-5">
                <img className="size-4 md:size-5.5" src={PhoneIcon} alt="" />
                <p className="font-normal text-[14px] md:text-[16px]">
                  <span className="font-medium text-[14px] md:text-2xl">
                    Phone
                  </span>
                  <br />
                  Mobile: +(84) 546-6789 <br />
                  Hotline: +(84) 456-6789
                </p>
              </div>
              <div className="flex py-2 gap-1 md:gap-4 md:py-5">
                <img className="size-4 md:size-5.5" src={ClockIcon} alt="" />
                <p className="font-normal text-[14px] md:text-[16px]">
                  <span className="font-medium text-[14px] md:text-2xl">
                    Working Time
                  </span>
                  <br />
                  Monday-Friday: 9:00 - 22:00 <br />
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
            {/* right */}
            <div className="w-full my-2.5 md:pl-5 md:pr-20 md:w-1/2 md:my-0">
              <form action="">
                <div className="py-3 flex flex-col">
                  <label className="font-medium text-[16px]">Your Name</label>
                  <input
                    className="w-full border border-[#9F9F9F] p-3 rounded-[10px] mt-2.5 text-[#9F9F9F] font-normal c"
                    type="text"
                    placeholder="Abc"
                  />
                </div>
                <div className="py-3 flex flex-col">
                  <label className="font-medium text-[16px]">
                    Email address
                  </label>
                  <input
                    className="w-full border border-[#9F9F9F] p-3 rounded-[10px] mt-2.5 text-[#9F9F9F] font-normal text-[14px] md:text-[16px]"
                    type="text"
                    placeholder="Abc@gmail.com"
                  />
                </div>
                <div className="py-3 flex flex-col">
                  <label className="font-medium text-[16px]">Subject</label>
                  <input
                    className="w-full border border-[#9F9F9F] p-3 rounded-[10px] mt-2.5 text-[#9F9F9F] font-normal text-[14px] md:text-[16px]"
                    type="text"
                    placeholder="This is an optional"
                  />
                </div>
                <div className="py-3 flex flex-col">
                  <label className="font-medium text-[16px]">Message</label>
                  <textarea
                    className="w-full border border-[#9F9F9F] p-3 rounded-[10px] mt-2.5 text-[#9F9F9F] font-normal text-[14px] md:text-[16px]"
                    placeholder="Hi! i'd to ask about"
                  ></textarea>
                </div>
                <button className="border font-normal text-[16px] rounded-[10px] py-1.5 px-10 mt-5 cursor-pointer">
                  Submit
                </button>
              </form>
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

export default Contact;
