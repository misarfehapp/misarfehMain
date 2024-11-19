import ArrowBack from "@/components/user header/ArrowBack";
import Image from "next/image";
import Link from "next/link";
import IconImage from "@/components/icons/orderGreeting.png";
const OrderGreeting = () => {
  return (
    <div className="flex justify-center py-8 px-4">
      <div className="w-full max-w-[398px] flex flex-col items-center gap-4">
        {/* header */}
        <div className="flex w-full flex-row justify-end pb-5 items-center border-b border-b-[#C7C6CA] px-5 gap-[10px]">
          <p className="font-medium text-base text-[#49454F]">پیگیری سفارش</p>
          <Link href={"/homePage"}>
            <ArrowBack />
          </Link>
        </div>

        <div
          className="w-full flex flex-col justify-between items-center h-[518px]"
          style={{ direction: "rtl" }}
        >
          <div className="flex flex-col gap-4">
            <p className="text-lg font-medium text-neutral-neutral30">
              از سفارش خود لذت ببرید!
            </p>
            <p className="text-xs font-medium text-neutral-neutral30">
              ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              متون بلکه روزنامه و مجله در ستون ورم ایپسوم ...
            </p>
          </div>
          <Image src={IconImage} alt="greeting icon" width={205} height={210} />
          <Link
            href={"/"}
            className="bg-key-colors-primary text-white py-3 px-6 w-full text-center rounded-rounded-7 text-xs font-medium"
          >
            ثبت نظرسنجی
          </Link>
        </div>
      </div>
    </div>
  );
};
export default OrderGreeting;
