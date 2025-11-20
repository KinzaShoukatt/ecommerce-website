// import React from "react";
import BgImage from "../../assets/images/Rectangle1.png";
import BgImageLogo from "../../assets/images/Meubel House_Logos-05.svg";
import FirstBlog from "../../assets/images/FirstBlog.png";
import ProfileBlog from "../../assets/icons/profileBlog.svg";
import CalenderBlog from "../../assets/icons/calenderBlog.svg";
import DescriptionBlog from "../../assets/icons/descriptionBlog.svg";
import SecondBlog from "../../assets/images/secondBlog.png";
import ThirdBlog from "../../assets/images/thirdBlog.png";
import SearchIcon from "../../assets/images/search-icon.svg";
import FirstRecentPost from "../../assets/images/firstRecentPost.png";
import SecondRecentPost from "../../assets/images/secondRecentPost.png";
import ThirdRecentPost from "../../assets/images/thirdRecentPost.png";
import FourthRecentPost from "../../assets/images/fourthRecentPost.png";
import FifthRecentPost from "../../assets/images/fiftRecentPost.png";
const Blog = () => {
  return (
    <>
      <div className="popp box-border">
        {/* first */}
        <div
          className="h-[50vh] w-full object-cover flex flex-col justify-center text-center box-border"
          style={{ backgroundImage: `url(${BgImage})` }}
        >
          <div className="leading-none p-0 m-0">
            <img className="mx-auto" src={BgImageLogo} alt="" />
          </div>
          <p className="font-medium text-3xl md:text-5xl">Blog</p>
          <div className="flex gap-1 justify-center pt-2.5">
            <p className="font-medium text-[16px]">Home</p>
            <p className="font-medium">&gt;</p>
            <p className="font-light text-[16px]">Blog</p>
          </div>
        </div>
        {/* second */}
        <div className="flex flex-col gap-5 pt-10 pb-10 px-5 md:flex-row md:px-20 md:pt-20">
          {/* left */}
          <div className="w-full md:w-2/3">
            <div>
              <img
                className="w-full max-w-full object-cover"
                src={FirstBlog}
                alt=""
              />

              <div className="flex gap-2.5 py-2.5 text-[#9F9F9F] text-[14px] md:gap-5">
                <div className="flex gap-1 md:gap-2.5 ">
                  <img
                    className="size-5 md:size-auto"
                    src={ProfileBlog}
                    alt=""
                  />
                  <p>Admin</p>
                </div>
                <div className="flex gap-1 md:gap-2.5">
                  <img
                    className="size-5 md:size-auto"
                    src={CalenderBlog}
                    alt=""
                  />
                  <p>14 Oct 2022</p>
                </div>
                <div className="flex gap-1 md:gap-2.5">
                  <img
                    className="size-5 md:size-auto"
                    src={DescriptionBlog}
                    alt=""
                  />
                  <p>Wood</p>
                </div>
              </div>
              <p className="font-medium text-xl md:text-3xl">
                Going all-in with millennial design
              </p>
              <p className="font-normal text-xs md:text-[15px] text-[#9F9F9F] py-2.5 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
                mauris vitae ultricies leo integer malesuada nunc. In nulla
                posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
                pulvinar mattis nunc sed blandit libero. Pellentesque elit
                ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
                ornare aenean euismod elementum.
              </p>
              <p className="mb-7">
                <span className=" font-normal text-[14px] md:text-[16px] border-b">
                  Read More
                </span>
              </p>
            </div>
            <div>
              <img
                className="w-full max-w-full object-cover"
                src={SecondBlog}
                alt=""
              />
              <div className="flex gap-2.5 py-2.5 text-[#9F9F9F] text-[14px] md:gap-5">
                <div className="flex gap-1 md:gap-2.5">
                  <img
                    className="size-5 md:size-auto"
                    src={ProfileBlog}
                    alt=""
                  />
                  <p>Admin</p>
                </div>
                <div className="flex gap-1 md:gap-2.5 ">
                  <img
                    className="size-5 md:size-auto"
                    src={CalenderBlog}
                    alt=""
                  />
                  <p>14 Oct 2022</p>
                </div>
                <div className="flex gap-1 md:gap-2.5 ">
                  <img
                    className="size-5 md:size-auto"
                    src={DescriptionBlog}
                    alt=""
                  />
                  <p>Wood</p>
                </div>
              </div>
              <p className="font-medium text-xl md:text-3xl">
                Exploring new ways of decorating
              </p>
              <p className="font-normal text-xs md:text-[15px] text-[#9F9F9F] py-2.5 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
                mauris vitae ultricies leo integer malesuada nunc. In nulla
                posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
                pulvinar mattis nunc sed blandit libero. Pellentesque elit
                ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
                ornare aenean euismod elementum.
              </p>
              <p className="mb-7">
                <span className="font-normal text-[14px] md:text-[16px] border-b">
                  Read More
                </span>
              </p>
            </div>
            <div>
              <img
                className="w-full max-w-full object-cover"
                src={ThirdBlog}
                alt=""
              />
              <div className="flex gap-2.5 py-2.5 text-[#9F9F9F] text-[14px] md:gap-5">
                <div className="flex gap-1 md:gap-2.5">
                  <img
                    className="size-5 md:size-auto"
                    src={ProfileBlog}
                    alt=""
                  />
                  <p>Admin</p>
                </div>
                <div className="flex gap-1 md:gap-2.5 ">
                  <img
                    className="size-5 md:size-auto"
                    src={CalenderBlog}
                    alt=""
                  />
                  <p>14 Oct 2022</p>
                </div>
                <div className="flex gap-1 md:gap-2.5 ">
                  <img
                    className="size-5 md:size-auto"
                    src={DescriptionBlog}
                    alt=""
                  />
                  <p>Wood</p>
                </div>
              </div>
              <p className="font-medium text-xl md:text-3xl">
                Handmade pieces that took time to make
              </p>
              <p className="font-normal text-xs md:text-[15px] text-[#9F9F9F] py-2.5 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
                mauris vitae ultricies leo integer malesuada nunc. In nulla
                posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
                pulvinar mattis nunc sed blandit libero. Pellentesque elit
                ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
                ornare aenean euismod elementum.
              </p>
              <p>
                <span className="font-normal text-[14px] md:text-[16px] border-b">
                  Read More
                </span>
              </p>
            </div>
            <div className="flex justify-end gap-5 font-normal text-[14px] pt-10 pb-8 md:text-pxl md:pt-15 md:pb-0">
              <p className="py-2 px-4 bg-[#FBEBB5] rounded-lg">1</p>
              <p className="py-2 px-4 bg-[#FFF9E5] rounded-lg">2</p>
              <p className="py-2 px-4 bg-[#FFF9E5] rounded-lg">3</p>
              <p className="py-2 px-4 bg-[#FFF9E5] rounded-lg font-light">
                Next
              </p>
            </div>
          </div>
          {/* right */}
          <div className="md:px-10 ">
            <div className="flex border border-[#9F9F9F] rounded-[10px] px-2.5 items-center">
              <input
                className="w-full py-3 text-[#9F9F9F] font-normal border-none outline-none"
                type="text"
                placeholder="Abc"
              />
              <img className="size-5" src={SearchIcon} />
            </div>
            <div className="py-7 md:px-5">
              <p className="font-medium text-2xl pb-2.5">Categories</p>
              <div className="flex justify-between py-2.5 text-[#9F9F9F]">
                <p>Crafts</p>
                <p>2</p>
              </div>
              <div className="flex justify-between py-2.5 text-[#9F9F9F]">
                <p>Design</p>
                <p>8</p>
              </div>
              <div className="flex justify-between py-2.5 text-[#9F9F9F]">
                <p>Handmade</p>
                <p>7</p>
              </div>
              <div className="flex justify-between py-2.5 text-[#9F9F9F]">
                <p>Interior</p>
                <p>1</p>
              </div>
              <div className="flex justify-between py-2.5 text-[#9F9F9F]">
                <p>Wood</p>
                <p>6</p>
              </div>
            </div>

            <div className="pt-7 md:px-10">
              <p className="font-medium text-2xl pb-2.5">Recent Posts</p>
              <div className="flex gap-2.5 py-2.5 ">
                <img className="size-auto" src={FirstRecentPost} alt="" />
                <p className="font-normal text-[14px]">
                  Going all-in with millennial design <br />
                  <span className="text-[#9F9F9F] text-[12px]">
                    03 Aug 2022
                  </span>
                </p>
              </div>
              <div className="flex gap-2.5 py-2.5 ">
                <img className="size-auto" src={SecondRecentPost} alt="" />
                <p className="font-normal text-[14px]">
                  Exploring new ways of decorating
                  <br />
                  <span className="text-[#9F9F9F] text-[12px]">
                    03 Aug 2022
                  </span>
                </p>
              </div>
              <div className="flex gap-2.5 py-2.5 ">
                <img className="size-auto" src={ThirdRecentPost} alt="" />
                <p className="font-normal text-[14px]">
                  Handmade pieces that took time to make
                  <br />
                  <span className="text-[#9F9F9F] text-[12px]">
                    03 Aug 2022
                  </span>
                </p>
              </div>
              <div className="flex gap-2.5 py-2.5 ">
                <img className="size-auto" src={FourthRecentPost} alt="" />
                <p className="font-normal text-[14px]">
                  Modern home in Milan
                  <br />
                  <span className="text-[#9F9F9F] text-[12px]">
                    03 Aug 2022
                  </span>
                </p>
              </div>
              <div className="flex gap-2.5 py-2.5 ">
                <img className="size-auto" src={FifthRecentPost} alt="" />
                <p className="font-normal text-[14px]">
                  Colorful office redesign
                  <br />
                  <span className="text-[#9F9F9F] text-[12px]">
                    03 Aug 2022
                  </span>
                </p>
              </div>
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

export default Blog;
