"use client";
import Image, { StaticImageData } from "next/image";
import HeartIcon from "./HeartIcon";
import { TimeHTMLAttributes, useState } from "react";
import LocationIcon from "./LocationIcon";
import StarIcon from "../comments/StarIcon";
import ShareIcon from "./ShareIcon";

interface ProductCardProps {
  title: string;
  priceBefore: number;
  priceAfter: number;
  discount: number;
  productImageSrc: StaticImageData;
  restaurantImageSrc: StaticImageData;
  descriptionTitle: string;
  distance: number;
  rate: number;
  location: string;
  width?: string;
}

const OrderProductCard = ({
  title,
  priceBefore,
  priceAfter,
  discount,
  productImageSrc,
  restaurantImageSrc,
  descriptionTitle,
  distance,
  location,
  rate,
  width,
}: ProductCardProps) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const handleClick = () => {
    setIsSelected((prev) => !prev);
  };
  return (
    <div className={`${width ? width : "w-[245px]"} h-[125px] relative`}>
      <div className="w-full h-[124px] absolute top-10 rounded-rounded-7 bg-gradient-to-t from-black/90 to-black/0" />
      <div className="absolute inset-0 flex flex-row items-start justify-between p-2">
        <div className="flex flex-row gap-2 items-center">
          <div className="bg-white h-5 w-8 flex justify-center items-center rounded-full ">
            <HeartIcon
              isOrderCard={true}
              stroke="#000"
              onClick={handleClick}
              isSelected={isSelected}
            />
          </div>
          <div className="bg-white h-5 w-8 flex justify-center items-center rounded-full ">
            <ShareIcon />
          </div>
        </div>
        <h3 className="text-2xs min-w-[45px] min-h-[18px] flex justify-center items-center bg-white font-medium text-neutral-neutral30 rounded-full">
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
      <div className="absolute -bottom-8 left-2 flex flex-row-reverse justify-start gap-2 items-center w-[127px] h-[18px]">
        <p
          style={{ direction: "rtl" }}
          className="text-white font-bold text-xs drop-shadow-2xl flex flex-row"
        >
          {priceAfter.toLocaleString()} <span>تومان</span>
        </p>
        <div className="relative flex items-center">
          <p
            className="text-2xs font-medium text-white w-[32px] h-[14px]"
            style={{
              direction: "rtl",
            }}
          >
            {priceBefore.toLocaleString()}
          </p>
          <span
            className="absolute bg-light-error w-full h-[1.5px]"
            style={{ borderRadius: "100px" }}
          />
        </div>
        <div className="relative flex items-center justify-center transform translate-y-0 translate-x-0.5">
          <p className="text-[6px] text-white bg-light-error font-bold w-[17px] h-[14px] rounded-full flex flex-row justify-center items-center px-[4px] ">
            {discount} <span>%</span>
          </p>
        </div>
      </div>
      {/* restaurant image */}
      <div className="absolute -bottom-[80px] right-[12px] ring-[5px] ring-white rounded-rounded-7">
        <Image
          src={restaurantImageSrc}
          alt="restaurant"
          width={75}
          height={68}
          className="rounded-rounded-7"
        />
      </div>
      {/* description */}
      <div className="px-2 mt-2 absolute right-24" style={{ direction: "rtl" }}>
        <h2 className="text-sm text-neutral-neutral30 font-bold">
          {descriptionTitle}
        </h2>
        <div className="flex flex-row gap-2 text-2xs text-neutral-neutral30 items-center">
          <div className=" flex flex-row items-center gap-1">
            <LocationIcon />
            <p className="flex flex-row gap-1">
              {distance < 1 ? distance * 1000 : distance}{" "}
              <span>{distance < 1 ? "متر" : "کیلومتر"} </span>
            </p>
          </div>
          <span>|</span>
          <p>{location}</p>
          <span>|</span>
          <div className="flex flex-row items-center gap-1">
            <StarIcon stroke="#FF6E01" fill="#FF6E01" />
            <p>{rate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderProductCard;
