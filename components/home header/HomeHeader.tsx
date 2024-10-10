import LocationSection from "./LocationSection";
import SearchBar from "./SearchBar";
import ShoppingCartIcon from "./ShoppingCartIcon";

const HomeHeader = () => {
  return (
    <div className="flex flex-col justify-center w-full gap-3">
      <div className="flex flex-row-reverse items-center justify-between">
        <LocationSection address="شیراز تقاطع حکیمی فلسطین ساختمان اداری" />
        <ShoppingCartIcon />
      </div>
      <div className="flex items-center justify-center">
        <SearchBar />
      </div>
    </div>
  );
};
export default HomeHeader;
