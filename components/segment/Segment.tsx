import SegmentCrossIcon from "./SegmentCrossIcon";
import SegmentInput from "./SegmentInput";
import SegmentCrossImage from "./SegmentCross.png";
import Image from "next/image";
interface SegmentProps {
  sensitivity: boolean;
}
const Segment = ({ sensitivity }: SegmentProps) => {
  return (
    <button className="h-[97px] w-[155px] bg-neutral-neutral98 rounded-rounded-9 flex flex-col justify-center items-center relative focus:ring-2 focus:ring-[#006000] focus:outline-none">
      {sensitivity ? (
        <>
          <SegmentInput className="absolute -top-1/3" />
          <p className="font-bold text-[14px]">حساسیت دارم</p>
          <p className="font-medium text-2xs">به بعضی غذاها حساسیت دارم</p>
        </>
      ) : (
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
      )}
    </button>
  );
};
export default Segment;
