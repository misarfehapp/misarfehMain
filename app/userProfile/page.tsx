import UserHeader from "@/components/user header/UserHeader";
import UserSelection from "@/components/user selection/UserSelection";

const UserPage = () => {
  return (
    <div className="flex justify-center py-8 px-4">
      <div className="w-full max-w-[398px] flex flex-col  gap-4">
        {" "}
        {/* header */}
        <div className="my-6 ">
          <UserHeader name="محمد رنجبر" phone="0992450090" />
        </div>
        {/* selection */}
        <div className="w-full">
          <UserSelection />
        </div>
      </div>
    </div>
  );
};
export default UserPage;
