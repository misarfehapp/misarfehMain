"use client";
import Link from "next/link";
import HomeIcon from "./HomeIcon";
import ExploreIcon from "./ExploreIcon";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import HeartIcon from "./HeartIcon";
import UserProfileIcon from "./UserProfileIcon";

const links = [
  {
    name: "homePage",
    path: "/homePage",
    icon: <HomeIcon />,
  },
  {
    name: "explore",
    path: "/services",
    icon: <ExploreIcon />,
  },
  {
    name: "favorite",
    path: "/about",
    icon: <HeartIcon />,
  },
  {
    name: "userProfile",
    path: "/userProfile",
    icon: <UserProfileIcon />,
  },
];

const MenuBar = () => {
  const path = usePathname();
  
  return (
    <nav className="bg-neutral-neutral20 mx-4 bottom-3 sticky  mt-5 py-4 rounded-rounded-9 flex flex-row-reverse justify-around z-20">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={`py-1 px-3 flex justify-center items-center  ${path === link.path ? "text-primary-primary70 bg-neutral-neutral30 rounded-rounded-4 shadow-lg" : "text-neutral-neutral70"} hover:text-primary-primary70`}
        >
          {link.icon}
        </Link>
      ))}
    </nav>
  );
};

export default MenuBar;
