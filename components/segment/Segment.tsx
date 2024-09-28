import SegmentInput from "./SegmentInput";
import SegmentCrossImage from "./SegmentCross.png";
import WalletImage from "./Wallet.png";
import CharityImage from "./Charity.png";
import Image from "next/image";
interface SegmentProps {
  type: "sensitivity" | "savedMoney" | "charity";
  sensitivity?: boolean;
  savedMoney?: number;
  helpedMoney?: number;
}
const Segment = ({
  sensitivity,
  type,
  savedMoney,
  helpedMoney,
}: SegmentProps) => {
  return (
    <button
      className={`h-[97px] w-[155px] bg-neutral-neutral98 rounded-rounded-9 flex flex-col justify-center items-center relative focus:ring-2 focus:ring-[#006000] focus:outline-none ${(type === "savedMoney" || type === "charity") && "ring-2 outline-none ring-[#006000]"}`}
      style={{ direction: "rtl" }}
    >
      {type === "sensitivity" && sensitivity ? (
        <>
          <SegmentInput className="absolute -top-1/3" />
          <p className="font-bold text-[14px]">حساسیت دارم</p>
          <p className="font-medium text-2xs">به بعضی غذاها حساسیت دارم</p>
        </>
      ) : type === "sensitivity" && !sensitivity ? (
        <>
          <Image
            src={SegmentCrossImage}
            alt="cross"
            width={65}
            height={64}
            className="absolute -top-1/3"
          />
          <p className="font-bold text-[14px]">حساسیت ندارم</p>
          <p className="font-medium text-2xs">به هیج غذایی حساسیت ندارم</p>
        </>
      ) : type === "savedMoney" ? (
        <>
          <Image
            src={WalletImage}
            alt="cross"
            width={65}
            height={64}
            className="absolute -top-1/2"
          />
          <div className="flex flex-col justify-center gap-2">
            <p className="font-medium text-xs">پول ذخیره شده</p>
            <p className="text-base font-bold text-light-primary ">
              {savedMoney?.toLocaleString()} <span>تومان</span>
            </p>
          </div>
        </>
      ) : (
        <>
          <Image
            src={CharityImage}
            alt="cross"
            width={65}
            height={64}
            className="absolute -top-1/2"
          />
          <div className="flex flex-col justify-center gap-2">
            <p className="font-medium text-xs">کمک به خیریه</p>
            <p className="font-bold text-base text-light-primary">
              {helpedMoney?.toLocaleString()} <span>تومان</span>
            </p>
          </div>
        </>
      )}
    </button>
  );
};
export default Segment;
