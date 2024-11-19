import * as React from "react";
const ChevronLeftGreen = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={6}
    height={10}
    fill="none"
    {...props}
  >
    <path
      stroke="#006000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.75 1.5 1.25 5l3.5 3.5"
    />
  </svg>
);
export default ChevronLeftGreen;
