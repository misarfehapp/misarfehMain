import EconomicalFoods from "./EconomicalFoods";
import MisarfehFoods from "./MisarfehFoods";
import NearbyRestaurant from "./NearbyRestaurant";

const HomeBody = () => {
  return <div className="w-full">
    <MisarfehFoods/>
    <EconomicalFoods/>
    <NearbyRestaurant/>
  </div>;
};
export default HomeBody;
