"use client";
import { useState } from "react";
import StarIcon from "./StarIcon";

interface CommentsProps {
  firstName: string;
  lastName: string;
  joinTime: string;
  satisfaction: number;
  comment: string;
}

const Comments = ({
  firstName,
  lastName,
  joinTime,
  satisfaction,
  comment,
}: CommentsProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleExpand = () => {
    setIsExpanded((prev: any) => !prev);
  };
  return (
    <div className="ring ring-neutral-neutral90 rounded-rounded-7 py-2 px-3 w-[233px] shadow-sm gap-2 flex flex-col">
      <div className="flex justify-between items-end flex-col gap-[6px]">
        <div className="flex flex-col items-end">
          <h2 className="font-bold text-xs text-neutral-neutral30">
            {firstName} {lastName}
          </h2>
          <p className="text-2xs text-neutral-neutral50">عضویت از {joinTime}</p>
        </div>
        <div className="flex items-center gap-0.5" style={{ direction: "rtl" }}>
          {Array.from({ length: 5 }, (_, index) => (
            <StarIcon
              stroke={index < satisfaction ? "#FF6E01" : "#939090"}
              key={index}
              className={`${index < satisfaction ? "fill-[#FF6E01]" : ""}`}
            />
          ))}
        </div>
      </div>
      <p
        className="text-neutral-neutral35 font-medium text-justify leading-[14px] text-2xs"
        style={{ direction: "rtl" }}
      >
        {comment.length > 100 && isExpanded === false
          ? `${comment.slice(0, 100)}...`
          : comment}
        {/* {comment.length > 100 && isExpanded && comment} */}
        {comment.length > 100 && (
          <span
            className="text-key-colors-primary cursor-pointer"
            onClick={toggleExpand}
          >
            {isExpanded ? " کمتر" : " بیشتر"}
          </span>
        )}
      </p>
    </div>
  );
};
export default Comments;
