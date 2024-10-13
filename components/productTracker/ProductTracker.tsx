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
  timeH: number;
  timeM: number;
  timeS: number;
  progress: number;
}
const ProductTracker = ({
  title,
  address,
  pickupEnd,
  pickupStart,
  count,
  timeH,
  timeM,
  timeS,
  progress,
}: ProductTrackerProps) => {
  return (
    <div className="flex flex-col  h-[110px] p-3 gap-4 bg-neutral-neutral95 rounded-rounded-9 ">
      <div className="  flex flex-row-reverse gap-4">
        <Image
          src={imageSrc}
          alt="food"
          width={86}
          height={64}
          className="rounded-rounded-7"
        />
        <div style={{ direction: "rtl" }} className="gap-2 flex flex-col">
          <div className="flex flex-col gap-0.5">
            <h2 className="w-[272px] h-[18px] font-bold text-[12px]">
              {title}
            </h2>
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
      {/* progress bar */}
      <div className="flex flex-row-reverse items-center gap-2">
        <div className="bg-neutral-neutral80 h-[4px] w-full rounded-full flex flex-row-reverse ">
          <div
            className="bg-light-primary  h-full rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="w-[40px] h-[14px] text-[10px] font-bold text-neutral-neutral35">
          <time>
            {timeH}:{timeM}:{timeS}
          </time>
        </div>
      </div>
    </div>
  );
};
export default ProductTracker;
