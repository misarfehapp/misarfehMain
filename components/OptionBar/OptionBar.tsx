"use client";
import { motion } from "framer-motion";
import PlusIcon from "./PlusIcon";
import ListIcon from "./ListIcon";
import { useState } from "react";
import MapIcon from "./MapIcon";

interface OptionBarProps {
  type: "support" | "explore" | "order";
  setSelectedOption: (option: string) => void;
}

const OptionBar = ({ type, setSelectedOption }: OptionBarProps) => {
  const [selectedOption, setLocalSelectedOption] = useState<string>(
    type === "support" ? "ثبت تیکت" : type === "explore" ? "لیست" : "حضوری"
  );

  const handleSelect = (option: string) => {
    setLocalSelectedOption(option);
    setSelectedOption(option);
  };

  return (
    <div className="w-full h-[52px] justify-around bg-neutral-neutral90 rounded-rounded-13 flex items-center relative">
      <motion.div
        className="absolute w-[45%] h-[38px] bg-white rounded-rounded-12 ml-[10px]"
        animate={{
          left:
            type === "support"
              ? selectedOption === "تیکت ها"
                ? 0
                : "auto"
              : type === "explore"
                ? selectedOption === "لیست"
                  ? 0
                  : "auto"
                : selectedOption === "حضوری"
                  ? 0
                  : "auto",
          right:
            type === "support"
              ? selectedOption === "ثبت تیکت"
                ? "8px"
                : "auto"
              : type === "explore"
                ? selectedOption === "نقشه"
                  ? "8px"
                  : "auto"
                : selectedOption === "پیک"
                  ? "8px"
                  : "auto",
        }}
        initial={false}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      <div
        className={`z-10 w-1/2 text-center h-full flex ${type === "order" ? "flex-col" : "flex-row gap-[10px]"} justify-center items-center`}
        onClick={() =>
          handleSelect(
            type === "support"
              ? "تیکت ها"
              : type === "explore"
                ? "لیست"
                : "حضوری"
          )
        }
      >
        <p className="text-sm">
          {type === "support"
            ? "تیکت ها"
            : type === "explore"
              ? "لیست"
              : "حضوری"}
        </p>
        {type === "support" || type === "explore" ? (
          <ListIcon />
        ) : (
          <p className="text-xs font-medium text-neutral-neutral35">5 - 15 min 1.7 km</p>
        )}
      </div>
      <div
        className={`z-10 w-1/2 text-center h-full flex ${type === "order" ? "flex-col" : "flex-row gap-[10px]"} justify-center items-center`}
        onClick={() =>
          handleSelect(
            type === "support"
              ? "ثبت تیکت"
              : type === "explore"
                ? "نقشه"
                : "پیک"
          )
        }
      >
        <p className="text-sm">
          {type === "support"
            ? "ثبت تیکت"
            : type === "explore"
              ? "نقشه"
              : "پیک"}
        </p>
        {type === "support" ? (
          <PlusIcon />
        ) : type === "explore" ? (
          <MapIcon />
        ) : (
          <p className="text-xs font-medium text-neutral-neutral35">25 - 35 min 1.7 km</p>
        )}
      </div>
    </div>
  );
};

export default OptionBar;
