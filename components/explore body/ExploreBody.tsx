"use client";
import { useState } from "react";
import OptionBar from "../OptionBar/OptionBar";
import FoodsList from "./FoodsList";
import dynamic from 'next/dynamic';
import ExploreHeader from "../explore header/ExploreHeader";

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
  const [searchRadius, setSearchRadius] = useState<number>(5);
  
  return (
    <div className="flex flex-col justify-center w-full gap-3">
      <ExploreHeader setSearchRadius={setSearchRadius} />
      <OptionBar type="explore" setSelectedOption={setSelectedOption} />
      {selectedOption === "لیست" ? <FoodsList /> : <MapSection searchRadius={searchRadius} />}
    </div>
  );
};

export default ExploreBody;
