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
      <div className="bg-[#FBEBB5] flex justify-center items-center p-0 gap-20 h-screen font-popp">
        <div className="pt-19 pl-16 box-border">
          <p className="popp font-medium text-[64px]">
            Rocket single <br /> seater
          </p>
          <span className="popp font-medium box-border border-b-2 pb-2 text-[24px] leading-15">
            Shop Now
          </span>
        </div>
        <div className="h-screen w-1/2 flex justify-center items-center">
          <img className="h-full w-full object-cover" src={FirstImage} alt="" />
        </div>
      </div>

      <div className="popp flex bg-[#FAF4F4] justify-center items-center px-15 gap-5 box-border h-screen">
        <div className=" flex flex-col gap-25 h-full justify-center">
          <div className="h-1/2">
            <img src={SecondSecFirstImage} alt="" />
          </div>
          <div className="pl-25">
            <p className="font-medium text-4xl">Side table</p>
            <span className="font-medium text-[18px] border-b-2 pb-2">
              View More
            </span>
          </div>
        </div>
        <div className=" flex flex-col gap-25 h-full justify-center">
          <div className="h-1/2">
            <img src={SecondSecSecImage} alt="" />
          </div>
          <div className="pl-25">
            <p className="font-medium text-4xl">Side table</p>
            <span className="font-medium text-[18px] border-b-2 pb-2">
              View More
            </span>
          </div>
        </div>
      </div>
      {/* third Section */}
      <div className="popp py-10">
        <div className=" text-center font-medium">
          <p className=" text-4xl">Top Picks For You</p>
          <p className="text-[#9F9F9F] text-[16px] pt-2.5">
            Find a bright ideal to suit your taste with our great selection of
            suspension, floor and table lights.
          </p>
        </div>
        <div className="flex px-5 justify-evenly">
          <div>
            <div>
              <img src={ThirdSecFirstImage} alt="" />
            </div>
            <div>
              <p className="font-normal text-[16px]">Trenton modular sofa_3</p>
              <p className="font-medium text-2xl">Rs. 25,000.00</p>
            </div>
          </div>
          <div>
            <div>
              <img src={ThirdSecSecImage} alt="" />
            </div>
            <div>
              <p className="font-normal text-[16px]">Trenton modular sofa_3</p>
              <p className="font-medium text-2xl">Rs. 25,000.00</p>
            </div>
          </div>
          <div>
            <div>
              <img src={ThirdSecThirdImage} alt="" />
            </div>
            <div>
              <p className="font-normal text-[16px]">Trenton modular sofa_3</p>
              <p className="font-medium text-2xl">Rs. 25,000.00</p>
            </div>
          </div>
          <div>
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
          <span className="border-b-2">View More</span>
        </p>
      </div>
      {/* Fourth Section */}
      <div className="popp bg-[#FFF9E5] flex gap-5 items-center px-10 ">
        <div className="h-screen">
          <img
            className="h-full object-cover"
            src={FourthSecFirstImage}
            alt=""
          />
        </div>
        <div className="popp text-center">
          <p className="font-medium text-2xl">New Arrivals</p>
          <p className="font-bold text-5xl pt-2.5">Asgaard sofa</p>
          <button className=" border font-normal text-[20px] py-2.5 px-10 mt-7">
            Order Now
          </button>
        </div>
      </div>
      {/* fifth section */}
      <div className="popp py-10">
        <div className=" text-center font-medium">
          <p className=" text-4xl">Our Blogs</p>
          <p className="text-[#9F9F9F] text-[16px] py-2.5">
            Find a bright ideal to suit your taste with our great selection
          </p>
        </div>
        <div className="flex px-5 py-5 justify-center gap-5">
          <div>
            <div className="py-5">
              <img src={FifthSecFirstImage} alt="" />
            </div>
            <div className="text-center">
              <p className="font-normal text-[20px]">
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
              <img src={FifthSecSecImage} alt="" />
            </div>
            <div className="text-center">
              <p className="font-normal text-[20px]">
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
              <img src={FifthSecThirdImage} alt="" />
            </div>
            <div className="text-center">
              <p className="font-normal text-[20px]">
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
        <p className="font-bold text-6xl">Our Instagram</p>
        <p className="font-normal text-[20px] py-3">
          Follow our store on Instagram
        </p>
        <button className="font-normal text-[20px] bg-[#FAF4F4] px-10 py-2.5 rounded-[50px] drop-shadow-xl">
          Follow Us
        </button>
      </div>
    </>
  );
};

export default Home;
