import ExploreBody from "@/components/explore body/ExploreBody";
import ExploreHeader from "@/components/explore header/ExploreHeader";

const ExplorePage = () => {
  return (
    <div className="flex justify-center py-8 px-4">
      <div className="w-full max-w-[398px] flex flex-col items-center gap-4">
        <ExploreHeader />
        <ExploreBody />
      </div>
    </div>
  );
};
export default ExplorePage;
