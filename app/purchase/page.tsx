"use client";
import ChevronLeftIcon from "@/components/address section/ChevronLeftIcon";
import DiscountIcon from "@/components/icons/DiscountIcon";
import OptionBar from "@/components/OptionBar/OptionBar";
import ProductTracker from "@/components/productTracker/ProductTracker";
import ArrowBack from "@/components/user header/ArrowBack";
import Link from "next/link";
import { useState } from "react";

const Purchase = () => {
  const [selectedOption, setSelectedOption] = useState<string>("حضوری");
  const [discount, setDiscount] = useState<number>(0);
  const [productPrice, setProductPrice] = useState<number>(500000);
  const [total, setTotal] = useState<number>(0);
  const [isDiscountExpand, setIsDiscountExpand] = useState<boolean>(false);
  const handleDiscountExpand = () => {
    setIsDiscountExpand((prev: any) => !prev);
  };
  const [discountCode, setDiscountCode] = useState<string>("");
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
                      className="px-3 py-2 border text-right w-44 rounded-md border-neutral-neutral80 focus:outline-none focus:ring-2 focus:ring-primary"
                      onChange={(e) => setDiscountCode(e.target.value)}
                    />
                    <p className="text-neutral-neutral30 font-medium text-sm">
                      :کد تخفیف خود را وارد کنید
                    </p>
                  </div>
                  <button className="w-28 mt-2 py-2 bg-primary text-white bg-key-colors-primary text-sm font-medium rounded-md">
                    اعمال کد
                  </button>
                </div>
              )}
            </div>
            <div className="w-full bg-neutral-neutral90 h-2" />
            <div>
                
            </div>
            <div className="w-full bg-neutral-neutral90 h-2" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Purchase;
