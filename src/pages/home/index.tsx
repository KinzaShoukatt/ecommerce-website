// import React from "react";
import FirstImage from "../../assets/images/single-seater.png";
import SecondSecFirstImage from "../../assets/images/sidetable.png";
import SecondSecSecImage from "../../assets/images/Mask-group.png";
import ThirdSecFirstImage from "../../assets/images/Mask-group1.png";
import ThirdSecSecImage from "../../assets/images/Mask-group2.png";
import ThirdSecThirdImage from "../../assets/images/Mask-group3.png";
import ThirdSecFourthImage from "../../assets/images/Mask-group4.png";
import FourthSecFirstImage from "../../assets/images/sofa.png";
import FifthSecFirstImage from "../../assets/images/Rectangle13.png";
import FifthSecSecImage from "../../assets/images/Rectangle14.png";
import FifthSecThirdImage from "../../assets/images/Rectangle15.png";
import ClockIcon from "../../assets/images/Group.svg";
import CalenderIcon from "../../assets/images/uil_calender.svg";
import SixthSecImage from "../../assets/images/Rectangle17.png";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* first */}
      <div className=" bg-[#FBEBB5] flex flex-col-reverse justify-center items-center py-10 font-popp h-auto md:flex-row md:gap-20">
        <div className="w-full pl-10 box-border md:w-1/2 md:pl-26 md:pt-19">
          <p className="popp font-medium text-2xl md:text-5xl lg:text-[64px]">
            Rocket single <br />
            seater
          </p>
          <span
            className="popp font-medium box-border border-b-2 pb-2 leading-15 cursor-pointer text-[20px] md:text-[24px]"
            onClick={() => navigate("/shop")}
          >
            Shop Now
          </span>
        </div>
        <div className="h-screen w-full flex justify-center items-center lg:w-1/2">
          <img
            className="h-full w-full md:object-contain"
            src={FirstImage}
            alt=""
          />
        </div>
      </div>
      {/* second */}
      <div className="popp flex flex-col bg-[#FAF4F4] justify-center items-center py-5 px-15 box-border h-auto md:flex-row gap-5">
        <div className=" flex flex-col h-full justify-center">
          <div className="h-1/2">
            <img src={SecondSecFirstImage} alt="" />
          </div>
          <div>
            <p className="font-medium text-2xl md:text-4xl">Side table</p>
            <span
              className="font-medium text-16px md:text-[18px] border-b-2 pb-2 cursor-pointer"
              onClick={() => navigate("/shop")}
            >
              View More
            </span>
          </div>
        </div>
        <div className=" flex flex-col h-full justify-center">
          <div className="h-1/2">
            <img src={SecondSecSecImage} alt="" />
          </div>
          <div>
            <p className="font-medium text-2xl md:text-4xl">Side table</p>
            <span
              className="font-medium text-16px md:text-[18px] border-b-2 pb-2 cursor-pointer"
              onClick={() => navigate("/shop")}
            >
              View More
            </span>
          </div>
        </div>
      </div>

      {/* third Section */}
      <div className="popp py-10">
        <div className=" text-center font-medium">
          <p className="text-2xl md:text-4xl">Top Picks For You</p>
          <p className="text-[#9F9F9F] text-[16px] pt-2.5 px-2.5">
            Find a bright ideal to suit your taste with our great selection of
            suspension, floor and table lights.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col justify-center items-center">
            <div>
              <img src={ThirdSecFirstImage} alt="" />
            </div>
            <div>
              <p className="font-normal text-[16px]">Trenton modular sofa_3</p>
              <p className="font-medium text-2xl">Rs. 25,000.00</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div>
              <img src={ThirdSecSecImage} alt="" />
            </div>
            <div>
              <p className="font-normal text-[16px]">Trenton modular sofa_3</p>
              <p className="font-medium text-2xl">Rs. 25,000.00</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div>
              <img src={ThirdSecThirdImage} alt="" />
            </div>
            <div>
              <p className="font-normal text-[16px]">Trenton modular sofa_3</p>
              <p className="font-medium text-2xl">Rs. 25,000.00</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div>
              <img src={ThirdSecFourthImage} alt="" />
            </div>
            <div>
              <p className="font-normal text-[16px]">Trenton modular sofa_3</p>
              <p className="font-medium text-2xl">Rs. 25,000.00</p>
            </div>
          </div>
        </div>
        <p className="popp font-medium text-[20px] text-center pt-7 ">
          <span
            className="border-b-2 cursor-pointer"
            onClick={() => navigate("/shop")}
          >
            View More
          </span>
        </p>
      </div>
      {/* Fourth Section */}
      <div className="popp bg-[#FFF9E5] flex flex-col pb-10 items-center lg:flex-row">
        <div className="h-screen w-full lg:w-3/4">
          <img
            className="h-full w-full lg:object-cover"
            src={FourthSecFirstImage}
            alt=""
          />
        </div>
        <div className="popp w-full flex flex-col text-center items-center justify-center lg:w-1/4 lg:pr-10 ">
          <p className="font-medium text-2xl">New Arrivals</p>
          <p className="font-bold text-3xl md:text-5xl pt-2.5">Asgaard sofa</p>
          <button
            className=" border font-normal py-2.5 px-10 mt-7 cursor-pointer whitespace-nowrap text-[16px] md:text-xl"
            onClick={() => navigate("/shop")}
          >
            Order Now
          </button>
        </div>
      </div>
      {/* fifth section */}
      <div className="popp py-10">
        <div className=" text-center font-medium">
          <p className="text-2xl md:text-4xl">Our Blogs</p>
          <p className="text-[#9F9F9F] text-[16px] py-2.5 px-5">
            Find a bright ideal to suit your taste with our great selection
          </p>
        </div>
        <div className="justify-items-center gap-2.5 px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="py-5">
              <img
                src={FifthSecFirstImage}
                alt=""
                className="overflow-hidden"
              />
            </div>
            <div className="text-center">
              <p className="font-normal text-[16px] md:text-xl">
                Going all-in with millennial design
              </p>
              <p className="font-medium text-2xl text-center py-2.5">
                <span className="border-b-2">Read More</span>
              </p>
              <div className="flex justify-center gap-5 pt-2.5">
                <div className="flex text-nowrap gap-1.5 items-center">
                  <img src={ClockIcon} alt="" />
                  <p>5 min</p>
                </div>
                <div className="flex gap-1.5 items-center">
                  <img src={CalenderIcon} alt="" />
                  <p>12th Oct 2022</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="py-5">
              <img src={FifthSecSecImage} alt="" className="overflow-hidden" />
            </div>
            <div className="text-center">
              <p className="font-normal text-[16px] md:text-xl">
                Going all-in with millennial design
              </p>
              <p className="font-medium text-2xl text-center py-2.5">
                <span className="border-b-2">Read More</span>
              </p>
              <div className="flex justify-center gap-5 pt-2.5">
                <div className="flex text-nowrap gap-1.5 items-center">
                  <img src={ClockIcon} alt="" />
                  <p>5 min</p>
                </div>
                <div className="flex gap-1.5 items-center">
                  <img src={CalenderIcon} alt="" />
                  <p>12th Oct 2022</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="py-5">
              <img
                src={FifthSecThirdImage}
                alt=""
                className="overflow-hidden"
              />
            </div>
            <div className="text-center">
              <p className="font-normal text-[16px] md:text-xl">
                Going all-in with millennial design
              </p>
              <p className="font-medium text-2xl text-center py-2.5">
                <span className="border-b-2">Read More</span>
              </p>
              <div className="flex justify-center gap-5 pt-2.5">
                <div className="flex text-nowrap gap-1.5 items-center">
                  <img src={ClockIcon} alt="" />
                  <p>5 min</p>
                </div>
                <div className="flex gap-1.5 items-center">
                  <img src={CalenderIcon} alt="" />
                  <p>12th Oct 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="popp font-medium text-[20px] text-center pt-7 ">
          <span
            className="border-b-2 cursor-pointer"
            onClick={() => navigate("/blog")}
          >
            View More
          </span>
        </p>
      </div>
      {/* sixth section */}
      <div
        className="h-[50vh] popp flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${SixthSecImage})` }}
      >
        <p className="font-bold text-3xl md:text-6xl">Our Instagram</p>
        <p className="font-normal text-[16px] md:text-xl py-3">
          Follow our store on Instagram
        </p>
        <button className="font-normal text-[16px] bg-[#FAF4F4] px-10 py-2.5 rounded-[50px] drop-shadow-xl md:text-xl">
          Follow Us
        </button>
      </div>
    </>
  );
};

export default Home;
