"use client";
import React, { useEffect, useRef, useState } from "react";

let currentOTPIndex: number = 0;
const OTPInput = () => {
  const [otp, setOtp] = useState<string[]>(new Array(5).fill(""));
  const [activeOTPIndex, setActiveOTPIndex] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = target;
    const newOTP: string[] = [...otp];

    newOTP[currentOTPIndex] = value.substring(value.length - 1);

    if (!value) setActiveOTPIndex(currentOTPIndex - 1);
    else setActiveOTPIndex(currentOTPIndex + 1);

    setOtp(newOTP);
  };

  const handleKeyDown = (
    { key }: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    currentOTPIndex = index;
    if (key === "Backspace") setActiveOTPIndex(currentOTPIndex - 1);
  };
  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOTPIndex]);

  return (
    <div className="flex items-center space-x-2">
      {otp.map((_, index) => (
        <div key={index}>
          <input
            ref={index === activeOTPIndex ? inputRef : null}
            type="number"
            value={otp[index]}
            className="w-[74.5px] h-12 ring-2 rounded-rounded-7 bg-transparent outline-none text-center font-semibold text-xl ring-[#C7C6CA] focus:ring-[#006000] focus:w-[68px] focus:h-[54px] text-[#46464A] transition"
            onChange={handleOnChange}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        </div>
      ))}
    </div>
  );
};
export default OTPInput;
