"use client";
import OrderProductCard from "@/components/productCard/OrderProductCard";
import ArrowBack from "@/components/user header/ArrowBack";
import ProductImageSrc from "@/components/productCard/bg.jpeg";
import RestaurantImageSrc from "@/components/productCard/restaurant.jpeg";
import Link from "next/link";
import OptionBar from "@/components/OptionBar/OptionBar";
import { useState } from "react";
import MapIcon from "@/components/OptionBar/MapIcon";

const Product = () => {
  const [selectedOption, setSelectedOption] = useState<string>("حضوری");
  return (
    <div className="flex justify-center mx-4">
      <div className="w-full max-w-[398px] flex flex-col items-center gap-4">
        <div className="flex flex-col gap-4 w-full">
          {/* header */}
          <div className="flex flex-row justify-end mt-3 min-h-16 items-center border-b border-b-[#C7C6CA] px-5 gap-[10px]">
            <p className="font-medium text-base text-[#49454F]">محصول</p>
            <Link href={"/homePage"}>
              <ArrowBack />
            </Link>
            {/* product card */}
          </div>
          <OrderProductCard
            descriptionTitle="فست فود لاویا"
            restaurantImageSrc={RestaurantImageSrc}
            productImageSrc={ProductImageSrc}
            title="صبحانه"
            discount={10}
            distance={6}
            rate={4.5}
            location="بلوار پاسداران"
            priceAfter={118000}
            priceBefore={128000}
            width="w-full"
          />
          {/* option bar */}
          <div className="mt-20">
            <OptionBar setSelectedOption={setSelectedOption} type="order" />
          </div>
          {/* address section */}
          <div className="flex flex-row gap-4 items-center">
            <div className="flex flex-row text-key-colors-primary bg-primary-primary99 gap-[10px] py-1 px-2 items-center font-bold text-xs">
              <p>مسیریابی</p>
              <MapIcon stroke="#006000" />
            </div>
            <div className="flex flex-col justify-center items-end">
              <p className="text-neutral-neutral40 text-2xs font-medium">
                آدرس
              </p>
              <p className="text-key-colors-primary">
                بلوار پاسداران خیابان غفوری
              </p>
            </div>
            <div className="bg-key-colors-primary w-8 h-8 flex justify-center items-center rounded-rounded-6">
              <MapIcon stroke="#fff" />
            </div>
          </div>
          {/* description */}
          <div className="w-full bg-neutral-neutral90 h-2" />
          <div>
            <p>توضیحات</p>
            <p></p>
          </div>
          <div className="w-full bg-neutral-neutral90 h-2" />
        </div>
      </div>
    </div>
  );
};
export default Product;
