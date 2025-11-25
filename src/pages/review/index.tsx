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
import { TiLockClosed } from "react-icons/ti";
import { FaCircleXmark } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export type Product = {
  id?: number;
  name: string;
  price: string | number;
  image: string;
  quantity?: number;
};

type CartState = {
  thisProduct: Product[];
  subtotal: number;
};

const Review = () => {
  const location = useLocation();
  const product = location?.state?.products;
  const [count, setCount] = useState(1);

  const [cart, setCart] = useState<Product[]>([]);
  const [popup, setPopup] = useState(false);

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(saved);
  }, []);

  const addToCart = (product: Product) => {
    const oldCart = JSON.parse(localStorage.getItem("cart") || "[]");

    const already = oldCart.find((p: any) => p.id === product.id);

    if (already) {
      already.quantity += 1;
      localStorage.setItem("cart", JSON.stringify(oldCart));
      return;
    }

    const newProduct = { ...product, quantity: 1 };
    const newCart = [...oldCart, newProduct];

    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const subtotal = cart.reduce((total, item) => {
    const price = Number(String(item.price).replace(/[^0-9]/g, ""));
    return total + price * (item.quantity || 1);
  }, 0);

  const removeFromCart = (productId: number | undefined) => {
    if (!productId) return;

    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const navigate = useNavigate();

  return (
    <div className="popp box-border">
      {/* first */}
      <div className="border-b border-[#D9D9D9]">
        <div className="flex gap-2.5 py-5 px-2.5 lg:px-20 md:gap-5 lg:py-10">
          <div className="flex gap-1.5 border-r-2 border-[#9F9F9F] pr-1.5 md:gap-3.5 md:pr-3.5">
            <p className="font-normal text-[14px] md:text-[16px] text-[#9F9F9F]">
              Home
            </p>
            <p>&gt;</p>
            <p className="font-normal text-[14px] md:text-[16px] text-[#9F9F9F]">
              Shop
            </p>
          </div>
          <p className="font-normal text-[14px] md:text-[16px]">
            {product.name}
          </p>
        </div>
        {/* second */}
        <div className="flex flex-col gap-10 w-full pl-2.5 md:flex-row lg:px-20 lg:gap-0 md:pl-2.5 md:pr-2.5 md:gap-2.5">
          {/* left */}
          <div className="md:w-1/2">
            <div className="flex gap-2.5 md:gap-7">
              <div>
                <img
                  className="size-18  bg-[#FFF9EF] mb-2.5 rounded-[5px] lg:size-20"
                  src={product.image}
                  alt=""
                />
                <img
                  className="size-18 bg-[#FFF9EF] mb-2.5 rounded-[5px] lg:size-20"
                  src={product.image}
                  alt=""
                />
                <img
                  className="size-18 bg-[#FFF9EF] mb-2.5 rounded-[5px] lg:size-20"
                  src={product.image}
                  alt=""
                />
                <img
                  className="size-18 bg-[#FFF9EF] mb-2.5 rounded-[5px] lg:size-20"
                  src={product.image}
                  alt=""
                />
              </div>
              <div className="bg-[#FFF9EF] h-[60vh] w-7/10 rounded-[10px] md:h-[70vh] lg:w-2/3">
                <img
                  className="w-full h-full object-contain"
                  src={product.image}
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* right */}
          <div className="md:w-1/2">
            <div className="border-b border-[#9F9F9F] pr-0 pb-12 lg:pr-25">
              <p className="font-normal text-2xl md:text-3xl lg:text-[44px]">
                {product.name}
              </p>
              <p className="font-medium text-[16px] md:text-2xl text-[#9F9F9F]">
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
              <div className="flex gap-2.5 font-normal text-[13px]">
                {["L", "XL", "XS"].map((size) => (
                  <p
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`size-8 flex justify-center items-center cursor-pointer rounded-lg
        ${selectedSize === size ? "bg-[#FBEBB5]" : "bg-[#FAF4F4]"}
      `}
                  >
                    {size}
                  </p>
                ))}
              </div>

              <p className="font-normal text-[14px] text-[#9F9F9F] py-3.5">
                Color
              </p>
              <div className="flex gap-2.5 font-normal text-[13px]">
                {["#816DFA", "#000000", "#CDBA7B"].map((color) => (
                  <div
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`size-8 rounded-full cursor-pointer border 
        ${
          selectedColor === color
            ? "border-black scale-110"
            : "border-transparent"
        }
      `}
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
              <div className="mt-5 flex gap-3">
                <div className="box-border flex justify-between items-center font-medium text-[14px] border border-[#9F9F9F] rounded-lg gap-7 p-1.5 whitespace-nowrap lg:text-[16px]">
                  <p
                    onClick={() => setCount((prev) => Math.max(1, prev - 1))}
                    className="cursor-pointer"
                  >
                    -
                  </p>
                  <p>{count}</p>
                  <p
                    onClick={() => setCount((prev) => prev + 1)}
                    className="cursor-pointer"
                  >
                    +
                  </p>
                </div>
                <button
                  className="font-normal text-[14px] border rounded-lg py-2.5 px-8 cursor-pointer whitespace-nowrap lg:text-xl"
                  onClick={() => {
                    if (!selectedSize || !selectedColor) {
                      alert(
                        "Please select a size and a color before adding to cart!"
                      );
                      return;
                    }
                    const oldCart = JSON.parse(
                      localStorage.getItem("cart") || "[]"
                    );

                    const existing = oldCart.find(
                      (p: any) => p.id === product.id
                    );

                    if (existing) {
                      existing.quantity += count;
                      localStorage.setItem("cart", JSON.stringify(oldCart));
                    } else {
                      const newProduct = { ...product, quantity: count };
                      localStorage.setItem(
                        "cart",
                        JSON.stringify([...oldCart, newProduct])
                      );
                    }

                    const stored = JSON.parse(
                      localStorage.getItem("cart") || "[]"
                    );
                    setCart(stored);
                    setPopup(true);
                  }}
                >
                  Add To Cart
                </button>
              </div>
            </div>
            {/* popUp */}
            {popup && (
              <div className="popp bg-white absolute top-16 right-0 py-5 px-5 shadow-lg">
                <div className="flex justify-between py-2.5 border-b gap-5">
                  <p>Shopping Cart</p>
                  <TiLockClosed size={20} />
                </div>

                {cart.map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center gap-2.5 py-3 justify-between">
                      <div className="flex gap-2.5 items-center">
                        <img
                          className="size-20 bg-[#FBEBB5] rounded-xl"
                          src={item.image}
                          alt=""
                        />

                        <div className="flex flex-col">
                          <div className="max-w-50">{item.name}</div>
                          <div className="flex gap-2.5">
                            <p>{item.quantity}</p>
                            <p>X</p>
                            <p className="text-[#B88E2F]">{item.price}</p>
                          </div>
                        </div>
                      </div>
                      <FaCircleXmark
                        className="cursor-pointer"
                        size={20}
                        onClick={() => removeFromCart(item.id)}
                      />
                    </div>
                  </div>
                ))}
                <div className="flex justify-between py-2 border-b border-[#9F9F9F]">
                  <p>Subtotal</p>
                  <p className="text-[#B88E2F]">Rs. {subtotal}</p>
                </div>
                <div className="flex gap-5 py-2.5">
                  <button
                    className="border rounded-2xl p-2 cursor-pointer"
                    onClick={() =>
                      navigate("/cart", {
                        state: { thisProduct: cart, subtotal: subtotal },
                      })
                    }
                  >
                    View Cart
                  </button>
                  <button
                    className="border rounded-2xl p-2 cursor-pointer"
                    onClick={() =>
                      navigate("/checkout", {
                        state: { thisProduct: cart, subtotal: subtotal },
                      })
                    }
                  >
                    Checkout
                  </button>
                </div>
              </div>
            )}

            <div className="py-8">
              <div className="flex gap-5 font-normal text-[14px] text-[#9F9F9F] py-1.5 lg:text-[16px]">
                <p>SKU</p>
                <p>:</p>
                <p>SS001</p>
              </div>
              <div className="flex gap-5 font-normal text-[14px] text-[#9F9F9F] py-1.5 lg:text-[16px]">
                <p>Category</p>
                <p>:</p>
                <p>Sofas</p>
              </div>
              <div className="flex gap-5 font-normal text-[14px] text-[#9F9F9F] py-1.5 lg:text-[16px]">
                <p>Tags</p>
                <p>:</p>
                <p>Sofa, Chair, Home, Shop</p>
              </div>
              <div className="flex gap-5 font-normal text-[14px] text-[#9F9F9F] py-1.5 lg:text-[16px]">
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
        <div className="flex px-5 gap-2.5 justify-center md:gap-10">
          <p className="font-normal text-lg lg:text-2xl">Description</p>
          <p className="font-normal text-lg text-[#9F9F9F] lg:text-2xl">
            Additional Information
          </p>
          <p className="font-normal text-lg text-[#9F9F9F] lg:text-2xl">
            Reviews [5]
          </p>
        </div>
        <div className="px-5 py-5 text-[#9F9F9F] text-justify text-xs md:text-[16px] lg:px-20">
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
        <div className="flex flex-col px-5 gap-5 md:flex-row lg:px-20">
          <div className="md:w-1/2 h-1/2">
            <img src={Image1} alt="" />
          </div>
          <div className="md:w-1/2 h-1/2">
            <img src={Image2} alt="" />
          </div>
        </div>
      </div>
      {/* fourth */}
      <div className="popp py-10">
        <p className="text-center font-medium text-2xl md:pb-5 md:text-4xl">
          Related Products
        </p>
        <div className="w-full grid grid-cols-1 px-10 justify-items-center sm:grid-cols-2 lg:grid-cols-4">
          <div className="w-full flex flex-col items-center">
            <div>
              <img
                className="flex justify-center"
                src={ThirdSecFirstImage}
                alt=""
              />
            </div>
            <div>
              <p className="font-normal text-[16px]">Trenton modular sofa_3</p>
              <p className="font-medium text-xl sm:text-2xl">Rs. 25,000.00</p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center">
            <div>
              <img src={ThirdSecSecImage} alt="" />
            </div>
            <div>
              <p className="font-normal text-[16px]">Trenton modular sofa_3</p>
              <p className="font-medium text-xl sm:text-2xl">Rs. 25,000.00</p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center">
            <div>
              <img src={ThirdSecThirdImage} alt="" />
            </div>
            <div>
              <p className="font-normal text-[16px]">Trenton modular sofa_3</p>
              <p className="font-medium text-xl sm:text-2xl">Rs. 25,000.00</p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center">
            <div>
              <img src={ThirdSecFourthImage} alt="" />
            </div>
            <div>
              <p className="font-normal text-[16px]">Trenton modular sofa_3</p>
              <p className="font-medium text-xl sm:text-2xl">Rs. 25,000.00</p>
            </div>
          </div>
        </div>
        <p className="popp font-medium text-[20px] text-center pt-15 cursor-pointer">
          <span className="border-b-2" onClick={() => navigate("/shop")}>
            View More
          </span>
        </p>
      </div>
    </div>
  );
};

export default Review;
