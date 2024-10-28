import ChevronLeftGreen from "./ChevronLeftGreen";
import ProductImageSrc from "@/components/productCard/bg.jpeg";
import RestaurantImageSrc from "@/components/productCard/restaurant.jpeg";
import ProductCard from "../productCard/ProductCard";
import Link from "next/link";

const MisarfehFoods = () => {
  const products = Array.from({ length: 10 }).map((_, index) => ({
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
  return (
    <div className="w-full flex flex-col gap-4 ">
      <div
        style={{ direction: "rtl" }}
        className="w-full flex flex-row justify-between"
      >
        <p className="text-base font-bold text-neutral-neutral30">
          اینا می صرفه!
        </p>
        <div className="gap-1 flex flex-row items-center text-2xs font-bold text-[#006000]">
          <p>بیشتر</p>
          <ChevronLeftGreen />
        </div>
      </div>
      {/* product cards section */}
      <div
        className="flex overflow-x-auto h-[230px] w-full"
        style={{ direction: "rtl" }}
      >
        <div className="flex gap-4 flex-row">
          {products.map((p) => (
            <Link key={p.id} href={`/product`}>
              
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
              
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default MisarfehFoods;
