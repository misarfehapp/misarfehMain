import * as React from "react";
const ChevronLeftIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={8}
    height={12}
    fill="none"
    {...props}
  >
    <path
      stroke="#797776"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m6.5 11-5-5 5-5"
    />
  </svg>
);
export default ChevronLeftIcon;
