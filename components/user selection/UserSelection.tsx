import Link from "next/link";
import ChevronLeftIcon from "./ChevronLeftIcon";
import UserIcon from "./UserIcon";

const sections = [
  {
    name: "اطلاعات کاربری",
    icon: <UserIcon />,
    href:'information'
  },
];

const UserSelection = () => {
  return (
    <div>
      <div className="w-full h-[6px] bg-neutral-neutral90" />
      {sections.map((section, index) => (
        <Link
        href={`userProfile/${section.href}`}
          className="flex flex-row bg-neutral-neutral95 my-6 mx-4 min-h-[52px] justify-between items-center rounded-rounded-6"
          key={index}
        >
          <ChevronLeftIcon className="mx-3" />
          <div className="flex flex-row gap-3 justify-center items-center mx-3">
            <p className="text-sm text-neutral-neutral30 font-bold">{section.name}</p>
            <div>{section.icon}</div>
          </div>
        </Link>
      ))}
      <div className="w-full h-[6px] bg-neutral-neutral90" />
    </div>
  );
};
export default UserSelection;
