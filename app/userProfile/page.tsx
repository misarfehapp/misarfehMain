import UserHeader from "@/components/user header/UserHeader";
import UserSelection from "@/components/user selection/UserSelection";

const UserPage = () => {
  return <div>
    {/* header */}
    <div className="my-6 "><UserHeader name="محمد رنجبر" phone="0992450090"/></div>
    {/* selection */}
    <div>
        <UserSelection/>
    </div>
  </div>;
};
export default UserPage;
