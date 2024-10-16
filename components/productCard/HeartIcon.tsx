import React from "react";

interface HeartIconProps extends React.SVGProps<SVGSVGElement> {
  isSelected: boolean; // Add isSelected as part of props
}

const HeartIcon: React.FC<HeartIconProps> = ({ isSelected, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={10}
      height={10}
      fill={isSelected ? "#b91c1c" : props.stroke || "currentColor"}
      {...props} // Spread the remaining props
    >
      <path
        stroke={isSelected ? "#b91c1c" : props.stroke || "#fff"} // Red when selected, default otherwise
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.684 1.92a2.292 2.292 0 0 0-3.242 0L5 2.363l-.441-.441a2.292 2.292 0 0 0-3.242 3.241L5 8.846l3.684-3.684a2.292 2.292 0 0 0 0-3.241Z"
      />
    </svg>
  );
};

export default HeartIcon;
