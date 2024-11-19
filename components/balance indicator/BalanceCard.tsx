import Image from "next/image";
import PlusIcon from "./PlusIcon";
import dealsImage from "./Deals.png";
interface BalanceCardProps {
  balance: number;
}

const BalanceCard = ({ balance }: BalanceCardProps) => {
  return (
    <div
      className="w-[400.25px] h-[108px] bg-[#ADDEC9] rounded-[10px] relative"
      style={{ direction: "rtl" }}
    >
      <div className=" w-[115px] flex flex-col gap-1 justify-center p-3">
        <h2 className="text-xs font-medium text-neutral-neutral30">موجودی</h2>
        <p className="text-2xl h-[30px] flex flex-row items-center gap-1">
          {balance.toLocaleString()} <span className="text-xs">تومان</span>
        </p>
        <button
          type="submit"
          className="w-[115px] h-[28px] bg-white py-1 pr-2 pl-6 rounded-rounded-7 flex flex-row justify-center items-center gap-2"
        >
          <PlusIcon />
          <p
            className="text-2xs font-bold leading-[14px]
          "
          >
            افزایش اعتبار
          </p>
        </button>
      </div>
      <div className="absolute -left-0.5 bottom-0">
        <Image src={dealsImage} alt="deals" width={106.75} height={108} />
      </div>
    </div>
  );
};
export default BalanceCard;
