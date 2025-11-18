// import React from "react";
import BgImage from "../../assets/images/Rectangle1.png";
import BgImageLogo from "../../assets/images/Meubel House_Logos-05.svg";
import SecSecFirstLogo from "../../assets/icons/Vector (2).svg";
import SecSecSecLogo from "../../assets/icons/Vector.svg";
import SecSecThirdLogo from "../../assets/icons/Vector (1).svg";
import ThirdSecFirstImage from "../../assets/images/Mask-group1.png";
import ThirdSecSecImage from "../../assets/images/Mask-group2.png";
import ThirdSecThirdImage from "../../assets/images/Mask-group3.png";
import ThirdSecFourthImage from "../../assets/images/Mask-group4.png";
import ThirdSecFiftImage from "../../assets/images/Grain-coffee-table.png";
import ThirdSecSixthImage from "../../assets/images/Kent-coffee-table.png";
import ThirdSecSeventhImage from "../../assets/images/Round-coffee-table_color.png";
import ThirdSecEightImage from "../../assets/images/Reclaimed-teak-coffee-table.png";
import ThirdSecNinthImage from "../../assets/images/Plain-console.png";
import ThirdSecTenthImage from "../../assets/images/Reclaimed-teak-Sideboard.png";
import ThirdSecEleventhImage from "../../assets/images/SJP08251.png";
import ThirdSecTwelevthImage from "../../assets/images/Bella-chair-and-table.png";
import ThirdSecThirteenImage from "../../assets/images/Granite-square-side-table.png";
import ThirdSecFourteenImage from "../../assets/images/Asgaard-sofa.png";
import ThirdSecFifteenImage from "../../assets/images/Maya-sofa-three-seater.png";
import ThirdSecSixteenImage from "../../assets/images/Outdoor-sofa-set.png";
const Shop = () => {
  return (
    <>
      <div className="popp box-border">
        <div
          className="h-[50vh] flex flex-col justify-center text-center box-border"
          style={{ backgroundImage: `url(${BgImage})` }}
        >
          <div className="leading-none p-0 m-0">
            <img className="mx-auto" src={BgImageLogo} alt="" />
          </div>
          <p className="font-medium text-5xl">Shop</p>
          <div className="flex gap-1 justify-center pt-2.5">
            <p className="font-medium text-[16px]">Home</p>
            <p className="font-medium">&gt;</p>
            <p className="font-light text-[16px]">Shop</p>
          </div>
        </div>
        {/* second */}
        <div className="bg-[#FAF4F4] flex justify-between mt-5 py-5 px-10 box-border">
          <div className="flex items-center ">
            <div className="flex gap-3.5 border-r-2 px-5">
              <img src={SecSecFirstLogo} alt="" />
              <p className="font-normal text-[20px]">Filter</p>
              <img src={SecSecSecLogo} alt="" />
              <img src={SecSecThirdLogo} alt="" />
            </div>
            <div className="px-5">
              <p className="font-normal text-[16px]">
                Showing 1–16 of 32 results
              </p>
            </div>
          </div>
          <div className="flex gap-5 box-border">
            <div className="flex gap-2.5 items-center box-border">
              <p className="font-normal text-[20px]">Show</p>
              <p className="bg-white py-2 px-3.5 text-[#9F9F9F] font-normal text-[20px]">
                16
              </p>
            </div>
            <div className="flex gap-2.5 items-center box-border">
              <p className="font-normal text-[20px]">Shot By</p>
              <p className="bg-white py-2 pl-3.5 pr-10 text-[#9F9F9F] font-normal text-[20px]">
                Default
              </p>
            </div>
          </div>
        </div>
        {/* third */}
        <div className="popp px-20 pb-15">
          <div className="flex justify-evenly py-5">
            <div>
              <div>
                <img src={ThirdSecFirstImage} alt="" />
              </div>
              <div>
                <p className="font-normal text-[16px]">
                  Trenton modular sofa_3
                </p>
                <p className="font-medium text-2xl">Rs. 25,000.00</p>
              </div>
            </div>
            <div>
              <div>
                <img src={ThirdSecSecImage} alt="" />
              </div>
              <div>
                <p className="font-normal text-[16px]">
                  Granite dining table with <br /> dining chair 1
                </p>
                <p className="font-medium text-2xl">Rs. 25,000.00</p>
              </div>
            </div>
            <div>
              <div>
                <img src={ThirdSecThirdImage} alt="" />
              </div>
              <div>
                <p className="font-normal text-[16px]">
                  Outdoor bar table and <br /> stool
                </p>
                <p className="font-medium text-2xl">Rs. 25,000.00</p>
              </div>
            </div>
            <div>
              <div>
                <img src={ThirdSecFourthImage} alt="" />
              </div>
              <div>
                <p className="font-normal text-[16px]">
                  Plain console with teak <br /> mirror
                </p>
                <p className="font-medium text-2xl">Rs. 25,000.00</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-evenly py-5">
            <div className="w-full sm:w-1/2 md:w-1/4">
              <div className="size-60">
                <img
                  className="max-h-full w-full  cover"
                  src={ThirdSecFiftImage}
                  alt=""
                />
              </div>
              <div>
                <p className="font-normal text-[16px]">Grain coffee table</p>
                <p className="font-medium text-2xl">Rs. 15,000.00</p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4">
              <div className="size-60">
                <img
                  className="h-full w-full  cover"
                  src={ThirdSecSixthImage}
                  alt=""
                />
              </div>
              <div>
                <p className="font-normal text-[16px]">Kent coffee table</p>
                <p className="font-medium text-2xl">Rs. 225,000.00</p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4">
              <div className="size-60">
                <img
                  className="h-full w-full cover"
                  src={ThirdSecSeventhImage}
                  alt=""
                />
              </div>
              <div>
                <p className="font-normal text-[16px]">
                  Round coffee table_color 2
                </p>
                <p className="font-medium text-2xl">Rs. 251,000.00</p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4">
              <div className="size-60">
                <img
                  className="h-full w-full cover"
                  src={ThirdSecEightImage}
                  alt=""
                />
              </div>
              <div>
                <p className="font-normal text-[16px]">
                  Reclaimed teak coffee table
                </p>
                <p className="font-medium text-2xl">Rs. 25,200.00</p>
              </div>
            </div>
          </div>

          <div className="flex justify-evenly py-5">
            <div className="w-full sm:w-1/2 md:w-1/4">
              <div className="size-60">
                <img
                  className="h-full w-full cover"
                  src={ThirdSecNinthImage}
                  alt=""
                />
              </div>
              <div>
                <p className="font-normal text-[16px]">Plain console_</p>
                <p className="font-medium text-2xl">Rs. 258,200.00</p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4">
              <div className="size-60">
                <img
                  className="h-full w-full cover"
                  src={ThirdSecTenthImage}
                  alt=""
                />
              </div>
              <div>
                <p className="font-normal text-[16px]">
                  Reclaimed teak Sideboard
                </p>
                <p className="font-medium text-2xl">Rs. 200,000.00</p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4">
              <div className="size-60">
                <img
                  className="h-full w-full  cover"
                  src={ThirdSecEleventhImage}
                  alt=""
                />
              </div>
              <div>
                <p className="font-normal text-[16px]">SJP_0825</p>
                <p className="font-medium text-2xl">Rs. 200,000.00</p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4">
              <div className="size-60">
                <img
                  className="h-full w-full  cover"
                  src={ThirdSecTwelevthImage}
                  alt=""
                />
              </div>
              <div>
                <p className="font-normal text-[16px]">Bella chair and table</p>
                <p className="font-medium text-2xl">Rs. 100,000.00</p>
              </div>
            </div>
          </div>

          <div className="flex justify-evenly py-5">
            <div className="w-full sm:w-1/2 md:w-1/4">
              <div className="size-60">
                <img
                  className="h-full w-full cover"
                  src={ThirdSecThirteenImage}
                  alt=""
                />
              </div>
              <div>
                <p className="font-normal text-[16px]">
                  Granite square side table
                </p>
                <p className="font-medium text-2xl">Rs. 258,800.00</p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4">
              <div className="size-60">
                <img
                  className="h-full w-full cover"
                  src={ThirdSecFourteenImage}
                  alt=""
                />
              </div>
              <div>
                <p className="font-normal text-[16px]">Asgaard sofa</p>
                <p className="font-medium text-2xl">Rs. 250,000.00</p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4">
              <div className="size-60">
                <img
                  className="h-full w-full cover"
                  src={ThirdSecFifteenImage}
                  alt=""
                />
              </div>
              <div>
                <p className="font-normal text-[16px]">
                  Maya sofa three seater
                </p>
                <p className="font-medium text-2xl">Rs. 115,000.00</p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4">
              <div className="size-60">
                <img
                  className="h-full w-full cover"
                  src={ThirdSecSixteenImage}
                  alt=""
                />
              </div>
              <div>
                <p className="font-normal text-[16px]">Outdoor sofa set</p>
                <p className="font-medium text-2xl">Rs. 244,000.00</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-5 font-normal text[20px] pt-15">
            <p className="py-2 px-4 bg-[#FBEBB5] rounded-lg">1</p>
            <p className="py-2 px-4 bg-[#FFF9E5] rounded-lg">2</p>
            <p className="py-2 px-4 bg-[#FFF9E5] rounded-lg">3</p>
            <p className="py-2 px-4 bg-[#FFF9E5] rounded-lg font-light">Next</p>
          </div>
        </div>
        {/* fourth */}
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

export default Shop;
