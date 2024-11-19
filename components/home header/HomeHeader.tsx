import ProductTracker from "../productTracker/ProductTracker";
import Categories from "./Categories";
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
        <SearchBar isHomePage={true} />
      </div>
      <div className="flex items-center justify-center">
        <Categories />
      </div>
      <div className="flex items-center justify-center">
        <ProductTracker
          type="homepage"
          title="سورپرایز صبحانه"
          address="فست فود لاویا - بلوار بهشتی , 5.6 کیلومتر"
          count={2}
          pickupEnd={13}
          pickupStart={9}
          timeH={4}
          timeM={38}
          timeS={46}
          progress={70}
        />
      </div>
    </div>
  );
};
export default HomeHeader;
