"use client";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Segment from "../segment/Segment";
import FilterIcon from "../explore header/FilterIcon";
import { useState } from "react";
import RangeSlider from "../RangeSlider/RangeSlider";
import CheckIcon from "../check box/CheckIcon";
import CrossIcon from "../input/CrossIcon";

interface DrawerComponentProps {
  type: string;
}

const surpriseKinds = ["نان و شیرینی", "سبزیجات", "ناهار", "سایر"];

const DrawerComponent = ({ type }: DrawerComponentProps) => {
  const [selectedDay, setSelectedDay] = useState<string>("امروز");
  const [selectedSurprises, setSelectedSurprises] = useState<string[]>([]); // Initialize with empty array

  const changeDayHandler = () => {
    selectedDay === "امروز" ? setSelectedDay("فردا") : setSelectedDay("امروز");
  };

  const toggleSurpriseSelection = (surprise: string) => {
    setSelectedSurprises((prevSelected) =>
      prevSelected.includes(surprise)
        ? prevSelected.filter((item) => item !== surprise)
        : [...prevSelected, surprise]
    );
  };
  console.log(selectedSurprises);

  return (
    <div>
      <Drawer>
        <DrawerTrigger>
          {type === "filter" ? (
            <div className="w-[50.5px] h-[50.5px] ring-2 ring-neutral-neutral80 rounded-rounded-9 py-2 px-4 flex justify-center items-center">
              <FilterIcon />
            </div>
          ) : (
            "open drawer"
          )}
        </DrawerTrigger>
        <DrawerContent
          className="w-full flex flex-col md:max-w-xl mx-auto gap-4"
          style={{ direction: "rtl" }}
        >
          <DrawerHeader>
            <div className="flex flex-col gap-1">
              <DrawerTitle className="text-[14px] text-right flex flex-col justify-center gap-4">
                {type === "filter" && "فیلترها"}
                <div className="w-full h-[3px] bg-neutral-neutral90" />
              </DrawerTitle>
              {type === "filter" ? (
                <></>
              ) : (
                <DrawerDescription
                  style={{ direction: "rtl" }}
                  className="text-2xs text-right"
                >
                  {" "}
                  اگر حساسیت غذایی دارید به ما اطلاع دهید تا به سلامتی شما کمک
                  کنیم!
                </DrawerDescription>
              )}
            </div>
          </DrawerHeader>
          <div className="flex flex-col justify-center gap-4">
            <div className="flex flex-col justify-center gap-3">
              <p className="text-sm font-bold text-neutral-neutral30">
                روز برداشت
              </p>
              <div className="flex flex-row justify-center items-center gap-3">
                <div
                  className={`${
                    selectedDay === "امروز"
                      ? "bg-neutral-neutral15 text-white"
                      : "text-neutral-neutral40"
                  } ring-2 ring-neutral-neutral90 rounded-rounded-7 py-3 px-4 min-w-[170px] max-h-[44px] text-center`}
                  onClick={changeDayHandler}
                >
                  امروز
                </div>
                <div
                  className={`${
                    selectedDay === "فردا"
                      ? "bg-neutral-neutral15 text-white"
                      : "text-neutral-neutral40"
                  } ring-2 ring-neutral-neutral90 rounded-rounded-7 py-3 px-4 min-w-[170px] max-h-[44px] text-center`}
                  onClick={changeDayHandler}
                >
                  فردا
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-3">
              <p className="text-sm font-bold text-neutral-neutral30">
                ساعت برداشت
              </p>
              <div style={{ direction: "ltr" }}>
                <RangeSlider
                  initialMin={420} // Starting value in minutes (e.g., 0 minutes)
                  initialMax={1140} // Ending value in minutes (e.g., 240 minutes = 4 hours)
                  min={0} // Minimum value (0 minutes)
                  max={1440} // Maximum value (1440 minutes = 24 hours)
                  step={15} // Step size (15 minutes)
                  priceCap={60} // Minimum difference (e.g., 60 minutes)
                  type="time" // Set the type to "time"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center gap-3 mt-12">
              <p className="text-sm font-bold text-neutral-neutral30">
                نوع سورپرایز
              </p>
              <div className="flex flex-row gap-2">
                {surpriseKinds.map((surprise) => (
                  <div
                    key={surprise}
                    className={`cursor-pointer border-2 rounded-rounded-7 px-4 py-2 text-sm font-medium ${
                      selectedSurprises.includes(surprise)
                        ? "bg-neutral-neutral15 text-white border-primary"
                        : "bg-white text-black border-gray-300"
                    }`}
                    onClick={() => toggleSurpriseSelection(surprise)}
                  >
                    {surprise}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <DrawerFooter className="flex justify-center">
            <DrawerClose asChild>
              <button className="bg-[#006000] text-white py-3 px-6 rounded-rounded-7 text-xs flex flex-row gap-2 justify-center items-center">
                <CheckIcon />
                اعمال فیلتر ها
              </button>
            </DrawerClose>
            <DrawerClose asChild>
              <button className="text-neutral-neutral50 py-3 px-6 rounded-rounded-7 text-xs flex flex-row gap-2 justify-center items-center">
                <CrossIcon stroke="#797776" />
                لغو همه
              </button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
export default DrawerComponent;
