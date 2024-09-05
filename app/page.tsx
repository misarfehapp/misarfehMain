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
import Comments from "@/components/comments/Comments";
import DrawerComponent from "@/components/drawer/DrawerComponent";
import SuccessPopUp from "@/components/success pop-up/SuccessPopUp";
import Stepper from "@/components/stepper/Stepper";
import LocationIndicator from "@/components/map tools/LocationIndicator";
import PlaceIndicator from "@/components/map tools/PlaceIndicator";
import PlaceAmount from "@/components/map tools/PlaceAmount";
export default function Home() {
  return (
    <div className="mx-4 flex flex-col space-y-28 my-4 justify-center items-center">
      <div className="flex flex-row justify-around items-center gap-10 ">
        <Input />
        <OTPInput />
        <Segment />
      </div>
      <div className="flex flex-row justify-around items-center gap-10">
        <Button />
        <OptionBar />
        <RangeSlider
          initialMin={2500}
          initialMax={7500}
          min={0}
          max={10000}
          step={100}
          priceCap={1000}
        />
      </div>
      <div className="flex flex-row justify-around items-center gap-10">
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
        <Comments
          firstName="الینا"
          lastName="ریاضی"
          comment="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آن چنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می‌باشد."
          joinTime="23 تیر"
          satisfaction={2}
        />
      </div>
      <div className="flex flex-row justify-around items-center gap-10">
        <DrawerComponent />
        <SuccessPopUp trackingCode={98276} />
        <Stepper currentStep={2} progress={60} />
      </div>
      <div className="flex flex-row justify-around items-center gap-10">
        <div className="flex flex-col justify-center items-center gap-5">
          <LocationIndicator />
          <PlaceIndicator />
          <PlaceAmount amount={30}/>
        </div>
      </div>
    </div>
  );
}
