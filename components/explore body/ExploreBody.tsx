"use client";
import { useState } from "react";
import OptionBar from "../OptionBar/OptionBar";
const ExploreBody = () => {
    const [selectedOption, setSelectedOption] = useState<string>("لیست");
  return (
    <div className="flex flex-col justify-center w-full gap-3">
      <OptionBar type="explore" setSelectedOption={setSelectedOption} />

      {/* {selectedOption === "ثبت تیکت" ? <FoodsList /> : <MapSection />} */}
    </div>
  );
};
export default ExploreBody;
