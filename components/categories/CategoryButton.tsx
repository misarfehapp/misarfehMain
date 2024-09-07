import Image from "next/image";
import chickenImage from "./chicken.png";
 interface CategoryButtonProps{
  category:string
 }
const CategoryButton = ({category}:CategoryButtonProps) => {
  return (
    <div className="w-[93.5px] h-[78px] ring-2 ring-neutral-neutral95 rounded-rounded-7 shadow-Drop Shadow/100 shadow-[#0C0C0D0D] flex flex-col justify-center items-center gap-3 py-2 px-4 cursor-pointer">
      <Image src={chickenImage} alt="category" width={25.49} height={32} />
      <p className="text-xs font-medium text-neutral-neutral30">{category}</p>
    </div>
  );
};
export default CategoryButton;
