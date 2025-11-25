// import React from "react";
import BgImage from "../../assets/images/Rectangle1.png";
import BgImageLogo from "../../assets/images/Meubel House_Logos-05.svg";
import { useLocation } from "react-router-dom";
import type { Product } from "../review/index";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import Swal from "sweetalert";

type CheckoutFormInputs = {
  firstName: string;
  lastName: string;
  companyName: string;
  country: string;
  streetAddress: string;
  city: string;
  province: string;
  zipCode: string;
  phone: string;
  email: string;
  additionalInfo?: string;
  payment: string;
};

const CheckOut = () => {
  const location = useLocation();
  const cartItems = location?.state?.thisProduct || [];
  const subtotal = location?.state?.subtotal || 0;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CheckoutFormInputs>();

  const onSubmit: SubmitHandler<CheckoutFormInputs> = (data) => {
    console.log("Form Submitted", data);

    swal({
      title: "Are you sure?",
      text: "Do you want to place the order?",
      icon: "warning",
      buttons: ["Cancel", "Yes, place it!"],
      dangerMode: true,
    }).then((willPlaceOrder) => {
      if (willPlaceOrder) {
        swal(
          "Order Placed!",
          "Your order has been successfully placed.",
          "success"
        ).then(() => {
          reset();
        });
      }
    });
  };

  return (
    <div className="popp box-border">
      {/* first */}
      <div
        className="py-14 w-full flex flex-col justify-center text-center box-border md:py-20"
        style={{ backgroundImage: `url(${BgImage})` }}
      >
        <div className="leading-none p-0 m-0">
          <img className="mx-auto" src={BgImageLogo} alt="" />
        </div>
        <p className="font-medium text-3xl md:text-5xl">checkout</p>
        <div className="flex gap-1 justify-center pt-2.5">
          <p className="font-medium text-[16px]">Home</p>
          <p className="font-medium">&gt;</p>
          <p className="font-light text-[16px]">Checkout</p>
        </div>
      </div>
      {/* second */}
      {/* <div className="flex flex-col gap-10 justify-center px-5 py-7.5 lg:px-20 md:py-16 md:flex-row lg:gap-0"> */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-10 justify-center px-5 py-7.5 lg:px-20 md:py-16 md:flex-row lg:gap-0"
      >
        {/* leftDiv */}
        <div className="box-border md:w-1/2 lg:px-20">
          <p className="font-semibold text-2xl pb-2.5 md:pb-7 md:text-4xl">
            Billing details
          </p>

          <div className="py-2 flex w-full gap-2.5">
            <div className="flex-1">
              <label className="font-medium text-[16px]">First Name</label>
              <input
                {...register("firstName", {
                  required: "First Name is required!",
                })}
                className="w-full box-border border border-[#9F9F9F] p-2 rounded-lg mt-2.5 lg:p-2.5 lg:rounded-[10px]"
                type="text"
              />
              {errors.firstName && (
                <p className="text-red-700">{errors.firstName?.message}</p>
              )}
            </div>

            <div className="flex-1">
              <label className="font-medium text-[16px] pb-2.5">
                Last Name
              </label>
              <input
                {...register("lastName", {
                  required: "Last Name is required!",
                })}
                className="w-full box-border border border-[#9F9F9F] p-2 rounded-lg mt-2.5 lg:p-2.5 lg:rounded-[10px]"
                type="text"
              />
              {errors.lastName && (
                <p className="text-red-700">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          <div className="py-2 flex flex-col">
            <label className="font-medium text-[16px]">
              Company Name (Optional)
            </label>
            <input
              {...register("companyName", {
                required: "Company Name is required!",
              })}
              className="w-full border border-[#9F9F9F] p-2 rounded-lg mt-2.5 lg:p-2.5 lg:rounded-[10px]"
              type="text"
            />
          </div>
          {errors.companyName && (
            <p className="text-red-700">{errors.companyName.message}</p>
          )}

          <div className="py-2 flex flex-col">
            <label className="font-medium text-[16px]">Region</label>
            <select
              className="w-full border border-[#9F9F9F] p-2 rounded-lg mt-2.5 lg:p-2.5 lg:rounded-[10px]"
              {...register("province", {
                required: "Province is required!",
              })}
              defaultValue={cartItems.province || ""}
            >
              <option value="">Select Province</option>
              <option value="punjab">Punjab</option>
              <option value="sindh">Sindh</option>
              <option value="khyber-pakhtunkhwa">Khyber Pakhtunkhwa</option>
              <option value="gilgit-baltistan">Gilgit Baltistan</option>
              <option value="azad-jammu-kashmir">Azad Jammu & Kashmir</option>
            </select>
          </div>
          {errors.province && (
            <p className="text-red-700">{errors.province.message}</p>
          )}

          <div className="py-2 flex flex-col">
            <label className="font-medium text-[16px]">Street address</label>
            <input
              {...register("streetAddress", {
                required: "Street Address is required!",
              })}
              className="w-full border border-[#9F9F9F] p-2 rounded-lg mt-2.5 lg:p-2.5 lg:rounded-[10px]"
              type="text"
            />
          </div>
          {errors.streetAddress && (
            <p className="text-red-700">{errors.streetAddress.message}</p>
          )}

          <div className="py-2 flex flex-col">
            <label className="font-medium text-[16px]">Town / City</label>
            <input
              {...register("city", {
                required: "City/Town Name is required!",
              })}
              className="w-full border border-[#9F9F9F] p-2 rounded-lg mt-2.5 lg:p-2.5 lg:rounded-[10px]"
              type="text"
            />
          </div>
          {errors.city && <p className="text-red-700">{errors.city.message}</p>}

          <div className="py-2 flex flex-col">
            <label className="font-medium text-[16px]">Province</label>
            <select
              className="w-full border border-[#9F9F9F] p-2 rounded-lg mt-2.5 lg:p-2.5 lg:rounded-[10px]"
              {...register("country", {
                required: "Country is required!",
              })}
              defaultValue={cartItems.country || ""}
            >
              <option value="">Select Country</option>
              <option value="pakistan">Pakistan</option>
              <option value="afghanistan">Afghanistan</option>
              <option value="algeria">Algeria</option>
              <option value="azerbaijan">Azerbaijan</option>
              <option value="bahrain">Bahrain</option>
              <option value="canada">Canada</option>
              <option value="iceland">Iceland</option>
              <option value="libya">Libya</option>
              <option value="mexico">Mexico</option>
            </select>
          </div>
          {errors.country && (
            <p className="text-red-700">{errors.country.message}</p>
          )}

          <div className="py-2 flex flex-col">
            <label className="font-medium text-[16px]">ZIP Code</label>
            <input
              {...register("zipCode", {
                required: "ZIP Code is required!",
              })}
              className="w-full border border-[#9F9F9F] p-2 rounded-lg mt-2.5 lg:p-2.5 lg:rounded-[10px]"
              type="text"
            />
          </div>
          {errors.zipCode && (
            <p className="text-red-700">{errors.zipCode.message}</p>
          )}

          <div className="py-2 flex flex-col">
            <label className="font-medium text-[16px]">Phone</label>
            <input
              {...register("phone", {
                required: "Phone Number is required!",
              })}
              className="w-full border border-[#9F9F9F] p-2 rounded-lg mt-2.5 lg:p-2.5 lg:rounded-[10px]"
              type="text"
            />
          </div>
          {errors.phone && (
            <p className="text-red-700">{errors.phone.message}</p>
          )}

          <div className="py-2 flex flex-col">
            <label className="font-medium text-[16px]">Email address</label>
            <input
              {...register("email", {
                required: "Email is required!",
              })}
              className="w-full border border-[#9F9F9F] p-2 rounded-lg mt-2.5 lg:p-2.5 lg:rounded-[10px]"
              type="text"
            />
          </div>
          {errors.email && (
            <p className="text-red-700">{errors.email.message}</p>
          )}

          <div className="py-2 flex flex-col">
            <input
              {...register("additionalInfo", {})}
              className="w-full border border-[#9F9F9F] p-2 rounded-lg mt-2.5 lg:p-2.5 lg:rounded-[10px]"
              type="text"
              placeholder="Additional Information"
            />
          </div>
        </div>
        {/* right Div */}
        <div className="pt-3.5 md:w-1/2 lg:px-20 md:pt-2.5">
          <div className="border-b border-b-[#D9D9D9]">
            <div className="flex justify-between py-2.5 font-medium text-2xl">
              <p>Product</p>
              <p>Subtotal</p>
            </div>
            {cartItems.map((item: Product) => {
              const price = Number(String(item.price).replace(/[^0-9]/g, ""));
              const itemSubtotal = price * (item.quantity || 1);

              return (
                <div className="flex justify-between py-2.5">
                  <p className="font-normal text-[16px] text-[#9F9F9F]">
                    {item.name} × {item.quantity || 1}
                  </p>
                  <p className="font-light text-[16px] whitespace-nowrap">
                    Rs. {itemSubtotal}
                  </p>
                </div>
              );
            })}
            <div className="flex justify-between py-2.5 gap-6">
              <p className="font-normal text-[16px]">Subtotal</p>
              <p className="font-light text-[16px] pr-1">Rs. {subtotal}</p>
            </div>
            <div className="flex justify-between py-2.5 gap-6">
              <p className="font-normal text-[16px]">Total</p>
              <p className="font-bold text-2xl text-[#B88E2F] ">
                Rs. {subtotal}
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
            <button
              type="submit"
              className="border font-normal text-lg rounded-lg py-1.5 px-5 mx-auto cursor-pointer lg:py-2.5 lg:text-xl lg:rounded-[10px]"
            >
              Place Order
            </button>
          </div>
        </div>
      </form>
      {/* </div> */}
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
  );
};

export default CheckOut;
