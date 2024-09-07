import ArrowUpRightIcon from "./ArrowUpRightIcon";

interface TransactionCardProps {
  type: string;
  mount: number;
  day: number;
  month: number;
  year: number;
}

const TransactionCard = ({
  type,
  mount,
  day,
  month,
  year,
}: TransactionCardProps) => {
  return (
    <div className="w-[403px] p-3 rounded-rounded-7 gap-[22px] bg-neutral-neutral99 flex flex-row justify-center items-center">
      <div className="flex flex-col justify-center gap-1 w-[333px]">
        <div className="flex flex-row-reverse justify-between items-center">
          <p className="text-sm font-medium text-neutral-neutral20">
            {type === "increase" ? "افزایش اعتبار" : "خرید از کیف پول"}
          </p>

          <p
            style={{ direction: "rtl" }}
            className="text-sm text-neutral-neutral30 font-bold"
          >
            {mount.toLocaleString()} <span>تومان</span>
          </p>
        </div>
        <div>
          <p
            className="text-xs text-neutral-neutral35"
            style={{ direction: "rtl" }}
          >
            در تاریخ {String(day).padStart(2, "0")} /{" "}
            {String(month).padStart(2, "0")} / {year}
          </p>
        </div>
      </div>
      <div className={`w-6 h-6 ${type === "increase" ? "bg-primary-primary98" : 'bg-error-error98' } flex justify-center items-center rounded-full`}>
        {type === "increase" ? (
          <ArrowUpRightIcon />
        ) : (
          <ArrowUpRightIcon stroke="#BA1A1A" className="rotate-180" />
        )}
      </div>
    </div>
  );
};
export default TransactionCard;
