import * as React from "react";
const ArrowUpRightIcon = (
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
      stroke={props.stroke || "#006000"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.6}
      d="m4.667 11.333 6.667-6.666m0 0H4.667m6.667 0v6.666"
    />
  </svg>
);
export default ArrowUpRightIcon;
