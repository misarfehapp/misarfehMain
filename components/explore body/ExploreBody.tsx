"use client";
import { useState } from "react";
import dynamic from 'next/dynamic';
import OptionBar from "../OptionBar/OptionBar";
import FoodsList from "./FoodsList";

const MapSection = dynamic(
  () => import('./MapSection'),
  { ssr: false }
);

const ExploreBody = () => {
  const [selectedOption, setSelectedOption] = useState<string>("لیست");
  
  return (
    <div className="flex flex-col justify-center w-full gap-3">
      <OptionBar type="explore" setSelectedOption={setSelectedOption} />
      {selectedOption === "لیست" ? <FoodsList /> : <MapSection />}
    </div>
  );
};

export default ExploreBody;
