"use client";
import { motion } from "framer-motion";
import PlusIcon from "./PlusIcon";
import ListIcon from "./ListIcon";
import { useState } from "react";

interface OptionBarProps {
  type: string;
  setSelectedOption: (option: string) => void;
}

const OptionBar = ({ type, setSelectedOption }: OptionBarProps) => {
  const [selectedOption, setLocalSelectedOption] = useState<string>(
    type === "support" ? "ثبت تیکت" : "نقشه"
  );

  const handleSelect = (option: string) => {
    setLocalSelectedOption(option);
    setSelectedOption(option);
  };

  return (
    <div className="w-full h-[52px] justify-around bg-neutral-neutral90 rounded-rounded-13 flex items-center relative">
      <motion.div
        className="absolute w-[179px] h-[38px] bg-white rounded-rounded-12 ml-[10px]"
        animate={{
          left:
            type === "support"
              ? selectedOption === "تیکت ها"
                ? 0
                : "auto"
              : 0,
          right:
            type === "support"
              ? selectedOption === "ثبت تیکت"
                ? "8px"
                : "auto"
              : "8px",
        }}
        initial={false}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      <div
        className="z-10 w-1/2 text-center h-full flex flex-row gap-[10px] justify-center items-center"
        onClick={() => handleSelect(type === "support" ? "تیکت ها" : "لیست")}
      >
        <p>{type === "support" ? "تیکت ها" : "لیست"}</p>
        <ListIcon />
      </div>
      <div
        className="z-10 w-1/2 text-center h-full flex flex-row gap-[10px] justify-center items-center"
        onClick={() => handleSelect(type === "support" ? "ثبت تیکت" : "نقشه")}
      >
        <p>{type === "support" ? "ثبت تیکت" : "نقشه"}</p>
        {type === "support" && <PlusIcon />}
      </div>
    </div>
  );
};

export default OptionBar;
