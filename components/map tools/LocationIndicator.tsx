import LocationIcon from "./LocationIcon";

const LocationIndicator = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-9 h-9 bg-[#6B6B6B] rounded-full flex justify-center items-center">
        <LocationIcon />
      </div>
      <div className="w-1 h-[6px] bg-[#6B6B6B] relative">
        <div className="w-1 h-1 rounded-full bg-white absolute top-1" />
      </div>
    </div>
  );
};
export default LocationIndicator;
