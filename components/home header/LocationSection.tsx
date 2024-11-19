import ChevronDownIcon from "../input/ChevronDownIcon";
import LocationIcon from "./LocationIcon";

interface LocationSectionProps {
  address: string;
}

const LocationSection = ({ address }: LocationSectionProps) => {
  return (
    <div className="min-w-[209px] min-h-[30px] py-1 px-2 rounded-rounded-10 gap-2 flex flex-row-reverse items-center bg-neutral-neutral98">
      <div className="bg-[#006000] w-[22px] h-[22px] rounded-full flex justify-center items-center">
        <LocationIcon />
      </div>
      <p style={{ direction: "rtl"}} className="font-medium text-xs text-neutral-neutral30">
        {address.length > 25 ? `${address.slice(0, 25)}...` : address}
      </p>
      <ChevronDownIcon />
    </div>
  );
};
export default LocationSection;
