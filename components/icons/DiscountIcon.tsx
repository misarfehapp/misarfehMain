import * as React from "react";
const DiscountIcon = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="#006000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13.833 2.167 2.167 13.833M5.5 3.418a2.083 2.083 0 1 1-4.167 0 2.083 2.083 0 0 1 4.167 0Zm9.167 9.167a2.083 2.083 0 1 1-4.167 0 2.083 2.083 0 0 1 4.167 0Z"
    />
  </svg>
);
export default DiscountIcon;
