"use client";
import { useEffect, useState } from "react";

interface SuccessPopUpProps {
  trackingCode: number;
}

const SuccessPopUp = ({ trackingCode }: SuccessPopUpProps) => {
  const [seconds, setSeconds] = useState(10);
  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
      return () => clearTimeout(timer); // Clean up the timer on unmount
    } else {
      // Handle redirect or other logic here when the timer reaches 0
    }
  }, [seconds]);
  return (
    <div className="w-[226px] rounded-rounded-7 ring-2 ring-light-primary p-4 flex flex-col justify-center items-center gap-4">
      <div className="flex flex-col gap-2 justify-center items-center">
        <h2 className="font-medium text-[18px] text-center text-neutral-neutral30">
          خرید موفق
        </h2>
        <p className="text-center text-xs font-normal text-neutral-neutral40">
          خرید شما موفق آمیز بود و 10 ثانیه دیگر به صفحه خرید منتقل میشوید
        </p>
      </div>
      <div className="flex gap-1 text-[18px] font-medium justify-center items-center text-light-primary">
        <span className="bg-light-primary text-white w-[32px] h-[32px] rounded-rounded-6 text-[18px] flex justify-center items-center">
          00
        </span>
        :
        <span className="bg-light-primary text-white w-[32px] h-[32px] rounded-rounded-6 text-[18px] flex justify-center items-center">
          {String(seconds).padStart(2, "0")}
        </span>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center">
        <p className="text-[12px] font-medium text-center">
          کد پیگیری: <span>{trackingCode}</span>
        </p>
        <button
          type="submit"
          className="w-[194px] rounded-rounded-7 bg-light-primary text-white py-3 px-6 text-xs font-medium"
        >
          متوجه شدم
        </button>
      </div>
    </div>
  );
};
export default SuccessPopUp;
