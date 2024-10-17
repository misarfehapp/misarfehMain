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

interface DrawerComponentProps {
  type: string;
}

const DrawerComponent = ({ type }: DrawerComponentProps) => {
  const [selectedDay, setSelectedDay] = useState<string>("امروز");
  const changeDayHandler = () => {
    selectedDay === "امروز" && setSelectedDay("فردا");
    selectedDay === "فردا" && setSelectedDay("امروز");
  };
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
                  className={`${selectedDay === "امروز" ? "bg-neutral-neutral15 text-white" : "text-neutral-neutral40"} ring-2 ring-neutral-neutral90 rounded-rounded-7 py-3 px-4 min-w-[170px] max-h-[44px] text-center`}
                  onClick={changeDayHandler}
                >
                  امروز
                </div>
                <div
                  className={`${selectedDay === "فردا" ? "bg-neutral-neutral15 text-white" : "text-neutral-neutral40"} ring-2 ring-neutral-neutral90 rounded-rounded-7 py-3 px-4 min-w-[170px] max-h-[44px] text-center`}
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
          </div>
          <DrawerFooter className="flex justify-center mt-4">
            <button className="bg-primary text-black py-2 px-4 rounded-md">
              انتخاب و ورود
            </button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
export default DrawerComponent;
