"use client";
import StarIcon from "@/components/comments/StarIcon";
import HeadPhoneIcon from "@/components/icons/HeadPhoneIcon";
import LocationIcon from "@/components/icons/LocationIcon";
import PhoneIcon from "@/components/icons/PhoneIcon";
import SuccessPaidIcon from "@/components/icons/SuccessPaidIcon";
import CrossIcon from "@/components/input/CrossIcon";
import ProductTracker from "@/components/productTracker/ProductTracker";
import Stepper from "@/components/stepper/Stepper";
import ArrowBack from "@/components/user header/ArrowBack";
import ChevronLeftIcon from "@/components/user selection/ChevronLeftIcon";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

const restaurantInfo = {
  name: "فست فود لاویا",
  rate: 4.5,
  phoneNumber: "071378983",
};

const cancelRules =
  "ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون  ورم ایپسوم ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون  ورم ایپسوم ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون  ورم ایپسوم ";

const OrderTracking = () => {
  const searchParams = useSearchParams();
  const trackingCode = searchParams.get("trackingCode"); // Get tracking code from URL
  const discount = searchParams.get("discount");
  const productPrice = searchParams.get("productPrice");
  const total = searchParams.get("total");
  const [isRulesExpand, setIsRulesExpand] = useState<boolean>(false);
  return (
    <Suspense>
      <div className="flex justify-center mx-4">
        <div className="w-full max-w-[398px] flex flex-col items-center gap-4">
          <div className="flex flex-col gap-4 w-full">
            {/* header */}
            <div className="flex flex-row justify-end mt-3 min-h-16 items-center border-b border-b-[#C7C6CA] px-5 gap-[10px]">
              <p className="font-medium text-base text-[#49454F]">
                پیگیری سفارش
              </p>
              <Link href={"/homePage"}>
                <ArrowBack />
              </Link>
            </div>
            {/* Success icon and tracking code */}
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="w-[76px] h-[76px] rounded-full bg-primary-primary90 flex justify-center items-center">
                <div className="w-[60.8px] h-[60.8px] bg-key-colors-primary rounded-full flex justify-center items-center">
                  <SuccessPaidIcon />
                </div>
              </div>
              <div className="flex flex-col gap-1 text-neutral-neutral30">
                <p className="font-bold text-sm">!سفارش شما ثبت شد</p>
                <p className="text-lg font-medium text-center">
                  کد پیگیری:{" "}
                  <span className="font-bold text-sm">{trackingCode}</span>
                </p>
              </div>
            </div>
            <div className="w-full bg-neutral-neutral90 h-2" />
            <div className="flex flex-col gap-3">
              <div
                className="flex flex-col text-neutral-neutral30 gap-1"
                style={{ direction: "rtl" }}
              >
                <p className="font-bold text-sm">پیگیری سفارش</p>
                <p className="text-2xs font-medium">
                  شما میتوانید اطلاعات خرید خود را مشاهده و وضعیت آماده سازی آن
                  را پیگیری کنید.
                </p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Stepper currentStep={1} progress={50} />
                <ProductTracker
                  type="homepage"
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
                {/* price table */}
                <div
                  style={{ direction: "rtl" }}
                  className="rounded-rounded-7 w-full  bg-neutral-neutral95 text-xs font-medium text-neutral-neutral30 flex flex-col"
                >
                  <div className="py-3 px-4 border-b-4 border-neutral-neutral80">
                    <div className="flex flex-row justify-between">
                      <p>مبلغ تخفیف</p>
                      <p className="text-center w-[100px]">
                        {discount && discount.toLocaleString()}{" "}
                        <span>تومان</span>
                      </p>
                    </div>
                    <div className="flex flex-row justify-between">
                      <p>مبلغ محصول</p>
                      <p className="text-center w-[100px]">
                        {productPrice && productPrice.toLocaleString()}{" "}
                        <span>تومان</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between py-3 px-4">
                    <p>مبلغ کل</p>
                    <p className="text-center w-[100px]">
                      {total && total.toLocaleString()} <span>تومان</span>
                    </p>
                  </div>
                </div>
                {/* restaurant info */}
                <div className="w-full rounded-rounded-7 py-3 px-4 bg-neutral-neutral95 flex flex-row gap-4 items-center ring-2 ring-neutral-neutral80 outline-none">
                  <ChevronLeftIcon />
                  <div className="flex flex-col items-end w-4/5">
                    <div className="flex flex-row items-center gap-1">
                      <p className="text-2xs font-medium text-neutral-neutral30">
                        {restaurantInfo.rate}
                      </p>
                      <StarIcon stroke="#FF6E01" fill="#FF6E01" />
                      <p className="text-neutral-neutral30 font-bold text-sm">
                        {restaurantInfo.name}
                      </p>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <p className="py-0.5 px-2 rounded-rounded-9 bg-primary-primary98 text-2xs font-bold text-key-colors-primary w-fit">
                        برای مسیریابی کلیک کنید
                      </p>
                      <p className="text-xs text-neutral-neutral30">
                        {restaurantInfo.phoneNumber.replace(
                          /\d{3}(?=\d)/g,
                          "$& "
                        )}
                      </p>
                      <PhoneIcon />
                    </div>
                  </div>
                  <LocationIcon />
                </div>
                {/* rules */}
                <div
                  className="flex flex-col gap-2"
                  style={{ direction: "rtl" }}
                >
                  <p className="font-bold text-sm text-neutral-neutral30">
                    قوانین لغو رزرو
                  </p>
                  {!isRulesExpand ? (
                    cancelRules.length > 150 ? (
                      <p className="text-xs font-medium text-neutral-neutral35">
                        {cancelRules.slice(0, 150)}
                        {"..."}
                        <span
                          className="text-key-colors-primary"
                          onClick={() => setIsRulesExpand(!isRulesExpand)}
                        >
                          بیشتر
                        </span>
                      </p>
                    ) : (
                      <p className="text-xs font-medium text-neutral-neutral35">
                        {cancelRules}
                      </p>
                    )
                  ) : (
                    <p className="text-xs font-medium text-neutral-neutral35">
                      {cancelRules}{" "}
                      <span
                        className="text-key-colors-primary"
                        onClick={() => setIsRulesExpand(!isRulesExpand)}
                      >
                        کمتر
                      </span>
                    </p>
                  )}
                </div>
                <div className="w-full flex flex-row items-center">
                  <div className="flex flex-row items-center gap-2 justify-center py-3 px-6 w-full rounded-rounded-7 text-xs font-medium text-neutral-neutral30">
                    <p>لغو رزرو</p>
                    <CrossIcon stroke="#484646" />
                  </div>
                  <div className="flex flex-row items-center gap-2 justify-center py-3 px-6 w-full rounded-rounded-7 text-xs font-medium text-key-colors-primary bg-neutral-neutral95">
                    <p>پشتیبانی</p>
                    <HeadPhoneIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};
export default OrderTracking;
