"use client";
import { useState, useEffect, useRef } from "react";
import CustomThumb from "./CustomThumb";

interface LocationSliderProps {
  initial?: number;
  min: number;
  max: number;
  step: number;
  onChange?: (value: number) => void;
}

const LocationSlider = ({
  initial = 5,
  min = 0,
  max = 20,
  step = 1,
  onChange,
}: LocationSliderProps) => {
  const [value, setValue] = useState(initial);
  const progressRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  const formatValue = (value: number): string => {
    return `${value} km`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  useEffect(() => {
    if (progressRef.current && thumbRef.current) {
      const percent = ((value - min) / (max - min)) * 100;
      progressRef.current.style.left = `0%`;
      progressRef.current.style.right = `${100 - percent}%`;
      thumbRef.current.style.left = `calc(${percent}% - 8px)`;
    }
  }, [value, min, max]);

  return (
    <div className="w-full relative">
      <div className="slider relative h-1.5 rounded-md bg-gray-300">
        <div
          className="progress absolute h-1.5 rounded bg-neutral-neutral15"
          ref={progressRef}
        ></div>
      </div>
      <div className="range-input relative">
        <input
          onChange={handleChange}
          type="range"
          min={min}
          step={step}
          max={max}
          value={value}
          className="range-min absolute w-full -top-1 h-1.5 bg-transparent appearance-none pointer-events-none"
        />
        {/* Custom Thumb and Value Label */}
        <div
          ref={thumbRef}
          className="absolute -top-3.5 z-10 pointer-events-none"
        >
          <CustomThumb />
          <div className="absolute -bottom-9 left-1/2 transform -translate-x-1/2 text-center bg-gray-200 py-0.5 px-2 min-w-[70px] h-[24px] text-neutral-neutral30 rounded-rounded-6">
            <div
              aria-hidden="true"
              className="absolute inset-0 left-[30px] -top-1 h-[10px] w-[10px] transform rotate-45 bg-gray-200"
            />
            {formatValue(value)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSlider;
