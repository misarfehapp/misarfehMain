import Image, { StaticImageData } from "next/image";
import HeartIcon from "./HeartIcon";

interface ProductCardProps {
  title: string;
  priceBefore: number;
  priceAfter: number;
  discount: number;
  productImageSrc: StaticImageData;
  restaurantImageSrc: StaticImageData;
}

const ProductCard = ({
  title,
  priceBefore,
  priceAfter,
  discount,
  productImageSrc,
  restaurantImageSrc,
}: ProductCardProps) => {
  return (
    <div>
      <div className="w-[245px] h-[125px] relative">
        <div className="w-[245px] h-[125px] absolute top-10 rounded-rounded-7 bg-gradient-to-t from-black/90 to-black/0" />
        <div className="absolute inset-0 flex flex-row-reverse items-start justify-between p-2">
          <h3 className="text-[8px] bg-black/70 font-medium text-white px-1 rounded-full">
            {title}
          </h3>
          <div className="bg-black/70 h-[14px] w-[14px] flex justify-center items-center rounded-full ">
            <HeartIcon
              className="hover:text-red-700"
            />
          </div>
        </div>
        <Image
          src={productImageSrc}
          alt="product"
          width={245}
          height={125}
          className="rounded-rounded-7"
        ></Image>
      </div>
    </div>
  );
};
export default ProductCard;
