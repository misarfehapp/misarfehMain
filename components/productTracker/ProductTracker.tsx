import Image from "next/image";
import imageSrc from "./trackerImage.jpeg";
import ClockIcon from "./ClockIcon";
import ShoppingIcon from "./ShoppingIcon";
interface ProductTrackerProps {
  title: string;
  address: string;
  pickupStart: number;
  pickupEnd: number;
  count: number;
}
const ProductTracker = ({
  title,
  address,
  pickupEnd,
  pickupStart,
  count,
}: ProductTrackerProps) => {
  return (
    <div className="w-[398px] h-[110px] rounded-rounded-9 p-3 bg-neutral-neutral95 flex flex-row-reverse gap-4">
      <div>
        <Image
          src={imageSrc}
          alt="food"
          width={86}
          height={64}
          className="rounded-rounded-7"
        />
      </div>
      <div style={{ direction: "rtl" }} className="gap-2 flex flex-col">
        <div className="flex flex-col gap-0.5">
          <h2 className="w-[272px] h-[18px] font-bold text-[12px]">{title}</h2>
          <address className="w-[272px] h-[14px] font-medium text-[10px] text-neutral-neutral35">
            {address}
          </address>
        </div>
        <div className="flex flex-row gap-5 items-center">
          <div className="flex flex-row items-center gap-2 bg-primary-primary98 py-0.5 px-2 rounded-rounded-9">
            <ClockIcon />
            <p className="w-[71px] h-[14px] font-bold text-[10px] text-light-primary">
              برداشت از {pickupStart}تا {pickupEnd}
            </p>
          </div>

          <div className="flex flex-row items-center gap-2 rounded-rounded-9 ring-[1.5px] py-0.5 px-2 ring-neutral-neutral80 outline-none">
            <ShoppingIcon />
            <p className="flex flex-row-reverse gap-1 font-bold text-[10px] text-neutral-neutral30">
              عدد <span>{count}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductTracker;
