"use client";
import ProductImageSrc from "@/components/productCard/bg.jpeg";
import RestaurantImageSrc from "@/components/productCard/restaurant.jpeg";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import ProductCard from "../productCard/ProductCard";
const filters = ["جدیدترین", "پرطرفدارترین", "ارزان ترین"];

const FoodsList = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("جدیدترین");

  const products = Array.from({ length: 20 }).map((_, index) => ({
    id: index,
    title: "صبحانه",
    discount: 10,
    priceAfter: 118_000,
    priceBefore: 128_000,
    productImageSrc: ProductImageSrc,
    restaurantImageSrc: RestaurantImageSrc,
    descriptionTitle: "سورپرایز صبحانه",
    description: "برداشت امروز:",
    startPickUp: "20:00",
    endPickUp: "20:30",
    distance: 5.6,
  }));
  const handleFilterChange = (value: string) => {
    setSelectedFilter(value);
  };
  return (
    <div className="flex flex-col justify-center w-full gap-3">
      <div className="flex flex-row-reverse justify-between w-full items-center">
        <p className="font-bold text-sm text-neutral-neutral30">همه نتایج</p>
        <div>
          {/* Filter Select */}
          <Select onValueChange={handleFilterChange} value={selectedFilter}>
            <SelectTrigger className="min-h-[34px] bg-white border-[1.5px] border-[#C7C6CA] rounded-rounded-7 py-2 pr-2 px-1 text-xs text-[#46464A] font-medium">
              <span>{selectedFilter}</span>
            </SelectTrigger>
            <SelectContent>
              {filters.map((filterOption) => (
                <SelectItem key={filterOption} value={filterOption}>
                  {filterOption}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <ScrollArea className="h-[325px]">
        <div
          className=" my-6 flex flex-col mx-4 justify-center items-center gap-24"
          style={{ direction: "rtl" }}
        >
          {products.map((p) => (
            <ProductCard
              key={p.id}
              title={p.title}
              discount={p.discount}
              priceAfter={p.priceAfter}
              priceBefore={p.priceBefore}
              productImageSrc={p.productImageSrc}
              restaurantImageSrc={p.restaurantImageSrc}
              descriptionTitle={p.descriptionTitle}
              description={p.description}
              startPickUp={p.startPickUp}
              endPickUp={p.endPickUp}
              distance={p.distance}
              width="w-full"
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};
export default FoodsList;
