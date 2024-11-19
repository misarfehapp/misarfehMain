import React from "react";

interface HeartIconProps extends React.SVGProps<SVGSVGElement> {
  isSelected: boolean; // Add isSelected as part of props
  isOrderCard: boolean;
}

const HeartIcon: React.FC<HeartIconProps> = ({
  isSelected,
  isOrderCard,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={isOrderCard ? 16 : 10}
      height={isOrderCard ? 14 : 10}
      fill={
        isSelected
          ? "#b91c1c"
          : isOrderCard
            ? "white"
            : props.fill || "currentColor"
      }
      {...props} // Spread the remaining props
    >
      <path
        stroke={isSelected ? "#b91c1c" : props.stroke || "#fff"} // Red when selected, default otherwise
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={isOrderCard ? 1.3 : 1}
        d={
          isOrderCard
            ? "M13.893 2.074a3.667 3.667 0 0 0-5.186 0L8 2.78l-.707-.706A3.668 3.668 0 0 0 2.107 7.26L8 13.154l5.893-5.894a3.667 3.667 0 0 0 0-5.186Z"
            : "M8.684 1.92a2.292 2.292 0 0 0-3.242 0L5 2.363l-.441-.441a2.292 2.292 0 0 0-3.242 3.241L5 8.846l3.684-3.684a2.292 2.292 0 0 0 0-3.241Z"
        }
      />
    </svg>
  );
};

export default HeartIcon;
