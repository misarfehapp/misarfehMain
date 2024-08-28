"use client";
import { useState } from "react";

const OptionBar = () => {
  const [selectedOption, setSelectedOption] = useState<string>("نقشه");
  console.log(selectedOption);
  
  return (
    <div className="w-[398px] h-[52px] justify-around bg-neutral-neutral90 rounded-rounded-13 flex items-center relative">
      <div className="absolute w-[179px] h-[38px] bg-white rounded-rounded-12 ml-[10px] left-0" />
      <div className="z-10" onClick={() => setSelectedOption("لیست")}>
        <p>لیست</p>
      </div>
      <div className="z-10" onClick={() => setSelectedOption("نقشه")}>
        <p>نقشه</p>
      </div>
    </div>
  );
};
export default OptionBar;
