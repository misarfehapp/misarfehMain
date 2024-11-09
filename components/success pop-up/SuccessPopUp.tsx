"use client";
import { Suspense, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import ProgressBarProvider from "../progress bar/ProgressBarProvider";

interface SuccessPopUpProps {
  trackingCode: number;
}

const SuccessPopUp = ({ trackingCode }: SuccessPopUpProps) => {
  const [seconds, setSeconds] = useState(10);
  const router = useRouter();
  const searchParams = useSearchParams();
  const discount = searchParams.get("discount");
  const productPrice = searchParams.get("productPrice");
  const total = searchParams.get("total");
  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
      return () => clearTimeout(timer); // Clean up the timer on unmount
    } else {
      // Handle redirect or other logic here when the timer reaches 0
      router.push(
        `/orderTracking?trackingCode=${trackingCode}&discount=${discount}&productPrice=${productPrice}&total=${total}`
      );
    }
  }, [seconds]);
  return (
    <Suspense>
      <ProgressBarProvider>
        <div className="w-[226px] rounded-rounded-7 ring-2 ring-key-colors-primary p-4 outline-none flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col gap-2 justify-center items-center">
            <h2 className="font-medium text-lg text-center text-neutral-neutral30">
              خرید موفق
            </h2>
            <p className="text-center text-xs font-normal text-neutral-neutral40">
              خرید شما موفق آمیز بود و 10 ثانیه دیگر به صفحه خرید منتقل میشوید
            </p>
          </div>
          <div className="flex gap-1 text-[18px] font-medium justify-center items-center text-key-colors-primary">
            <span className="bg-key-colors-primary text-white w-[32px] h-[32px] rounded-rounded-6 text-[18px] flex justify-center items-center">
              00
            </span>
            :
            <span className="bg-key-colors-primary text-white w-[32px] h-[32px] rounded-rounded-6 text-[18px] flex justify-center items-center">
              {String(seconds).padStart(2, "0")}
            </span>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className="text-xs font-medium text-center text-neutral-neutral30">
              کد پیگیری: <span className="font-bold">{trackingCode}</span>
            </p>
            <Link
              href={`/orderTracking?trackingCode=${trackingCode}&discount=${discount}&productPrice=${productPrice}&total=${total}`}
              className="w-[194px] rounded-rounded-7 bg-key-colors-primary text-white py-3 px-6 text-xs font-medium text-center"
            >
              متوجه شدم
            </Link>
          </div>
        </div>
      </ProgressBarProvider>
    </Suspense>
  );
};
export default SuccessPopUp;
