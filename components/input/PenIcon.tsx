import * as React from "react";
const PenIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="#797776"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.6}
      d="M11.333 2A1.885 1.885 0 1 1 14 4.667l-9 9-3.667 1 1-3.667 9-9Z"
    />
  </svg>
);
export default PenIcon;
