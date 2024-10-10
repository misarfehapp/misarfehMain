import LocationSection from "./LocationSection";
import ShoppingCartIcon from "./ShoppingCartIcon";

const HomeHeader = () => {
  return (
    <div className="py-8 px-4">
      <div className="flex flex-row-reverse items-center justify-between">
        <LocationSection address="شیراز تقاطع حکیمی فلسطین ساختمان اداری" />
        <ShoppingCartIcon />
      </div>
    </div>
  );
};
export default HomeHeader;
