import Input from "@/components/input/Input";
import ArrowBack from "@/components/user header/ArrowBack";
import UserHeader from "@/components/user header/UserHeader";

const page = () => {
  return (
    <div className="">
      {/* header */}
      <div className="flex flex-row justify-end mt-3 min-h-16 items-center border-b border-b-[#C7C6CA]">
        <p>اطلاعات کاربری</p>
        <ArrowBack />
      </div>
      <div className="my-4">
        <UserHeader name="محمد رنجبر" phone="0992450090" />
      </div>
      <div className="w-full h-[6px] bg-neutral-neutral90" />
      <div className="my-6 flex flex-col gap-4">
        <Input type="name" name="محمد رنجبر" />
        <Input type="phone" phone="09924500910" />
        <Input type="province" province="فارس" city="شیراز" />
        <Input type="sex" sex="ترجیح می دهم نگویم" />
        <Input type="email" email="ranjbarmohad@gmail.com" />
      </div>
    </div>
  );
};
export default page;
