"use client";
import { useState, useEffect, useRef } from "react";
import CustomThumb from "./CustomThumb";

interface RangeSliderProps {
  initialMin: number;
  initialMax: number;
  min: number;
  max: number;
  step: number;
  priceCap: number;
  type: "price" | "time"; // Added type prop
}

const RangeSlider = ({
  initialMax,
  initialMin,
  min,
  max,
  step,
  priceCap,
  type, // Destructure type prop
}: RangeSliderProps) => {
  const progressRef = useRef<HTMLDivElement | null>(null);
  const minThumbRef = useRef<HTMLDivElement | null>(null);
  const maxThumbRef = useRef<HTMLDivElement | null>(null);

  const [minValue, setMinValue] = useState<number>(initialMin);
  const [maxValue, setMaxValue] = useState<number>(initialMax);

  const formatValue = (value: number): string => {
    if (type === "price") {
      return `${value}`;
    } else if (type === "time") {
      const hours = Math.floor(value / 60);
      const minutes = value % 60;

      // Return time in "HH:MM" format, zero-padded
      const formattedHours = String(hours).padStart(2, "0");
      const formattedMinutes = String(minutes).padStart(2, "0");

      return `${formattedHours}:${formattedMinutes}`;
    }
    return value.toString();
  };

  const handleMin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (maxValue - minValue >= priceCap && value <= max) {
      if (value > maxValue) {
        return;
      } else {
        setMinValue(value);
      }
    } else {
      if (value < minValue) {
        setMinValue(value);
      }
    }
  };

  const handleMax = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (maxValue - minValue >= priceCap && value >= min) {
      if (value < minValue) {
        return;
      } else {
        setMaxValue(value);
      }
    } else {
      if (value > maxValue) {
        setMaxValue(value);
      }
    }
  };

  useEffect(() => {
    if (progressRef.current) {
      const minPercent = (minValue / max) * 100;
      const maxPercent = 100 - (maxValue / max) * 100;
      progressRef.current.style.left = `${minPercent}%`;
      progressRef.current.style.right = `${maxPercent}%`;
    }

    if (minThumbRef.current) {
      const minPercent = (minValue / max) * 100;
      minThumbRef.current.style.left = `calc(${minPercent}% - 8px)`;
    }

    if (maxThumbRef.current) {
      const maxPercent = (maxValue / max) * 100;
      maxThumbRef.current.style.left = `calc(${maxPercent}% - 20px)`;
    }
  }, [minValue, maxValue, max]);

  return (
    <div className="w-full relative">
      <div className="slider relative h-1.5 rounded-md bg-gray-300">
        <div
          className="progress absolute h-1.5 rounded bg-black"
          ref={progressRef}
        ></div>
      </div>
      <div className="range-input relative">
        <input
          onChange={handleMin}
          type="range"
          min={min}
          step={step}
          max={max}
          value={minValue}
          className="range-min absolute w-full -top-1 h-1.5 bg-transparent appearance-none pointer-events-none"
        />
        <input
          onChange={handleMax}
          type="range"
          min={min}
          step={step}
          max={max}
          value={maxValue}
          className="range-max absolute w-full -top-1 h-1.5 bg-transparent appearance-none pointer-events-none"
        />
        {/* Custom Thumbs and Value Labels */}
        <div
          ref={minThumbRef}
          className="absolute -top-3.5 z-10 pointer-events-none"
        >
          <CustomThumb />
          <div className="absolute -bottom-9 left-1/2 transform -translate-x-1/2 text-center bg-gray-200 py-0.5 px-2  min-w-[50px] h-[24px] text-neutral-neutral30 rounded-rounded-6">
            <div
              aria-hidden="true"
              className="absolute inset-0 left-[19px] -top-1 h-[10px] w-[10px] transform rotate-45 bg-gray-200 "
            />
            {formatValue(minValue)}
          </div>
        </div>
        <div
          ref={maxThumbRef}
          className="absolute -top-3.5 z-10 pointer-events-none"
        >
          <CustomThumb />
          <div className="absolute -bottom-9 left-1/2 transform -translate-x-1/2 text-center bg-gray-200 py-0.5 px-2 w-[50px] h-[24px] text-neutral-neutral30 rounded-rounded-6">
            <div
              aria-hidden="true"
              className="absolute inset-0 left-[19px] -top-1 h-[10px] w-[10px] transform rotate-45 bg-gray-200 "
            />
            {formatValue(maxValue)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;
