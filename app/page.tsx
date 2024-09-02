import Button from "@/components/button/Button";
import CategoryButton from "@/components/categories/CategoryButton";
import Input from "@/components/input/Input";
import OptionBar from "@/components/OptionBar/OptionBar";
import OTPInput from "@/components/OTPInput/OTPInput";
import ProductCard from "@/components/productCard/ProductCard";
import ProductTracker from "@/components/productTracker/ProductTracker";
import RangeSlider from "@/components/RangeSlider/RangeSlider";
import Segment from "@/components/segment/Segment";
import ProductImageSrc from "@/components/productCard/bg.jpeg";
import RestaurantImageSrc from "@/components/productCard/restaurant.jpeg";
export default function Home() {
  return (
    <div className="mx-4 flex flex-col space-y-16 my-4 ">
      <h1 className="mb-8">components</h1>
      <Input />
      <OTPInput />
      <Segment />
      <Button />
      <CategoryButton />
      <OptionBar />
      <RangeSlider
        initialMin={2500}
        initialMax={7500}
        min={0}
        max={10000}
        step={100}
        priceCap={1000}
      />
      <ProductTracker
        title="سورپرایز صبحانه"
        address="فست فود لاویا - بلوار بهشتی , 5.6 کیلومتر"
        count={2}
        pickupEnd={13}
        pickupStart={9}
        timeH={4}
        timeM={38}
        timeS={46}
      />
      <ProductCard
        title="صبحانه"
        discount={10}
        priceAfter={118_000}
        priceBefore={128_000}
        productImageSrc={ProductImageSrc}
        restaurantImageSrc={RestaurantImageSrc}
        descriptionTitle="سورپرایز صبحانه"
        description="برداشت امروز:"
        startPickUp="20:00"
        endPickUp="20:30"
        distance={5.6}
      />
    </div>
  );
}
