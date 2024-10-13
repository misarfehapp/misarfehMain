import Image from "next/image";
import chickenImage from "./chicken.png";
import coffeeImage from "./coffee.png";
import hamburgerImage from "./hamburger.png";
import allCategoriesImage from "./all.png";
interface CategoryButtonProps {
  category: string;
}
const CategoryButton = ({ category }: CategoryButtonProps) => {
  return (
    <div className="w-full text-center h-[78px] ring-2 ring-neutral-neutral95 rounded-rounded-7 shadow-Drop Shadow/100 shadow-[#0C0C0D0D] flex flex-col justify-center items-center gap-3 py-2 px-4 cursor-pointer">
      <Image
        src={
          category === "رستوران"
            ? chickenImage
            : category === "کافه رستوران"
              ? hamburgerImage
              : category === "کافه"
                ? coffeeImage
                : allCategoriesImage
        }
        alt="category"
        width={
          category === "رستوران"
            ? 25.49
            : category === "کافه رستوران"
              ? 46.37
              : category === "کافه"
                ? 30
                : 32
        }
        height={32}
      />
      <p className="text-xs font-medium text-neutral-neutral30 whitespace-nowrap">
        {category}
      </p>
    </div>
  );
};
export default CategoryButton;
