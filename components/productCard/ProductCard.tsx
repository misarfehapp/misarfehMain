"use client";
import Image, { StaticImageData } from "next/image";
import HeartIcon from "./HeartIcon";
import { TimeHTMLAttributes, useState } from "react";
import LocationIcon from "./LocationIcon";

interface ProductCardProps {
  title: string;
  priceBefore: number;
  priceAfter: number;
  discount: number;
  productImageSrc: StaticImageData;
  restaurantImageSrc: StaticImageData;
  descriptionTitle: string;
  description: string;
  startPickUp: string;
  endPickUp: string;
  distance: number;
  width?: string;
}

const ProductCard = ({
  title,
  priceBefore,
  priceAfter,
  discount,
  productImageSrc,
  restaurantImageSrc,
  descriptionTitle,
  description,
  startPickUp,
  endPickUp,
  distance,
  width,
}: ProductCardProps) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const handleClick = () => {
    setIsSelected((prev) => !prev);
  };
  return (
    <div className={`${width ? width : "w-[245px]"} h-[125px] relative`}>
      <div className="w-full h-[124px] absolute top-10 rounded-rounded-7 bg-gradient-to-t from-black/90 to-black/0" />
      <div className="absolute inset-0 flex flex-row-reverse items-start justify-between p-2">
        <div className="bg-black/70 h-[14px] w-[14px] flex justify-center items-center rounded-full ">
          <HeartIcon onClick={handleClick} isSelected={isSelected} />
        </div>
        <h3 className="text-[8px] bg-black/70 font-medium text-white px-1 rounded-full">
          {title}
        </h3>
      </div>
      <Image
        src={productImageSrc}
        alt="product"
        width={width ? 398 : 245}
        height={125}
        className={`rounded-rounded-7 ${width ? "h-[164px]" : ""}`}
      />
      {/* price */}
      <div className="absolute -bottom-8 right-2 flex flex-row justify-start gap-2 items-center w-[127px] h-[18px]">
        <p
          style={{ direction: "rtl" }}
          className="text-white font-bold text-xs drop-shadow-2xl flex flex-row"
        >
          {priceAfter.toLocaleString()} <span>تومان</span>
        </p>
        <p
          className="text-2xs font-medium text-white w-[32px] h-[14px]"
          style={{
            direction: "rtl",
          }}
        >
          <span
            className="absolute inset-0 top-2 right-[4.35rem] bg-light-error w-[36px] h-[1.5px]"
            style={{ borderRadius: "100px" }}
          />
          {priceBefore.toLocaleString()}
        </p>
        <p className="text-[6px] text-white bg-light-error font-bold w-[17px] h-[14px] rounded-full flex flex-row justify-center items-center px-[4px] ">
          {discount} <span>%</span>
        </p>
      </div>
      {/* restaurant image */}
      <div className="absolute -bottom-[38px] left-[1px] ring-2 ring-white rounded-tr-rounded-7 rounded-bl-rounded-7">
        <Image
          src={restaurantImageSrc}
          alt="restaurant"
          width={31}
          height={24}
          className="rounded-tr-rounded-7 rounded-bl-rounded-7"
        />
      </div>
      {/* description */}
      <div className="px-2 mt-2 " style={{ direction: "rtl" }}>
        <h2 className="text-xs text-neutral-neutral25">{descriptionTitle}</h2>
        <div className="flex flex-row gap-2">
          <div className="flex flex-row text-xs font-normal gap-1 text-neutral-neutral25">
            <p>{description}</p>
            <p>
              {startPickUp} <span>-</span> {endPickUp}
            </p>
          </div>
          <div className="text-xs flex flex-row items-center text-neutral-neutral40 gap-0.5">
            <LocationIcon />
            <p className="flex flex-row gap-1">
              {distance} <span>ک</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
