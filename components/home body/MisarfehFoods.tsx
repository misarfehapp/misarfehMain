"use client";
import { useEffect, useState } from "react";
import ProductCard from "../productCard/ProductCard";
import ChevronLeftGreen from "./ChevronLeftGreen";
import type { Product } from "@/types/product";

const MisarfehFoods = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products?filter=cheapest');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="w-full flex flex-col gap-4">
      <div
        style={{ direction: "rtl" }}
        className="w-full flex flex-row justify-between"
      >
        <p className="text-base font-bold text-neutral-neutral30">
          اینا می صرفه!
        </p>
        <div className="gap-1 flex flex-row items-center text-2xs font-bold text-key-colors-primary">
          <p>بیشتر</p>
          <ChevronLeftGreen />
        </div>
      </div>
      <div
        className="flex overflow-x-auto h-[230px] w-full"
        style={{ direction: "rtl" }}
      >
        <div className="flex gap-4 flex-row">
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
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MisarfehFoods;
