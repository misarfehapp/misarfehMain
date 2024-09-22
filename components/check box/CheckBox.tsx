"use client";
import { useState } from "react";
import CheckIcon from "./CheckIcon";


const CheckBox = () => {
  const [boxActive, setBoxActive] = useState<boolean>(false);
  return (
    <div className="w-6 h-6 cursor-pointer">
      <div
        className={`h-[18px] w-[18px] flex justify-center items-center ring-2  outline-none rounded-rounded-2 ${boxActive ? "bg-light-primary ring-light-primary" : "bg-white ring-[#49454F]"}`}
        onClick={() => setBoxActive(!boxActive)}
      >
        { boxActive ? <CheckIcon /> : <></>}
      </div>
    </div>
  );
};
export default CheckBox;
