import DrawerComponent from "../drawer/DrawerComponent";
import LocationSection from "../home header/LocationSection";
import SearchBar from "../home header/SearchBar";
import ShoppingCartIcon from "../home header/ShoppingCartIcon";
import FilterIcon from "./FilterIcon";
import LocationIcon from "./LocationIcon";

const ExploreHeader = () => {
  return (
    <div className="flex flex-col justify-center w-full gap-3">
      <div className="flex flex-row-reverse items-center justify-between">
        <LocationSection address="شیراز تقاطع حکیمی فلسطین ساختمان اداری" />
        <ShoppingCartIcon />
      </div>
      <div className="flex items-center justify-between w-full flex-row-reverse">
        <SearchBar isHomePage={false} />
        {/* filter */}
        <DrawerComponent type="filter" />
        <div className="w-[52px] h-[50.5px] ring-2 ring-neutral-neutral80 rounded-rounded-9 py-2 px-4 flex justify-center items-center">
          <LocationIcon />
        </div>
      </div>
    </div>
  );
};
export default ExploreHeader;
