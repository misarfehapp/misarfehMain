"use client";
import OrderProductCard from "@/components/productCard/OrderProductCard";
import ArrowBack from "@/components/user header/ArrowBack";
import ProductImageSrc from "@/components/productCard/bg.jpeg";
import RestaurantImageSrc from "@/components/productCard/restaurant.jpeg";
import Link from "next/link";
import OptionBar from "@/components/OptionBar/OptionBar";
import { useState } from "react";

const product = () => {
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
        </div>
      </div>
    </div>
  );
};
export default product;
