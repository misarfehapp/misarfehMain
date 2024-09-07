"use client";
import { useState } from "react";
import InputIcon from "./InputIcon";
const validPrefixes = [
  "0914",
  "0913",
  "0919",
  "0912",
  "0918",
  "0917",
  "0915",
  "0916",
  "0911",
  "0996",
  "0994",
  "0993",
  "0992",
  "0991",
  "0990",
  "0910",
  "0932",
  "0930",
  "0933",
  "0935",
  "0936",
  "0937",
  "0938",
  "0939",
  "0900",
  "0901",
  "0902",
  "0903",
  "0904",
  "0905",
  "0941",
  "0920",
  "0921",
  "0922",
  "0923",
  "0934",
  "099910",
  "099911",
  "099913",
  "099914",
  "099999",
  "09999",
  "09990",
  "099810",
  "099811",
  "099812",
  "099813",
  "099814",
  "099815",
  "099816",
  "099817",
  "09998",
];

const Input = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(true);
  const [showError, setShowError] = useState(false);

  const isValidPhoneNumber = (phoneNumber: string) => {
    if (phoneNumber.length !== 11) return false;
    return validPrefixes.some((prefix) => phoneNumber.startsWith(prefix));
  };

  const handleChange = (e: { target: { value: any } }) => {
    const value = e.target.value;
    if (value.length <= 11) {
      setPhoneNumber(value);
      if (value.length === 11) {
        const valid = isValidPhoneNumber(value);
        setIsValid(valid);
        setShowError(!valid);
      } else {
        setIsValid(true);
        setShowError(false);
      }
    }
  };

  return (
    <div className="relative w-[310px] h-[70px]">
      <label
        htmlFor="phone"
        className="absolute bg-gradient-to-t from-[#FBF8FD] to-white left-[14.5rem] text-center -top-2 px-1 font-normal text-[10px] h-[14px] w-14"
      >
        شماره تلفن
      </label>
      <InputIcon className="absolute left-3 top-1/3 transform -translate-y-1/2" />
      <input
        id="phone"
        style={{
          direction: "rtl",
        }}
        type="number"
        value={phoneNumber}
        onChange={handleChange}
        placeholder="09121234567"
        className={`h-12 border-[1.5px] ${isValid ? "border-[#C7C6CA]" : "border-red-500"} rounded-rounded-7 bg-[#FBF8FD] pr-10 pl-14 outline-none`}
      />
      <InputIcon className="absolute right-6 top-1/3 transform -translate-y-1/2" />
      {showError && (
        <p
          className="text-red-500 text-xs mt-[10px] pr-4"
          style={{ direction: "rtl" }}
        >
          شماره تلفن معتبر نیست!
        </p>
      )}
    </div>
  );
};
export default Input;
