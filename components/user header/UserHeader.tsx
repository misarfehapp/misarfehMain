import Image from "next/image";
import userImage from "./userImage.png";
interface UserHeaderProps {
  name: string;
  phone: string;
}

const UserHeader = ({ name, phone }: UserHeaderProps) => {
  return (
    <div className="flex flex-row justify-end items-center gap-3 mx-4">
      <div className="flex flex-col justify-center items-center">
        <p className="text-sm font-bold text-neutral-neutral30">{name}</p>
        <p className="text-xs text-neutral-neutral30">{phone}</p>
      </div>
      <Image
        src={userImage}
        alt="user"
        width={64.11}
        height={56}
        className="rounded-rounded-9"
      />
    </div>
  );
};
export default UserHeader;
