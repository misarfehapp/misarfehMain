"use client";
import { AnimatePresence, motion } from "framer-motion";
import ChevronLeftIcon from "@/components/address section/ChevronLeftIcon";
import FoodSensitivities from "@/components/food sensitivities/FoodSensitivities";
import DiscountIcon from "@/components/icons/DiscountIcon";
import WarningIcon from "@/components/icons/WarningIcon";
import OptionBar from "@/components/OptionBar/OptionBar";
import ProductTracker from "@/components/productTracker/ProductTracker";
import ArrowBack from "@/components/user header/ArrowBack";
import Link from "next/link";
import { useEffect, useState } from "react";

const waysOfPay = [
  {
    name: "bank",
    title: "درگاه بانکی",
    bank: "درگاه بانک سامان",
  },
  {
    name: "wallet",
    title: "کیف پول",
    balance: 0,
  },
];

const discountCodes = [
  {
    code: "ABCD",
    discount: 15 / 100,
  },
  {
    code: "EFGH",
    discount: 20 / 100,
  },
  {
    code: "IGKL",
    discount: 50 / 100,
  },
];

const Purchase = () => {
  const [selectedOption, setSelectedOption] = useState<string>("حضوری");
  const [discount, setDiscount] = useState<number>(0);
  const [productPrice, setProductPrice] = useState<number>(500000);
  const [total, setTotal] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const [isDiscountExpand, setIsDiscountExpand] = useState<boolean>(false);
  const [isSensitivityExpand, setIsSensitivityExpand] =
    useState<boolean>(false);
  const [discountCode, setDiscountCode] = useState<string>("");
  const [showDiscountMessage, setShowDiscountMessage] =
    useState<boolean>(false);
  const [discountMessage, setDiscountMessage] = useState<string>("");
  const [isDiscountValid, setIsDiscountValid] = useState<boolean | null>(null);
  const [isDiscountApplied, setIsDiscountApplied] = useState(false);

  const [wayOfPay, setWayOfPay] = useState<string>("bank");

  const handleSensitivityExpand = () => {
    setIsSensitivityExpand((prev: any) => !prev);
  };

  const handleDiscountExpand = () => {
    setIsDiscountExpand((prev: any) => !prev);
  };

  const handleWayOfPay = (way: string) => {
    setWayOfPay(way);
  };
  useEffect(() => {
    setTotal(count * productPrice);
  }, [count, productPrice]);

  const checkDiscountCode = (code: string) => {
    const validCode = discountCodes.find((c) => c.code === code);
    setIsDiscountExpand(false);
    if (validCode) {
      setProductPrice((prevPrice) => {
        const newPrice = prevPrice - prevPrice * validCode.discount;
        setDiscount(prevPrice * validCode.discount);
        return newPrice;
      });
      setIsDiscountValid(true);
      setIsDiscountApplied(true);
    } else {
      setIsDiscountValid(false);
    }

    setShowDiscountMessage(true);
    setTimeout(() => setShowDiscountMessage(false), 3000); // Hide message after 3 seconds
  };

  return (
    <div className="flex justify-center mx-4">
      <div className="w-full max-w-[398px] flex flex-col items-center gap-4">
        <div className="flex flex-col gap-4 w-full">
          {/* header */}
          <div className="flex flex-row justify-end mt-3 min-h-16 items-center border-b border-b-[#C7C6CA] px-5 gap-[10px]">
            <p className="font-medium text-base text-[#49454F]">تکمیل خرید</p>
            <Link href={"/product"}>
              <ArrowBack />
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <div
              className="flex flex-col justify-center gap-1"
              style={{ direction: "rtl" }}
            >
              <p className="font-bold text-sm text-neutral-neutral30">
                خرید شما
              </p>
              <p className="font-medium text-2xs text-neutral-neutral30">
                شما میتوانید اطلاعات خرید خود را مشاهده و در صورت تمایل پرداخت
                کنید.
              </p>
            </div>
            {/* option bar and food tracker */}
            <div className="flex flex-col gap-3">
              <OptionBar setSelectedOption={setSelectedOption} type="order" />
              <ProductTracker
                title="سورپرایز صبحانه"
                address="فست فود لاویا - بلوار بهشتی , 5.6 کیلومتر"
                count={2}
                pickupEnd={13}
                pickupStart={9}
                timeH={4}
                timeM={38}
                timeS={46}
                progress={70}
                type="purchase"
                setCount={setCount}
              />
              <div
                style={{ direction: "rtl" }}
                className="border-2 rounded-rounded-7 border-neutral-neutral80 bg-neutral-neutral98 text-xs font-medium text-neutral-neutral30 flex flex-col"
              >
                <div className="py-3 px-4 border-b-2 border-neutral-neutral8">
                  <div className="flex flex-row justify-between">
                    <p>مبلغ تخفیف</p>
                    <p className="text-center w-[100px]">
                      {discount.toLocaleString()} <span>تومان</span>
                    </p>
                  </div>
                  <div className="flex flex-row justify-between">
                    <p>مبلغ محصول</p>
                    <p className="text-center w-[100px]">
                      {productPrice.toLocaleString()} <span>تومان</span>
                    </p>
                  </div>
                </div>
                <div className="flex flex-row justify-between py-3 px-4">
                  <p>مبلغ کل</p>
                  <p className="text-center w-[100px]">
                    {total.toLocaleString()} <span>تومان</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full bg-neutral-neutral90 h-2" />
            {/* discount section */}
            <div
              className={` transition-max-height duration-500 ease-in-out ${isDiscountExpand ? "max-h-full" : "max-h-11"}`}
              onClick={handleDiscountExpand}
            >
              <div className="flex flex-row items-center justify-between cursor-pointer">
                <ChevronLeftIcon
                  className={`transition-all duration-200 ${isDiscountExpand ? "-rotate-90" : "rotate-0"}`}
                />
                <div className="flex flex-row items-center gap-3">
                  <p className="underline underline-offset-[5px] font-medium text-sm text-neutral-neutral30">
                    کد تخفیف دارید؟
                  </p>
                  <DiscountIcon />
                </div>
              </div>

              {isDiscountExpand && (
                <div className="flex flex-col items-center gap-2 w-full mt-2">
                  <div className="flex flex-row justify-between items-center w-full">
                    <input
                      type="text"
                      placeholder="کد تخفیف"
                      className={`px-3 py-2 border text-center w-44 rounded-md border-neutral-neutral80 focus:outline-none ${isDiscountApplied ? "text-neutral-neutral40" : "text-black"}`}
                      disabled={isDiscountApplied}
                      onChange={(e) => setDiscountCode(e.target.value)}
                      onClick={() => setIsDiscountExpand(false)}
                    />
                    <p className="text-neutral-neutral30 font-medium text-sm">
                      :کد تخفیف خود را وارد کنید
                    </p>
                  </div>
                  <button
                    onClick={() => checkDiscountCode(discountCode)}
                    className={`w-28 mt-2 py-2 bg-primary text-white  text-sm font-medium rounded-md ${isDiscountApplied ? "bg-dark-medium-contrast-primary-container" : "bg-key-colors-primary"}`}
                    disabled={isDiscountApplied}
                  >
                    اعمال کد
                  </button>
                </div>
              )}
            </div>
            {/* Discount message */}
            <AnimatePresence>
              {showDiscountMessage && (
                <motion.div
                  className={`fixed bottom-0 right-0 transform -translate-x-1/2 px-4 py-2 rounded text-sm text-white ${
                    isDiscountValid ? "bg-green-500" : "bg-red-500"
                  }`}
                  initial={{ opacity: 0, y: 50, x: -10 }}
                  animate={{ opacity: 1, y: -10, x: -10 }}
                  exit={{ opacity: 0, y: 50, x: -10 }}
                  transition={{ duration: 0.5 }}
                >
                  {isDiscountValid
                    ? "کد تخفیف اعمال شد"
                    : "کد تخفیف اشتباه است"}
                </motion.div>
              )}
            </AnimatePresence>
            <div className="w-full bg-neutral-neutral90 h-2" />
            <div className="flex flex-col gap-2">
              {waysOfPay.map((way, index) => (
                <div
                  key={index}
                  className=""
                  onClick={() => handleWayOfPay(way.name)}
                >
                  <div
                    className={`flex flex-row justify-between ring-2 rounded-rounded-7 p-3 text-sm font-medium ${wayOfPay === way.name ? "ring-key-colors-primary bg-primary-primary99 text-key-colors-primary" : "ring-neutral-neutral90 bg-white text-neutral-neutral30"}`}
                  >
                    <p>
                      {way.bank ?? `${way.balance.toLocaleString()} موجودی`}
                    </p>

                    <div className="flex flex-row gap-3 items-center">
                      <p>{way.title}</p>
                      <div
                        className={`ring-2 rounded-full w-5 h-5 flex justify-center items-center ${wayOfPay === way.name ? "ring-key-colors-primary" : "ring-neutral-neutral30"}`}
                      >
                        <div
                          className={`w-[10px] h-[10px] rounded-full ${wayOfPay === way.name ? "bg-key-colors-primary" : "bg-white"}`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full bg-neutral-neutral90 h-2" />
            <div
              className={` transition-max-height duration-500 ease-in-out ${isSensitivityExpand ? "max-h-full" : "max-h-11"}`}
              onClick={handleSensitivityExpand}
            >
              <div className="flex flex-row items-center justify-between cursor-pointer">
                <ChevronLeftIcon
                  className={`transition-all duration-200 ${isSensitivityExpand ? "-rotate-90" : "rotate-0"}`}
                />
                <div className="flex flex-row items-center gap-3">
                  <p className="underline underline-offset-[5px] font-medium text-sm text-neutral-neutral30">
                    حساسیت غذایی خود را وارد کنید
                  </p>
                  <WarningIcon />
                </div>
              </div>
              {isSensitivityExpand && (
                <div
                  onClick={() => setIsSensitivityExpand(false)} // Prevent click event from propagating
                >
                  <FoodSensitivities />
                </div>
              )}
            </div>
            <div className="w-full bg-neutral-neutral90 h-2" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Purchase;
