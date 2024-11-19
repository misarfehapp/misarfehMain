import Image from "next/image";
import PlaceIcon from "./PlaceIcon";
import mealImage from "./Meal.png";
const PlaceIndicator = () => {
  return (
    <div className="w-8 h-8 rounded-full bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex justify-center items-center">
        {/* <PlaceIcon/> */}
      <Image src={mealImage} alt="meal" width={22} height={22} />
    </div>
  );
};
export default PlaceIndicator;
