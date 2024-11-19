import Link from "next/link";
import ChevronLeftIcon from "./ChevronLeftIcon";
import UserIcon from "./UserIcon";
import LocationIcon from "../address section/LocationIcon";
import DollarIcon from "./DollarIcon";
import HeadphoneIcon from "./HeadphoneIcon";
import AlertIcon from "./AlertIcon";
import ExitSection from "../exit section/ExitSection";
import Segment from "../segment/Segment";

const sections = [
  {
    name: "اطلاعات کاربری",
    icon: <UserIcon />,
    href: "information",
  },
  {
    name: "آدرس های شما",
    icon: <LocationIcon />,
    href: "addresses",
  },
  {
    name: "کیف پول",
    icon: <DollarIcon />,
    href: "/",
  },
  {
    name: "پشتیبانی",
    icon: <HeadphoneIcon />,
    href: "/support",
  },
  {
    name: "قوانین و شرایط",
    icon: <AlertIcon />,
    href: "/rules",
  },
];

const UserSelection = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[6px] bg-neutral-neutral90" />
      {sections.map((section, index) => (
        <Link
          href={`userProfile/${section.href}`}
          className="flex flex-row bg-neutral-neutral95 my-6 mx-4 min-h-[52px] justify-between items-center rounded-rounded-6"
          key={index}
        >
          <ChevronLeftIcon className="mx-3" />
          <div className="flex flex-row gap-3 justify-center items-center mx-3">
            <p className="text-sm text-neutral-neutral30 font-bold">
              {section.name}
            </p>
            <div>{section.icon}</div>
          </div>
        </Link>
      ))}
      <ExitSection />
      <div className="w-full h-[6px] bg-neutral-neutral90" />
      <div className="flex flex-row items-center my-16 justify-between">
        <Segment type="charity" helpedMoney={34000} />
        <Segment type="savedMoney" savedMoney={300000} />
      </div>
    </div>
  );
};
export default UserSelection;
