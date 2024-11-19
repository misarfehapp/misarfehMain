import * as React from "react";
const PlusIcon = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <path
      stroke="#484646"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7.174 1.167v11.666M1.341 7h11.666"
    />
  </svg>
);
export default PlusIcon;
