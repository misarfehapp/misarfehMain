import HomeBody from "@/components/home body/HomeBody";
import HomeHeader from "@/components/home header/HomeHeader";

const HomePage = () => {
  return (
    <div className="flex justify-center py-8 px-4">
      <div className="w-full max-w-[398px] flex flex-col items-center gap-4">
        <HomeHeader />
        <HomeBody />
      </div>
    </div>
  );
};

export default HomePage;
