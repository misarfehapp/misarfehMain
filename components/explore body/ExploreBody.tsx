"use client";
import { useState } from "react";
import OptionBar from "../OptionBar/OptionBar";
import FoodsList from "./FoodsList";
import dynamic from 'next/dynamic';

const MapSection = dynamic(
  () => import('./MapSection'),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-[calc(85vh-200px)] bg-gray-100 animate-pulse" />
    )
  }
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
