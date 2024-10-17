import * as React from "react";
const ExploreIcon = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m1.25 5 2.5-3.333h10L16.25 5m-15 0v11.666a1.667 1.667 0 0 0 1.667 1.667h11.667a1.667 1.667 0 0 0 1.666-1.666V5m-15 0h15m-4.166 3.333a3.333 3.333 0 1 1-6.667 0"
    />
  </svg>
);
export default ExploreIcon;
