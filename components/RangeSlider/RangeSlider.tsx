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
}

const RangeSlider = ({
  initialMax,
  initialMin,
  min,
  max,
  step,
  priceCap,
}: RangeSliderProps) => {
  const progressRef = useRef<HTMLDivElement | null>(null);
  const minThumbRef = useRef<HTMLDivElement | null>(null);
  const maxThumbRef = useRef<HTMLDivElement | null>(null);

  const [minValue, setMinValue] = useState<number>(initialMin);
  const [maxValue, setMaxValue] = useState<number>(initialMax);

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
      minThumbRef.current.style.left = `calc(${minPercent}% - 12px)`;
    }

    if (maxThumbRef.current) {
      const maxPercent = (maxValue / max) * 100;
      maxThumbRef.current.style.left = `calc(${maxPercent}% - 12px)`;
    }
  }, [minValue, maxValue, max]);

  return (
    <div className="w-[398px] relative">
      <div className="slider relative h-1.5 rounded-md bg-gray-300">
        <div
          className="progress absolute h-1.5 rounded bg-neutral-neutral15"
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
        {/* Custom Thumbs */}
        <div
          ref={minThumbRef}
          className="absolute -top-3.5 z-10 pointer-events-none"
        >
          <CustomThumb />
        </div>
        <div
          ref={maxThumbRef}
          className="absolute -top-3.5 z-10 pointer-events-none"
        >
          <CustomThumb />
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;
