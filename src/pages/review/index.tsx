// import React from 'react'
import FullStarIcon from "../../assets/icons/fullStarIcon.svg.svg";
import HalfStarIcon from "../../assets/icons/halfStarIcon.svg";
import FacebookIcon from "../../assets/icons/facebookIcon.svg";
import LinkedinIcon from "../../assets/icons/linkedinIcon.svg";
import TwitterIcon from "../../assets/icons/twitterIcon.svg";
import Image1 from "../../assets/images/Group107.png";
import Image2 from "../../assets/images/Group106.png";
import ThirdSecFirstImage from "../../assets/images/Mask-group1.png";
import ThirdSecSecImage from "../../assets/images/Mask-group2.png";
import ThirdSecThirdImage from "../../assets/images/Mask-group3.png";
import ThirdSecFourthImage from "../../assets/images/Mask-group4.png";
import { useLocation, useNavigate } from "react-router-dom";

const Review = () => {
  const location = useLocation();
  const product = location?.state?.products;

  const navigate = useNavigate();

  return (
    <div className="popp box-border">
      <div className="border-b border-[#D9D9D9]">
        <div className="flex gap-5 py-10 px-20">
          <div className="flex gap-3.5 border-r-2 border-[#9F9F9F] pr-3.5 ">
            <p className="font-normal text-[16px] text-[#9F9F9F]">Home</p>
            <p>&gt;</p>
            <p className="font-normal text-[16px] text-[#9F9F9F]">Shop</p>
          </div>
          <p className="font-normal text-[16px]">{product.name}</p>
        </div>
        {/* second */}
        <div className="flex w-full px-20">
          {/* left */}
          <div className="w-1/2">
            <div className="flex gap-7">
              <div>
                <img
                  className="size-20 bg-[#FFF9EF] mb-2.5 rounded-[5px]"
                  src={product.image}
                  alt=""
                />
                <img
                  className="size-20 bg-[#FFF9EF] mb-2.5 rounded-[5px]"
                  src={product.image}
                  alt=""
                />
                <img
                  className="size-20 bg-[#FFF9EF] mb-2.5 rounded-[5px]"
                  src={product.image}
                  alt=""
                />
                <img
                  className="size-20 bg-[#FFF9EF] mb-2.5 rounded-[5px]"
                  src={product.image}
                  alt=""
                />
              </div>
              <div className="bg-[#FFF9EF] h-[70vh] w-2/3 rounded-[10px]">
                <img
                  className="w-full h-full object-contain"
                  src={product.image}
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* right */}
          <div className="w-1/2">
            <div className="border-b border-[#9F9F9F] pr-25 pb-12">
              <p className="font-normal text-[44px]">{product.name}</p>
              <p className="font-medium text-2xl text-[#9F9F9F]">
                {product.price}
              </p>
              <div className="flex py-2.5">
                <div className="flex gap-1 border-r border-[#9F9F9F] pr-2.5">
                  <img src={FullStarIcon} alt="" />
                  <img src={FullStarIcon} alt="" />
                  <img src={FullStarIcon} alt="" />
                  <img src={FullStarIcon} alt="" />
                  <img src={HalfStarIcon} alt="" />
                </div>
                <p className="font-normal text-[13px] pl-3.5 text-[#9F9F9F]">
                  5 Customer Review
                </p>
              </div>
              <p className="font-normal text-[13px]">
                Setting the bar as one of the loudest speakers in its class, the
                Kilburn is a compact, stout-hearted hero with a well-balanced
                audio which boasts a clear midrange and extended highs for a
                sound.
              </p>
              <p className="font-normal text-[14px] text-[#9F9F9F] py-3.5">
                Size
              </p>
              <div className="flex gap-2.5 font-normal text[13px]">
                <p className="size-8 flex justify-center items-center bg-[#FBEBB5] rounded-lg">
                  L
                </p>
                <p className="size-8 flex justify-center items-center bg-[#FAF4F4] rounded-lg">
                  XL
                </p>
                <p className="size-8 flex justify-center items-center bg-[#FAF4F4] rounded-lg">
                  XS
                </p>
              </div>
              <p className="font-normal text-[14px] text-[#9F9F9F] py-3.5">
                Color
              </p>
              <div className="flex gap-2.5 font-normal text[13px]">
                <p className="size-8 bg-[#816DFA] rounded-[50%]"></p>
                <p className="size-8 bg-black rounded-[50%]"></p>
                <p className="size-8 bg-[#CDBA7B] rounded-[50%]"></p>
              </div>
              <div className="mt-5 flex gap-3">
                <div className="box-border flex justify-between items-center font-medium text-[16px] border border-[#9F9F9F] rounded-lg gap-7 p-1.5">
                  <p>-</p>
                  <p>1</p>
                  <p>+</p>
                </div>
                <button
                  className="font-normal text-[20px] border rounded-lg py-2.5 px-8 cursor-pointer"
                  onClick={() =>
                    navigate("/cart", { state: { thisProduct: product } })
                  }
                >
                  Add To Cart
                </button>
              </div>
            </div>
            <div className="py-8">
              <div className="flex gap-5 font-normal text-[16px] text-[#9F9F9F] py-1.5">
                <p>SKU</p>
                <p>:</p>
                <p>SS001</p>
              </div>
              <div className="flex gap-5 font-normal text-[16px] text-[#9F9F9F] py-1.5">
                <p>Category</p>
                <p>:</p>
                <p>Sofas</p>
              </div>
              <div className="flex gap-5 font-normal text-[16px] text-[#9F9F9F] py-1.5">
                <p>Tags</p>
                <p>:</p>
                <p>Sofa, Chair, Home, Shop</p>
              </div>
              <div className="flex gap-5 font-normal text-[16px] text-[#9F9F9F] py-1.5">
                <p>Share</p>
                <p>:</p>
                <div className="flex gap-2.5">
                  <img src={FacebookIcon} alt="" />
                  <img src={LinkedinIcon} alt="" />
                  <img src={TwitterIcon} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* third */}
      <div className="py-10 border-b border-[#D9D9D9]">
        <div className="flex gap-10 justify-center">
          <p className="font-normal text-2xl">Description</p>
          <p className="font-normal text-2xl text-[#9F9F9F]">
            Additional Information
          </p>
          <p className="font-normal text-2xl text-[#9F9F9F]">Reviews [5]</p>
        </div>
        <div className="px-40 py-5 text-[#9F9F9F] text-justify">
          <p className="">
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p className="py-3.5">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
        </div>
        <div className="flex px-20 gap-5">
          <div className="w-1/2 h-1/2">
            <img src={Image1} alt="" />
          </div>
          <div className="w-1/2 h-1/2">
            <img src={Image2} alt="" />
          </div>
        </div>
      </div>
      {/* fourth */}
      <div className="popp py-10">
        <p className="text-center font-medium text-4xl pb-5">
          Related Products
        </p>
        <div className="flex px-10 justify-evenly">
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
        <p className="popp font-medium text-[20px] text-center pt-15 ">
          <span className="border-b-2">View More</span>
        </p>
      </div>
    </div>
  );
};

export default Review;
