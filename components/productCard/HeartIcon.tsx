"use client"
import React, { useState } from "react";

const HeartIcon = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={10}
      height={10}
      fill="currentColor"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <path
        stroke={isHovered ? "#b91c1c " : props.stroke || "#fff"}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.684 1.92a2.292 2.292 0 0 0-3.242 0L5 2.363l-.441-.441a2.292 2.292 0 0 0-3.242 3.241L5 8.846l3.684-3.684a2.292 2.292 0 0 0 0-3.241Z"
      />
    </svg>
  );
};

export default HeartIcon;
