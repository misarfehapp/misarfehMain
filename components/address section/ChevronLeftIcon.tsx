import * as React from "react";
const ChevronLeftIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={6}
    height={10}
    fill="none"
    {...props}
  >
    <path
      stroke="#1E1E1E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.6}
      d="M5 9 1 5l4-4"
    />
  </svg>
);
export default ChevronLeftIcon;
