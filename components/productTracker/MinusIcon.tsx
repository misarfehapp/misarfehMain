import * as React from "react";
const MinusIcon = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={2}
    fill="none"
    {...props}
  >
    <path
      stroke="#006000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.6}
      d="M1.333 1h9.334"
    />
  </svg>
);
export default MinusIcon;
