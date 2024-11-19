import * as React from "react";
const ClockIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.3}
      d="M8 4v4l2.667 1.333m4-1.333A6.667 6.667 0 1 1 1.334 8a6.667 6.667 0 0 1 13.333 0Z"
    />
  </svg>
);
export default ClockIcon;
