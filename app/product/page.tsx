"use client";
import OrderProductCard from "@/components/productCard/OrderProductCard";
import ArrowBack from "@/components/user header/ArrowBack";
import ProductImageSrc from "@/components/productCard/bg.jpeg";
import RestaurantImageSrc from "@/components/productCard/restaurant.jpeg";
import Link from "next/link";
import OptionBar from "@/components/OptionBar/OptionBar";
import { useState } from "react";
import MapIcon from "@/components/OptionBar/MapIcon";
import ChevronLeftGreen from "@/components/home body/ChevronLeftGreen";
import Comments from "@/components/comments/Comments";
import DrawerComponent from "@/components/drawer/DrawerComponent";

const description =
  "ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون  ورم ایپسوم ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون  ورم ایپسوم ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون  ورم ایپسوم ";

const Product = () => {
  const [selectedOption, setSelectedOption] = useState<string>("حضوری");
  const [showMore, setShowMore] = useState<boolean>(false);
  const comments = Array.from({ length: 10 }).map((_, index) => ({
    firstName: "الینا",
    lastName: "ریاضی",
    joinTime: "23 تیر",
    satisfaction: 3,
    comment:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آن چنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می‌باشد.",
  }));
  const toggleShowMore = () => {
    setShowMore((prev: any) => !prev);
  };
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
          </div>
          {/* product card */}
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
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row text-key-colors-primary bg-primary-primary99 gap-[10px] py-1 px-2 items-center font-bold text-xs">
              <p>مسیریابی</p>
              <MapIcon stroke="#006000" />
            </div>
            <div className="flex flex-row items-center gap-4">
              <div className="flex flex-col justify-center items-end">
                <p className="text-neutral-neutral40 text-2xs font-medium">
                  آدرس
                </p>
                <p className="text-key-colors-primary font-bold text-xs">
                  بلوار پاسداران خیابان غفوری
                </p>
              </div>
              <div className="bg-key-colors-primary w-8 h-8 flex justify-center items-center rounded-rounded-6">
                <MapIcon stroke="#fff" />
              </div>
            </div>
          </div>
          {/* description */}
          <div className="w-full bg-neutral-neutral90 h-2" />
          <div className="text-right flex flex-col gap-3">
            <p className="font-bold text-sm">توضیحات</p>
            <div
              style={{ direction: "rtl" }}
              className="font-medium text-xs text-justify text-neutral-neutral35"
            >
              {description.length > 150 && !showMore
                ? `${description.slice(0, 150)}...`
                : description}

              {description.length > 150 && (
                <span
                  className="text-key-colors-primary"
                  onClick={toggleShowMore}
                >
                  {showMore ? "کمتر" : "بیشتر"}
                </span>
              )}
            </div>
          </div>
          <div className="w-full bg-neutral-neutral90 h-2" />
          {/* Comments */}
          <div className="flex flex-col">
            <div className="flex flex-row justify-between items-start">
              <div className="flex flex-row items-center gap-1 font-bold text-2xs text-key-colors-primary">
                <ChevronLeftGreen />
                <p>همه نظرات</p>
              </div>
              <div className="">
                <p className="text-sm font-bold text-neutral-neutral30">
                  نظر کاربران
                </p>
                <p
                  style={{ direction: "rtl" }}
                  className="flex flex-row gap-1 text-xs font-medium text-neutral-neutral30"
                >
                  <span>89</span>نظر
                </p>
              </div>
            </div>
            <div
              className="relative flex min-h-[168px] w-full"
              style={{ direction: "rtl" }}
            >
              <div className="absolute left-0 top-0 h-full w-[67px] bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
              <div className="flex items-center overflow-x-auto gap-4 flex-row w-full h-full px-1.5">
                {comments.map((c, index) => (
                  <div key={index}>
                    <Comments
                      comment={c.comment}
                      firstName={c.firstName}
                      lastName={c.lastName}
                      joinTime={c.joinTime}
                      satisfaction={c.satisfaction}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className=" bg-white sticky bottom-0 z-20 w-full flex flex-col gap-[10px] py-2 px-4">
            <div className="flex flex-row-reverse gap-2 items-center h-[18px]">
              <p
                style={{ direction: "rtl" }}
                className="text-black font-bold text-xs drop-shadow-2xl flex flex-row"
              >
                118,000 <span>تومان</span>
              </p>
              <div className="relative flex items-center">
                <p
                  className="text-2xs font-medium text-black w-[32px] h-[14px]"
                  style={{
                    direction: "rtl",
                  }}
                >
                  128,000
                </p>
                <span
                  className="absolute bg-light-error w-full h-[1.5px]"
                  style={{ borderRadius: "100px" }}
                />
              </div>
              <div className="relative flex items-center justify-center transform translate-y-0 translate-x-0.5">
                <p className="text-[6px] absolute -top-2 -left-4 text-white bg-light-error font-bold w-[17px] h-[14px] rounded-full flex flex-row justify-center items-center px-[4px] ">
                  10 <span>%</span>
                </p>
              </div>
            </div>
            <DrawerComponent type="product" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
